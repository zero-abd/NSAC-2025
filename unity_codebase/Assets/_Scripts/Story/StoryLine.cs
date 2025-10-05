using UnityEngine;

[System.Serializable]
public class StoryLine
{
    public string speakerName;
    [TextArea(3, 6)] public string dialogue;
    public Sprite portrait;
}