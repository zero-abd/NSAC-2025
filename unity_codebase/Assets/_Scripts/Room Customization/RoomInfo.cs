using System;
using TMPro;
using UnityEngine;

public enum RoomType {
    None,
    CrewQuarters,
    MedicalBay,
    Galley,
    Exercise,
    Lab,
    PowerStorage,
    CommsHub,
    RoverStorage,
    RepairZone,
    ExitAirlock,
    Hygiene,
    EmergencyLSS,
    CommonSpace
}

public enum RoomRelation {
    Good,
    Risky,
    Wrong
}

public class RoomInfo : MonoBehaviour {
    public string roomId;
    public TMP_Text roomNo;
    public TMP_Text roomName;
    public TMP_Text roomNameMap;
    public TMP_Dropdown dropdown;
    
    public GameObject canvas;


    public RoomType selectedType = RoomType.None;

    
    public RoomInfo[] neighbors;  
    
    void Start() {
        
        dropdown.ClearOptions();
        
        string[] roomTypes = Enum.GetNames(typeof(RoomType));
        
        dropdown.AddOptions(new System.Collections.Generic.List<string>(roomTypes));

        dropdown.value = (int)selectedType;
        dropdown.RefreshShownValue();
        
        dropdown.onValueChanged.AddListener(OnDropdownChanged);
        
        roomNo.text = roomId;
        roomName.text = selectedType.ToString();
        roomNameMap.text = selectedType.ToString();
    }

    void OnDropdownChanged(int index) {
        selectedType = (RoomType)index;
        roomName.text = selectedType.ToString();
        roomNameMap.text = selectedType.ToString();
        FindObjectOfType<HabitatManager>().ValidateAndShow();
        
        // Update global sync
        HabitatSync.SetRoomType(roomId, selectedType);
    }
    
}