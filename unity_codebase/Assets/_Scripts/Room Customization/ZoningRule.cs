using UnityEngine;

[System.Serializable]
public class ZoningRule {
    public RoomType requiredRoom;
    public RoomType neighborRoom;
    public bool mustBeAdjacent;
}

// Adjacency rule for two rooms
[System.Serializable]
public class AdjacencyRule {
    public RoomType roomA;
    public RoomType roomB;
    public RoomRelation relation;
    [TextArea] public string cause;  // <-- explanation / warning message
}

public struct AdjacencyData {
    public RoomRelation relation;
    public string cause;

    public AdjacencyData(RoomRelation relation, string cause) {
        this.relation = relation;
        this.cause = cause;
    }
}

// Special condition rules
[System.Serializable]
public class ConditionRule {
    public string description;   // "Medical Bay must be placed beside Exercise Zone"
    public RoomType roomA;
    public RoomType roomB;
    public bool mustBeAdjacent;  // true if required adjacency
    public bool mustNotBeAdjacent; // true if forbidden adjacency
    public bool mustBeCentral;   // for rules like "Storage should be central"
    public string warningMessage;
}