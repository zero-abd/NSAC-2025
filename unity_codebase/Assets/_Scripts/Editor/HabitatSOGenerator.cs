#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;

public class HabitatSOGenerator
{
    [MenuItem("Habitat/Generate All Rules")]
    public static void GenerateAllRules()
    {
        GenerateAdjacencyRules();
        GenerateConditionRules();
        AssetDatabase.SaveAssets();
        Debug.Log("✅ All Habitat ScriptableObjects generated!");
    }

    // ------------------ Adjacency Rules ------------------
    private static void GenerateAdjacencyRules()
    {
        void CreateRule(RoomType a, RoomType b, RoomRelation relation, string cause)
        {
            var rule = ScriptableObject.CreateInstance<AdjacencyRuleSO>();
            rule.roomA = a;
            rule.roomB = b;
            rule.relation = relation;
            rule.cause = cause;

            string path = $"Assets/HabitatRules/Adjacency/{a}_{b}.asset";
            AssetDatabase.CreateAsset(rule, path);
        }

        // --- ExitAirlock Rules ---
        CreateRule(RoomType.ExitAirlock, RoomType.CrewQuarters, RoomRelation.Wrong, "Don’t bring lunar dust into sleeping zones.");
        CreateRule(RoomType.ExitAirlock, RoomType.MedicalBay, RoomRelation.Wrong, "Don’t bring lunar dust into sterile zones.");
        CreateRule(RoomType.ExitAirlock, RoomType.Galley, RoomRelation.Wrong, "Don’t bring lunar dust into food prep.");
        CreateRule(RoomType.ExitAirlock, RoomType.RoverStorage, RoomRelation.Good, "Clean transition to outdoor ops or supply chain.");
        CreateRule(RoomType.ExitAirlock, RoomType.RepairZone, RoomRelation.Good, "Logical flow to maintenance/outdoor tasks.");
        CreateRule(RoomType.ExitAirlock, RoomType.EmergencyLSS, RoomRelation.Good, "Easy emergency access from outside.");
        CreateRule(RoomType.ExitAirlock, RoomType.Exercise, RoomRelation.Risky, "Unusual path; may expose sensitive areas to dust.");
        CreateRule(RoomType.ExitAirlock, RoomType.Lab, RoomRelation.Risky, "Dust may contaminate sensitive equipment.");
        CreateRule(RoomType.ExitAirlock, RoomType.PowerStorage, RoomRelation.Risky, "Dust near critical systems.");
        CreateRule(RoomType.ExitAirlock, RoomType.CommsHub, RoomRelation.Risky, "Dust could interfere with communications.");

        // --- RoverStorage Rules ---
        CreateRule(RoomType.RoverStorage, RoomType.RepairZone, RoomRelation.Good, "Maintenance and outside link fit together.");
        CreateRule(RoomType.RoverStorage, RoomType.ExitAirlock, RoomRelation.Good, "Logical flow for operations.");
        CreateRule(RoomType.RoverStorage, RoomType.CrewQuarters, RoomRelation.Wrong, "Vehicles spread dust/chemicals near people.");
        CreateRule(RoomType.RoverStorage, RoomType.Galley, RoomRelation.Wrong, "Vehicles spread dust near food.");
        CreateRule(RoomType.RoverStorage, RoomType.MedicalBay, RoomRelation.Wrong, "Vehicles spread dust near sterile area.");
        CreateRule(RoomType.RoverStorage, RoomType.Lab, RoomRelation.Risky, "Noise/dust near sensitive equipment.");
        CreateRule(RoomType.RoverStorage, RoomType.PowerStorage, RoomRelation.Risky, "Noise/dust near power systems.");
        CreateRule(RoomType.RoverStorage, RoomType.CommsHub, RoomRelation.Risky, "Dust/noise near communication hub.");

        // --- RepairZone Rules ---
        CreateRule(RoomType.RepairZone, RoomType.RoverStorage, RoomRelation.Good, "Maintenance flow aligned.");
        CreateRule(RoomType.RepairZone, RoomType.PowerStorage, RoomRelation.Good, "Technical zone matches supply.");
        CreateRule(RoomType.RepairZone, RoomType.MedicalBay, RoomRelation.Wrong, "Dirty zone clashes with sterile area.");
        CreateRule(RoomType.RepairZone, RoomType.Galley, RoomRelation.Wrong, "Dirty zone clashes with food prep.");
        CreateRule(RoomType.RepairZone, RoomType.CrewQuarters, RoomRelation.Wrong, "Dirty zone near rest areas.");
        CreateRule(RoomType.RepairZone, RoomType.Lab, RoomRelation.Risky, "Noise may disturb experiments.");
        CreateRule(RoomType.RepairZone, RoomType.CommsHub, RoomRelation.Risky, "Noise may affect comms.");
        CreateRule(RoomType.RepairZone, RoomType.Exercise, RoomRelation.Risky, "Noise may disturb workouts.");

        // --- Hygiene Rules ---
        CreateRule(RoomType.Hygiene, RoomType.CrewQuarters, RoomRelation.Good, "Close access for health & emergencies.");
        CreateRule(RoomType.Hygiene, RoomType.MedicalBay, RoomRelation.Good, "Sanitation access for treatment.");
        CreateRule(RoomType.Hygiene, RoomType.Galley, RoomRelation.Risky, "Waste near food is unsafe.");
        CreateRule(RoomType.Hygiene, RoomType.PowerStorage, RoomRelation.Wrong, "Water near electrical/supplies = hazard.");
        CreateRule(RoomType.Hygiene, RoomType.Exercise, RoomRelation.Good, "Logical flow after workouts.");

        // --- MedicalBay Rules ---
        CreateRule(RoomType.MedicalBay, RoomType.CrewQuarters, RoomRelation.Good, "Fast access for treatment.");
        CreateRule(RoomType.MedicalBay, RoomType.Hygiene, RoomRelation.Good, "Sanitation nearby.");
        CreateRule(RoomType.MedicalBay, RoomType.Lab, RoomRelation.Risky, "Noise may compromise sterile environment.");
        CreateRule(RoomType.MedicalBay, RoomType.CommsHub, RoomRelation.Risky, "Noise may compromise sterile environment.");
        CreateRule(RoomType.MedicalBay, RoomType.ExitAirlock, RoomRelation.Wrong, "Risk of contamination from outside.");
        CreateRule(RoomType.MedicalBay, RoomType.RoverStorage, RoomRelation.Wrong, "Risk of contamination from vehicles.");
        CreateRule(RoomType.MedicalBay, RoomType.RepairZone, RoomRelation.Wrong, "Risk of contamination from repairs.");

        // --- Exercise Rules ---
        CreateRule(RoomType.Exercise, RoomType.CrewQuarters, RoomRelation.Good, "Daily living chain.");
        CreateRule(RoomType.Exercise, RoomType.Galley, RoomRelation.Good, "Part of daily life modules.");
        CreateRule(RoomType.Exercise, RoomType.MedicalBay, RoomRelation.Good, "Quick response to injuries.");
        CreateRule(RoomType.Exercise, RoomType.PowerStorage, RoomRelation.Risky, "Noise/vibration may disturb equipment.");
        CreateRule(RoomType.Exercise, RoomType.ExitAirlock, RoomRelation.Wrong, "Mixing sweaty zones with dirty areas.");
        CreateRule(RoomType.Exercise, RoomType.RoverStorage, RoomRelation.Wrong, "Unsafe near vehicles.");
        CreateRule(RoomType.Exercise, RoomType.RepairZone, RoomRelation.Wrong, "Unsafe near repair work.");

        // --- Galley Rules ---
        CreateRule(RoomType.Galley, RoomType.CrewQuarters, RoomRelation.Good, "Food-rest-supply chain aligned.");
        CreateRule(RoomType.Galley, RoomType.PowerStorage, RoomRelation.Good, "Easy supply chain.");
        CreateRule(RoomType.Galley, RoomType.Hygiene, RoomRelation.Risky, "Too close to waste areas.");
        CreateRule(RoomType.Galley, RoomType.ExitAirlock, RoomRelation.Wrong, "Never put food near dusty compartments.");
        CreateRule(RoomType.Galley, RoomType.RoverStorage, RoomRelation.Wrong, "Never put food near vehicles.");
        CreateRule(RoomType.Galley, RoomType.RepairZone, RoomRelation.Wrong, "Never put food near repairs.");

        // --- CrewQuarters Rules ---
        CreateRule(RoomType.CrewQuarters, RoomType.Hygiene, RoomRelation.Good, "Health and rest support.");
        CreateRule(RoomType.CrewQuarters, RoomType.MedicalBay, RoomRelation.Good, "Sterile access nearby.");
        CreateRule(RoomType.CrewQuarters, RoomType.Galley, RoomRelation.Good, "Daily life modules.");
        CreateRule(RoomType.CrewQuarters, RoomType.Exercise, RoomRelation.Good, "Daily life modules.");
        CreateRule(RoomType.CrewQuarters, RoomType.ExitAirlock, RoomRelation.Wrong, "Must not touch dirty/technical zones.");
        CreateRule(RoomType.CrewQuarters, RoomType.RoverStorage, RoomRelation.Wrong, "Must not touch dirty zones.");
        CreateRule(RoomType.CrewQuarters, RoomType.RepairZone, RoomRelation.Wrong, "Must not touch repair zones.");

        // --- Lab Rules ---
        CreateRule(RoomType.Lab, RoomType.CommsHub, RoomRelation.Good, "Research needs stable comms.");
        CreateRule(RoomType.Lab, RoomType.PowerStorage, RoomRelation.Good, "Stable power for experiments.");
        CreateRule(RoomType.Lab, RoomType.MedicalBay, RoomRelation.Risky, "Cross-contamination risk.");
        CreateRule(RoomType.Lab, RoomType.ExitAirlock, RoomRelation.Wrong, "Dust ruins equipment.");
        CreateRule(RoomType.Lab, RoomType.RoverStorage, RoomRelation.Wrong, "Dust/vibration risk.");
        CreateRule(RoomType.Lab, RoomType.RepairZone, RoomRelation.Wrong, "Dust/vibration risk.");

        // --- PowerStorage Rules ---
        CreateRule(RoomType.PowerStorage, RoomType.RepairZone, RoomRelation.Good, "Technical & supply chain aligned.");
        CreateRule(RoomType.PowerStorage, RoomType.RoverStorage, RoomRelation.Good, "Technical & supply chain aligned.");
        CreateRule(RoomType.PowerStorage, RoomType.Galley, RoomRelation.Wrong, "Food near electricity hazard.");
        CreateRule(RoomType.PowerStorage, RoomType.Hygiene, RoomRelation.Wrong, "Water near power hazard.");
        CreateRule(RoomType.PowerStorage, RoomType.Exercise, RoomRelation.Risky, "Noise/vibration may disturb systems.");

        // --- CommsHub Rules ---
        CreateRule(RoomType.CommsHub, RoomType.Lab, RoomRelation.Good, "Essential data + power chain.");
        CreateRule(RoomType.CommsHub, RoomType.PowerStorage, RoomRelation.Good, "Essential chain.");
        CreateRule(RoomType.CommsHub, RoomType.CrewQuarters, RoomRelation.Risky, "Noise/privacy issues.");
        CreateRule(RoomType.CommsHub, RoomType.Exercise, RoomRelation.Risky, "Noise/privacy issues.");
        CreateRule(RoomType.CommsHub, RoomType.ExitAirlock, RoomRelation.Wrong, "External traffic threatens reliability.");
        CreateRule(RoomType.CommsHub, RoomType.RoverStorage, RoomRelation.Wrong, "External traffic threatens reliability.");
        CreateRule(RoomType.CommsHub, RoomType.RepairZone, RoomRelation.Wrong, "External traffic threatens reliability.");

        // --- EmergencyLSS Rules ---
        CreateRule(RoomType.EmergencyLSS, RoomType.ExitAirlock, RoomRelation.Good, "Easy access for resupply or escape.");
        CreateRule(RoomType.EmergencyLSS, RoomType.PowerStorage, RoomRelation.Good, "Access to supplies.");
        CreateRule(RoomType.EmergencyLSS, RoomType.Galley, RoomRelation.Risky, "Daily-use zones may block backup.");
        CreateRule(RoomType.EmergencyLSS, RoomType.CrewQuarters, RoomRelation.Risky, "Daily-use zones may block backup.");
        CreateRule(RoomType.EmergencyLSS, RoomType.MedicalBay, RoomRelation.Wrong, "Must stay clear of high-contamination zones.");
        CreateRule(RoomType.EmergencyLSS, RoomType.Hygiene, RoomRelation.Wrong, "Must stay clear of high-contamination zones.");
        
        //Common Space
        CreateRule(RoomType.CommonSpace, RoomType.ExitAirlock, RoomRelation.Risky, "Airlock dust and contaminants could spread into shared areas.");
        CreateRule(RoomType.CommonSpace, RoomType.PowerStorage, RoomRelation.Good, "Central access to stored power supports daily activity.");
        CreateRule(RoomType.CommonSpace, RoomType.Galley, RoomRelation.Good, "Close proximity makes mealtime more efficient and social.");
        CreateRule(RoomType.CommonSpace, RoomType.CrewQuarters, RoomRelation.Good, "Encourages social interaction and easy transition to rest areas.");
        CreateRule(RoomType.CommonSpace, RoomType.MedicalBay, RoomRelation.Good, "Quick access ensures emergencies are reachable from central hub.");
        CreateRule(RoomType.CommonSpace, RoomType.Hygiene, RoomRelation.Good, "Shared location provides convenient access for all crew members.");
    }

    // ------------------ Condition Rules ------------------
    private static void GenerateConditionRules()
    {
        void CreateRule(RoomType a, RoomType b, bool mustBeAdjacent, bool mustNotBeAdjacent, bool mustBeCentral, string message)
        {
            var rule = ScriptableObject.CreateInstance<ConditionRuleSO>();
            rule.roomA = a;
            rule.roomB = b;
            rule.mustBeAdjacent = mustBeAdjacent;
            rule.mustNotBeAdjacent = mustNotBeAdjacent;
            rule.mustBeCentral = mustBeCentral;
            rule.warningMessage = message;

            string name = b != RoomType.None ? $"{a}_{b}" : a.ToString();
            string path = $"Assets/HabitatRules/Conditions/{name}.asset";
            AssetDatabase.CreateAsset(rule, path);
        }

        CreateRule(RoomType.MedicalBay, RoomType.Exercise, true, false, false, " Injury risk increases if exercise and medical are far apart.");
        CreateRule(RoomType.Galley, RoomType.CrewQuarters, true, false, false, " Fatigue and inefficiency if food access is too far.");
        CreateRule(RoomType.Hygiene, RoomType.CrewQuarters, true, false, false, " Poor hygiene flow increases risk of contamination.");
        CreateRule(RoomType.ExitAirlock, RoomType.RoverStorage, true, false, false, " Delays in emergencies if exit and rover aren’t aligned.");
        CreateRule(RoomType.Hygiene, RoomType.Galley, false, true, false, " Cross-contamination risk between food and waste.");
        CreateRule(RoomType.PowerStorage, RoomType.None, false, false, true, " Mission time wasted if storage is too isolated.");
        CreateRule(RoomType.RepairZone, RoomType.RoverStorage, true, false, false, " Slow repairs can compromise external missions.");
        CreateRule(RoomType.Exercise, RoomType.Galley, false, true, false, " Contamination risk from food near equipment.");
        CreateRule(RoomType.CrewQuarters, RoomType.RepairZone, false, true, false, " Noise and mechanical work disturb crew rest.");
        CreateRule(RoomType.EmergencyLSS, RoomType.None, false, true, false, " Blocked emergency corridor = critical evacuation delays.");
        CreateRule(RoomType.Hygiene, RoomType.MedicalBay, false, true, false, " Risk of infection spread between hygiene and treatment.");
        CreateRule(RoomType.MedicalBay, RoomType.Galley, false, true, false, " Sterility compromised if medical is near food prep.");
    }
}
#endif
