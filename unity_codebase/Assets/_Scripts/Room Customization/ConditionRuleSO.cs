using UnityEngine;

[CreateAssetMenu(fileName = "ConditionRule", menuName = "Habitat/ConditionRule")]
public class ConditionRuleSO : ScriptableObject
{
    public string description;
    public RoomType roomA;
    public RoomType roomB;
    public bool mustBeAdjacent;
    public bool mustNotBeAdjacent;
    public bool mustBeCentral;
    [TextArea] public string warningMessage;
}