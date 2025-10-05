using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

public class MenuUI : MonoBehaviour
{
    [Header("UI Panels")] 
    [SerializeField] private GameObject mainMenuCanvas;
    [SerializeField] private GameObject inGameCanvas;
    public GameObject habitatSelectionPanel;
    public GameObject missionDataSelectionPanel;
    [SerializeField] private GameObject habitatCanvas;

    [SerializeField] private GameObject habitatMapPanel;
    [SerializeField] private GameObject colonyMapPanel;
    [SerializeField] private GameObject moonSurfaceMapPanel;
    [SerializeField] private GameObject greenHouseControlPanel;
    
    [Header("Buttons")]
    public List<Button> habitatButtons;
    [SerializeField] private Button exploreButton;
    [SerializeField] private Button applyHabitatSelectionButton;
    [SerializeField] private Button applyMissionDataButton;
    [SerializeField] private Button habitatInfoButton;

    [SerializeField] private Button habitatMapButton;
    [SerializeField] private Button colonyMapButton;
    [SerializeField] private Button moonSurfaceMapButton;
    
    [Header("Drop Downs")]
    [SerializeField] private TMP_Dropdown colonyCrewDropDown;
    [SerializeField] private TMP_Dropdown durationDropDown;
    [SerializeField] private TMP_Dropdown locationDropDown;
    
    [Header("Other Scripts")]
    public HabitatScaler habitatScaler;

    [Header("Mission Data")] 
    [SerializeField] private TMP_Text missionLocationText;
    [SerializeField] private TMP_Text missionDurationText;
    [SerializeField] private TMP_Text totalCrewAmountText;
    [SerializeField] private TMP_Text totalHabitatText;
    
    private bool _hazardFlag = true;
    

    private void Awake()
    {
        Init();
        ButtonInit();
    }

    private void Init()
    {
        mainMenuCanvas.SetActive(true);
        exploreButton.gameObject.SetActive(true);
        habitatSelectionPanel.SetActive(false);
        missionDataSelectionPanel.SetActive(false);
        inGameCanvas.SetActive(false);
    }

    private void ButtonInit()
    {
        applyHabitatSelectionButton.interactable = false;
        exploreButton.onClick.AddListener( () =>
        {
            exploreButton.gameObject.SetActive(false);
            
            GameFlow.Instance.storyManager.StartStory("Intro");
        });

        applyHabitatSelectionButton.onClick.AddListener(() =>
        {
            habitatSelectionPanel.SetActive(false);
            
            GameFlow.Instance.EndMission();
            GameFlow.Instance.storyManager.StartStory("SecondMission");
        });
        
        //applyScaleButton.onClick.AddListener(ApplyScale);
        applyMissionDataButton.onClick.AddListener(ApplyMissionData);
        
        for (int i = 0; i < habitatButtons.Count; i++)
        {
            int index = i + 1;
            habitatButtons[i].onClick.AddListener(() => SelectHabitat(index));
        }
        
        habitatInfoButton.onClick.AddListener(ToggleHabitatCanvas);
        
        habitatMapButton.onClick.AddListener(ToggleHabitatMap);
        colonyMapButton.onClick.AddListener(ToggleColonyMap);
        moonSurfaceMapButton.onClick.AddListener(ToggleMoonSurfaceMap);

        // for (int i = 0; i < habitatQuantityButtons.Count && i < _qtyMap.Length; i++)
        // {
        //     int q = _qtyMap[i];
        //     habitatQuantityButtons[i].onClick.AddListener(() => SelectHabitatQuantity(q));
        // }
    }

    public void ChangeColonyData()
    {
        Debug.Log(colonyCrewDropDown.value);
        if (colonyCrewDropDown.value == 0)
        {
            float scale = 3f;
            habitatScaler.ScaleDirectChildren(new Vector3(scale, scale, scale));
            GameManager.Instance.missionCrewAmount = 4*4;
        }
        else if (colonyCrewDropDown.value == 1)
        {
            float scale = 3.5f;
            habitatScaler.ScaleDirectChildren(new Vector3(scale, scale, scale));
            GameManager.Instance.missionCrewAmount = 6*4;
        }
        else if (colonyCrewDropDown.value == 2)
        {
            float scale = 4f;
            habitatScaler.ScaleDirectChildren(new Vector3(scale, scale, scale));
            GameManager.Instance.missionCrewAmount = 8*4;
        }
    }
    
    public void ChangeMissionDurationData()
    {
        Debug.Log(durationDropDown.options[durationDropDown.value].text);
        GameManager.Instance.missionDuration = durationDropDown.options[durationDropDown.value].text;
    }

    public void ChangeLocationData()
    {
        GameManager.Instance.missionLocation = locationDropDown.options[locationDropDown.value].text;
    }

    public void SelectHabitat(int num)
    {
        applyHabitatSelectionButton.interactable = true;
        GameManager.Instance.selectedHabitatNo = num;
        GameManager.Instance.TriggerColony();
    }

    private void ApplyMissionData()
    {
        missionDataSelectionPanel.SetActive(false);
        mainMenuCanvas.SetActive(false);
        inGameCanvas.SetActive(true);
        GameManager.Instance.ToggleHabitatViewCamera(false);
        
        missionLocationText.text = "Mission Location : "+GameManager.Instance.missionLocation;
        missionDurationText.text = "Mission Duration : "+GameManager.Instance.missionDuration;
        totalCrewAmountText.text = "Total Crew : "+GameManager.Instance.missionCrewAmount;
        totalHabitatText.text = "Total Habitat : "+4;
        
        habitatCanvas = GameManager.Instance.habitatManagers[3].canvas;
        GameFlow.Instance.EndMission();
        GameFlow.Instance.storyManager.StartStory("ThirdMission");
    }

    public void ToggleHabitatCanvas()
    {
        habitatCanvas.SetActive(!habitatCanvas.activeSelf);
    }

    public void ToggleHabitatMap()
    {
        habitatMapPanel.SetActive(!habitatMapPanel.activeSelf);

        if (habitatMapPanel.activeSelf)
        {
            foreach (var manager in GameManager.Instance.habitatManagers)
            {
                manager.mapCanvas.SetActive(true);
            }
        }
        else
        {
            foreach (var manager in GameManager.Instance.habitatManagers)
            {
                manager.mapCanvas.SetActive(false);
            }
        }

    }
    
    public void ToggleColonyMap()
    {
        colonyMapPanel.SetActive(!colonyMapPanel.activeSelf);
    }
    
    public void ToggleMoonSurfaceMap()
    {
        moonSurfaceMapPanel.SetActive(!moonSurfaceMapPanel.activeSelf);
    }

    public void CloseGreenHouseControlPanel()
    {
        if (GameManager.Instance.allGreenHouseReady && _hazardFlag)
        {
            _hazardFlag = false;
            HazardUIManager.Instance.TriggerTestHazard();
        }
    }
}
