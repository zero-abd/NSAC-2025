using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections.Generic;

public class MissionManager : MonoBehaviour
{
    [Header("Missions")]
    public Mission[] missions;
    private int currentMissionIndex = -1;

    [Header("Mission Panel UI")]
    public GameObject missionPanel;
    public TextMeshProUGUI missionTitleText;
    public TextMeshProUGUI missionDescriptionText;
    public Button startButton;

    [Header("HUD UI")]
    public GameObject hudPanel;
    public TextMeshProUGUI hudTitleText;
    public TextMeshProUGUI hudDescriptionText;

    [Header("Mission List UI")]
    public Transform missionListParent;
    public GameObject missionListItemPrefab;
    private List<MissionListItemUI> missionUIItems = new List<MissionListItemUI>();

    void Start()
    {
        missionPanel.SetActive(false);
        hudPanel.SetActive(false);
        startButton.onClick.AddListener(StartMission);

        PopulateMissionList();
    }

    void PopulateMissionList()
    {
        foreach (Mission m in missions)
        {
            GameObject itemObj = Instantiate(missionListItemPrefab, missionListParent);
            MissionListItemUI ui = itemObj.GetComponent<MissionListItemUI>();
            ui.SetData(m.title, "Not Started");
            missionUIItems.Add(ui);
        }
    }

    public void LoadMission(int index)
    {
        if (index < 0 || index >= missions.Length) return;

        currentMissionIndex = index;
        Mission mission = missions[index];

        missionPanel.SetActive(true);
        hudPanel.SetActive(false);

        missionTitleText.text = "(Mission 0"+(index+1)+") "+mission.title;
        missionDescriptionText.text = mission.description;
        startButton.gameObject.SetActive(true);

        UpdateMissionListUI(index, "Not Started");
    }

    private void StartMission()
    {
        if (currentMissionIndex < 0) return;

        Mission mission = missions[currentMissionIndex];
        mission.isActive = true;

        hudPanel.SetActive(true);
        hudTitleText.text = "(Mission 0"+(currentMissionIndex+1)+") "+mission.title;
        hudDescriptionText.text = mission.description;

        startButton.gameObject.SetActive(false);
        missionPanel.SetActive(false);

        UpdateMissionListUI(currentMissionIndex, "Active");
        
        // 🔥 Fire start event
        mission.OnMissionStarted?.Invoke();
    }

    public void CompleteMission()
    {
        if (currentMissionIndex < 0) return;

        Mission mission = missions[currentMissionIndex];
        mission.isActive = false;
        mission.isCompleted = true;

        hudPanel.SetActive(false);
        UpdateMissionListUI(currentMissionIndex, "Completed ✅");
        
        // 🔥 Fire complete event
        mission.OnMissionCompleted?.Invoke();
        
        missionPanel.SetActive(false);

        // int nextIndex = currentMissionIndex + 1;
        // if (nextIndex < missions.Length)
        // {
        //     LoadMission(nextIndex);
        // }
        // else
        // {
        //     Debug.Log("All missions completed!");
        //     missionPanel.SetActive(false);
        // }
    }

    private void UpdateMissionListUI(int index, string status)
    {
        if (index < 0 || index >= missionUIItems.Count) return;
        missionUIItems[index].SetStatus(status);
    }
}
