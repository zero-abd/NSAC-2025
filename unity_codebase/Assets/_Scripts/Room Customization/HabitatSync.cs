using System;
using System.Collections.Generic;

public static class HabitatSync
{
    // Global state for all room assignments
    private static Dictionary<string, RoomType> globalRoomAssignments = new Dictionary<string, RoomType>();

    // Event for notifying all managers when something changes
    public static event Action<string, RoomType> OnRoomTypeChanged;

    public static void SetRoomType(string roomId, RoomType type)
    {
        // Update global state
        globalRoomAssignments[roomId] = type;

        // Trigger event for all habitats
        OnRoomTypeChanged?.Invoke(roomId, type);
    }

    public static RoomType GetRoomType(string roomId)
    {
        return globalRoomAssignments.TryGetValue(roomId, out var type) ? type : RoomType.None;
    }
}