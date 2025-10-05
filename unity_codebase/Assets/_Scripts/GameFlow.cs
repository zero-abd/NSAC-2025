using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameFlow : MonoBehaviourSingleton<GameFlow>
{
    public StoryManager storyManager;
    public MissionManager missionManager;
    
    void OnEnable()
    {
        StoryTeller.StoryStarted += OnStoryStarted;
        StoryTeller.StoryEnded   += OnStoryEnded;
    }
    
    void OnDisable()
    {
        StoryTeller.StoryStarted -= OnStoryStarted;
        StoryTeller.StoryEnded   -= OnStoryEnded;
    }

    void OnStoryStarted(StoryData storyData)
    {
        switch (storyData.storyID)
        {
            case "Intro":
                Debug.Log("Intro story started!");
                break;

            case "SecondMission":
                Debug.Log("Chapter 1 started!");
                break;

            case "ThirdMission":
                Debug.Log("Boss battle started!");
                break;
            case "FourthMission":
                Debug.Log("Boss battle started!");
                break;
            case "FifthMission":
                
                break;
            case "GreenHouseDone":
                Debug.Log("Boss battle started!");
                break;  //FifthMission
        }
    }

    void OnStoryEnded(StoryData storyData)
    {
        switch (storyData.storyID)
        {
            case "Intro":
                GameManager.Instance.menuUI.habitatSelectionPanel.SetActive(true);
                GameManager.Instance.ToggleSurfaceCamera(false);
                GameManager.Instance.ToggleHabitatViewCamera(true);
                StartMission(0);
                break;

            case "SecondMission":
                GameManager.Instance.menuUI.missionDataSelectionPanel.SetActive(true);
                StartMission(1);
                break;

            case "ThirdMission":
                StartMission(2);
                break;
            case "FourthMission":
                StartMission(3);
                break;
            case "FifthMission":
                StartMission(4);
                GameManager.Instance.batteryUI.TriggerConsumptionSpike(400f);
                break;
            case "GreenHouseDone":
                GameManager.Instance.TeleportPlayer(GameManager.Instance.habitatPlayerSpawnPosition);
                //StartCoroutine(DelayedHazard());
                break;
            case "SolarPanelClearDone":
                GameManager.Instance.TeleportPlayer(GameManager.Instance.habitatPlayerSpawnPosition);
                GameManager.Instance.batteryUI.TriggerConsumptionSpike(0f);
                break;
        }
    }

    public void StartMission(int index)
    {
        missionManager.LoadMission(index);
    }

    public void EndMission()
    {
        missionManager.CompleteMission();
    }
    
    private IEnumerator DelayedHazard()
    {
        yield return new WaitForSeconds(1f);
        HazardUIManager.Instance.TriggerTestHazard();
    }

    public void StartStory(string storyName)
    {
        storyManager.StartStory(storyName);
    }
}
