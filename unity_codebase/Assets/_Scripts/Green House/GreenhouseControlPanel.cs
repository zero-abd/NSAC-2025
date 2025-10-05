using System;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GreenhouseControlPanel : MonoBehaviour
{
    public enum CultivationElement
    {
        None,
        Wheat,
        Corn,
        Potato,
        Soybean,
        Sunflower,
        DryBeans,
        Quinoa,
        SweetPotato,
        Microgreens
    }
    
    [Serializable]
    public class CropStats
    {
        public string name;
        public int daysToHarvest;
        public float yieldPerM2PerDay;
        public float yieldPerRack;
        public float oxygenPerRack;
        public float co2PerRack;
        public float caloriesPerRack;
        public string waterUse;
    }
    
    [Header("Config")]
    [Tooltip("How many identical greenhouses exist in the colony?")]
    public int greenhouseCount = 4;

    [Header("UI References")]
    public TMP_Dropdown[] rackDropdowns;
    public TMP_Text totalStatsText;
    public TMP_Text quickStatsText;

    private Dictionary<CultivationElement, CropStats> cropDatabase = new Dictionary<CultivationElement, CropStats>();


    void Start()
    {
        SetupCropDatabase();
        SetupDropdowns();
        UpdateTotalStats();
    }

    void SetupCropDatabase()
    {
        cropDatabase[CultivationElement.Wheat] = new CropStats { name = "Wheat", daysToHarvest = 100, yieldPerM2PerDay = 25, yieldPerRack = 200, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 680, waterUse = "Medium" };
        cropDatabase[CultivationElement.Corn] = new CropStats { name = "Corn", daysToHarvest = 100, yieldPerM2PerDay = 100, yieldPerRack = 800, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 2920, waterUse = "High" };
        cropDatabase[CultivationElement.Potato] = new CropStats { name = "Potato", daysToHarvest = 100, yieldPerM2PerDay = 38, yieldPerRack = 300, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 231, waterUse = "High" };
        cropDatabase[CultivationElement.Soybean] = new CropStats { name = "Soybean", daysToHarvest = 100, yieldPerM2PerDay = 20, yieldPerRack = 160, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 1402, waterUse = "High" };
        cropDatabase[CultivationElement.Sunflower] = new CropStats { name = "Sunflower", daysToHarvest = 100, yieldPerM2PerDay = 30, yieldPerRack = 240, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 544, waterUse = "Med-High" };
        cropDatabase[CultivationElement.DryBeans] = new CropStats { name = "Dry Beans", daysToHarvest = 100, yieldPerM2PerDay = 20, yieldPerRack = 160, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 589, waterUse = "Medium" };
        cropDatabase[CultivationElement.Quinoa] = new CropStats { name = "Quinoa", daysToHarvest = 100, yieldPerM2PerDay = 20, yieldPerRack = 160, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 138, waterUse = "High" };
        cropDatabase[CultivationElement.SweetPotato] = new CropStats { name = "Sweet Potato", daysToHarvest = 135, yieldPerM2PerDay = 20, yieldPerRack = 160, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 400, waterUse = "High" };
        cropDatabase[CultivationElement.Microgreens] = new CropStats { name = "Microgreens", daysToHarvest = 10, yieldPerM2PerDay = 200, yieldPerRack = 1600, oxygenPerRack = 200, co2PerRack = 50, caloriesPerRack = 400, waterUse = "Low" };
    }

    void SetupDropdowns()
    {
        string[] elementNames = Enum.GetNames(typeof(CultivationElement));

        foreach (var dropdown in rackDropdowns)
        {
            dropdown.ClearOptions();
            dropdown.AddOptions(new List<string>(elementNames));
            dropdown.value = 0;
            dropdown.onValueChanged.AddListener(delegate { UpdateTotalStats(); });
        }
    }

    void UpdateTotalStats()
    {
        int count = 0;
        float sumDays = 0, sumYieldM2 = 0, sumYieldRack = 0, sumO2 = 0, sumCO2 = 0, sumCalories = 0;

        bool allAssigned = true;

        foreach (var dropdown in rackDropdowns)
        {
            int selectedIndex = dropdown.value;
            CultivationElement selected = (CultivationElement)selectedIndex;

            if (selected == CultivationElement.None)
            {
                allAssigned = false;
                continue; // skip None in stats
            }

            CropStats stats = cropDatabase[selected];

            sumDays += stats.daysToHarvest;
            sumYieldM2 += stats.yieldPerM2PerDay;
            sumYieldRack += stats.yieldPerRack;
            sumO2 += stats.oxygenPerRack;
            sumCO2 += stats.co2PerRack;
            sumCalories += stats.caloriesPerRack;

            count++;
        }

        if (count == 0)
        {
            totalStatsText.text = "No crops selected 🌑";
            return;
        }

        // Average for greenhouse
        float avgDays = sumDays / count;
        float avgYieldM2 = sumYieldM2 / count;
        float avgYieldRack = sumYieldRack / count;
        float avgO2 = sumO2 / count;
        float avgCO2 = sumCO2 / count;
        float avgCalories = sumCalories / count;
        
        // Scale totals across all greenhouses
        float totalYieldAll = sumYieldRack * greenhouseCount;
        float totalO2All = sumO2 * greenhouseCount;
        float totalCO2All = sumCO2 * greenhouseCount;
        float totalCaloriesAll = sumCalories * greenhouseCount;

        totalStatsText.text =
            $"🌱 Lunar Greenhouse Stats (x{greenhouseCount})\n\n" +
            $"➡ Totals Across Colony:\n" +
            $"Yield: {totalYieldAll:F1} g/day\n" +
            $"O2: {totalO2All:F1} L/day\n" +
            $"CO2: {totalCO2All:F1} L/night\n" +
            $"Calories: {totalCaloriesAll:F1} kcal/day\n\n" +
            $"➡ Average Per Rack (1 greenhouse):\n" +
            $"Days → Harvest: {avgDays:F1}\n" +
            $"Yield (g/m²/day): {avgYieldM2:F1}\n" +
            $"Yield per Rack: {avgYieldRack:F1}\n" +
            $"O2 per Rack: {avgO2:F1}\n" +
            $"CO2 per Rack: {avgCO2:F1}\n" +
            $"Calories per Rack: {avgCalories:F1}";

        // 🔥 Check if all racks are assigned
        if (allAssigned)
        {
            GameManager.Instance.allGreenHouseReady = true;
            OnAllRacksAssigned();
        }
        
        // Short one-liner summary (average stats only)
        if (quickStatsText != null)
        {
            quickStatsText.text =
                $"Avg Yield: {avgYieldRack:F1} g/rack | O2: {avgO2:F1} L | Calories: {avgCalories:F1} kcal";
        }
    }

    void OnAllRacksAssigned()
    {
        Debug.Log("✅ All racks are assigned! Greenhouse is fully operational 🚀🌱");
        GameFlow.Instance.EndMission();
        GameFlow.Instance.storyManager.StartStory("GreenHouseDone");
    }
}
