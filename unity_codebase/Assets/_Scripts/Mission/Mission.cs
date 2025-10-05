using UnityEngine;
using UnityEngine.Events;

[System.Serializable]
public class Mission
{
    public string title;
    [TextArea] public string description;
    public bool isActive;
    public bool isCompleted;
    
    [Header("Events")]
    public UnityEvent OnMissionStarted;
    public UnityEvent OnMissionCompleted;
}