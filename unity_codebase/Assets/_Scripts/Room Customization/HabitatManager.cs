using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine.UI;

public class HabitatManager : MonoBehaviour
{
    public List<RoomInfo> rooms = new List<RoomInfo>();

    // Assign ScriptableObjects here
    public List<AdjacencyRuleSO> adjacencyRulesSO = new List<AdjacencyRuleSO>();
    public List<ConditionRuleSO> conditionRulesSO = new List<ConditionRuleSO>();

    public GameObject canvas;
    public GameObject mapCanvas;
    public TextMeshProUGUI feedbackText;
    public TextMeshProUGUI metaFeedbackText;  // duplicates / missing info

    private Dictionary<(RoomType, RoomType), AdjacencyData> adjacencyLookup;
    
    private void OnEnable()
    {
        HabitatSync.OnRoomTypeChanged += ApplySync;
    }

    private void OnDisable()
    {
        HabitatSync.OnRoomTypeChanged -= ApplySync;
    }
    private void ApplySync(string roomId, RoomType type)
    {
        // Find the room in THIS habitat
        var room = rooms.Find(r => r.roomId == roomId);
        if (room != null && room.selectedType != type)
        {
            // Update silently (without re-triggering dropdown event)
            room.selectedType = type;
            room.dropdown.value = (int)type;
        }
    }

    private void Awake()
    {
        foreach (RoomInfo room in rooms)
        {
            room.canvas.GetComponent<Canvas>().worldCamera = GameManager.Instance.uiCam;
        }
        // Auto collect rooms if not assigned
        if (rooms.Count == 0)
            rooms.AddRange(FindObjectsOfType<RoomInfo>());

        // Build adjacency lookup
        adjacencyLookup = new Dictionary<(RoomType, RoomType), AdjacencyData>();

        foreach (var r in adjacencyRulesSO)
        {
            var data = new AdjacencyData(r.relation, r.cause);
            adjacencyLookup[(r.roomA, r.roomB)] = data;
            adjacencyLookup[(r.roomB, r.roomA)] = data; // symmetric
        }
    }

    public void ValidateAndShow()
    {
        string habitatResult = ValidateHabitat();
        string metaResult = ValidateMeta();

        feedbackText.text = habitatResult;
        metaFeedbackText.text = metaResult;

        // Check: All rooms assigned
        bool allAssigned = !rooms.Any(r => r.selectedType == RoomType.None);

        // Check: No duplicates
        bool noDuplicates = !rooms.GroupBy(r => r.selectedType)
            .Any(g => g.Key != RoomType.None && g.Count() > 1);

        // Final verdict
        if (allAssigned && noDuplicates) //                         && habitatResult == "Habitat layout valid!" 
            //&& metaResult == "All room types properly assigned."
        {
            Debug.Log("✅ Habitat is fully assigned, no duplicates, and layout is valid!");
            GameFlow.Instance.EndMission();
            GameFlow.Instance.storyManager.StartStory("FourthMission");
        }
    }


    public string ValidateHabitat()
    {
        List<string> feedback = new List<string>();

        if (rooms.Any(r => r.selectedType == RoomType.None))
            feedback.Add("Not all rooms are assigned a type.");

        // 🔍 adjacency rules
        foreach (var room in rooms)
        {
            foreach (var neighbor in room.neighbors)
            {
                if (neighbor == null) continue;
                if (string.Compare(room.roomId, neighbor.roomId) >= 0) continue;

                var key = (room.selectedType, neighbor.selectedType);
                if (adjacencyLookup.TryGetValue(key, out var data))
                {
                    string baseMsg = $"{room.selectedType} ({room.roomId}) is next to {neighbor.selectedType} ({neighbor.roomId})";
                    switch (data.relation)
                    {
                        case RoomRelation.Good:  feedback.Add($" {baseMsg} is GOOD. Cause: {data.cause}"); break;
                        case RoomRelation.Risky: feedback.Add($" {baseMsg} is RISKY. Cause: {data.cause}"); break;
                        case RoomRelation.Wrong: feedback.Add($" {baseMsg} is WRONG. Cause: {data.cause}"); break;
                    }
                }
            }
        }

        // 🔍 condition rules
        foreach (var rule in conditionRulesSO)
        {
            var roomA = rooms.Find(r => r.selectedType == rule.roomA);
            var roomB = rooms.Find(r => r.selectedType == rule.roomB);

            if (roomA == null || roomB == null) continue;

            bool areNeighbors = System.Array.Exists(roomA.neighbors, n => n == roomB);
            string baseMsg = $"{roomA.selectedType} ({roomA.roomId}) and {roomB.selectedType} ({roomB.roomId})";

            if (rule.mustBeAdjacent && !areNeighbors)
                feedback.Add($" {baseMsg} should be ADJACENT but isn’t. Cause: {rule.warningMessage}");
            if (rule.mustNotBeAdjacent && areNeighbors)
                feedback.Add($" {baseMsg} must NOT be adjacent. Cause: {rule.warningMessage}");
            if (rule.mustBeCentral)
            {
                int total = rooms.Count;
                int connected = roomA.neighbors.Length;
                if (connected < total / 2)
                    feedback.Add($" {roomA.selectedType} ({roomA.roomId}) should be central. Cause: {rule.warningMessage}");
            }
        }

        return feedback.Count == 0 ? "Habitat layout valid!" : string.Join("\n", feedback);
    }

    
    public string ValidateMeta()
    {
        List<string> metaFeedback = new List<string>();

        // Count how many of each type exist
        var grouped = rooms.GroupBy(r => r.selectedType);

        // Check duplicates (but skip None)
        foreach (var g in grouped)
        {
            if (g.Key == RoomType.None) continue;

            if (g.Count() > 1)
                metaFeedback.Add($"Multiple {g.Key} rooms found: {g.Count()} instances.");
        }

        // Check unassigned rooms
        int unassignedCount = rooms.Count(r => r.selectedType == RoomType.None);
        if (unassignedCount > 0)
            metaFeedback.Add($"{unassignedCount} room(s) are unassigned (RoomType.None).");

        // Check missing types (all except None)
        foreach (RoomType type in System.Enum.GetValues(typeof(RoomType)))
        {
            if (type == RoomType.None) continue;

            if (!rooms.Any(r => r.selectedType == type))
                metaFeedback.Add($"No {type} assigned in the habitat.");
        }

        return metaFeedback.Count == 0 ? "All room types properly assigned." : string.Join("\n", metaFeedback);
    }
    
}