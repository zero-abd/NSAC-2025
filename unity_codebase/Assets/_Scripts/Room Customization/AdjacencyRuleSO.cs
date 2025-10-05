using UnityEngine;

[CreateAssetMenu(fileName = "AdjacencyRule", menuName = "Habitat/AdjacencyRule")]
public class AdjacencyRuleSO : ScriptableObject
{
    public RoomType roomA;
    public RoomType roomB;
    public RoomRelation relation;
    [TextArea] public string cause;
}