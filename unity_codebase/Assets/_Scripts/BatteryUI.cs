using UnityEngine;
using TMPro;

public class BatteryUI : MonoBehaviour
{
    [Header("UI Reference")]
    [SerializeField] private TMP_Text statsText;
    [SerializeField] private TMP_Text quickStatsText;  // single line view

    [Header("Battery Settings")]
    [SerializeField] private float maxCapacity = 20000f; // kWh total
    [SerializeField] private float storedEnergy = 400f; // current stored energy

    [Header("Solar Settings")]
    [SerializeField] private float minSolarInput = 100f;   // kW
    [SerializeField] private float maxSolarInput = 800f;   // kW

    [Header("Consumption Settings")]
    [SerializeField] private float minConsumption = 300f;  // kW
    [SerializeField] private float maxConsumption = 700f;  // kW

    [Header("Simulation Timing")]
    [SerializeField] private float changeInterval = 10f; // how often values shift (seconds)
    [SerializeField] private float smoothSpeed = 0.1f;   // how smooth/slow the drift is

    private float currentSolar;
    private float targetSolar;

    private float currentConsumption;
    private float targetConsumption;

    private float timer;

    void Start()
    {
        // Initialize values
        currentSolar = Random.Range(minSolarInput, maxSolarInput);
        targetSolar = currentSolar;

        currentConsumption = Random.Range(minConsumption, maxConsumption);
        targetConsumption = currentConsumption;
    }

    void Update()
    {
        timer += Time.deltaTime;

        if (!solarHazardActive)
        {
            // Every X seconds, pick new solar + consumption targets
            if (timer >= changeInterval)
            {
                targetSolar = Random.Range(minSolarInput, maxSolarInput);
                targetConsumption = Random.Range(minConsumption, maxConsumption);
                timer = 0f;
            }
        }
        else
        {
            targetSolar = 0f; // lock to zero during hazard
        }

        // Smooth drift
        currentSolar = Mathf.Lerp(currentSolar, targetSolar, Time.deltaTime * smoothSpeed);
        currentConsumption = Mathf.Lerp(currentConsumption, targetConsumption, Time.deltaTime * smoothSpeed);

        // Net energy balance
        float netFlow = (currentSolar - currentConsumption) * (Time.deltaTime / 3600f);
        storedEnergy += netFlow;
        storedEnergy = Mathf.Clamp(storedEnergy, 0f, maxCapacity);

        UpdateUI();
    }


    private void UpdateUI()
    {
        if (statsText != null)
        {
            statsText.text =
                $"<b>🌞 Solar Input:</b> {currentSolar:F1} kW\n" +
                $"<b>⚡ Consumption:</b> {currentConsumption:F1} kW\n" +
                $"<b>🔋 Stored Energy:</b> {storedEnergy:F1} / {maxCapacity} kWh\n" +
                $"<b>Charge %:</b> {(storedEnergy / maxCapacity * 100f):F1}%";
        }

        if (quickStatsText != null)
        {
            quickStatsText.text =
                $"Consumption: {currentConsumption:F1} kW | Stored: {storedEnergy:F1} kWh | Charge: {(storedEnergy / maxCapacity * 100f):F1}%";
        }
    }
    
    /// <summary>
    /// Call this to simulate a sudden spike in energy consumption.
    /// </summary>
    /// <param name="extraConsumption">How much extra kW to add temporarily.</param>
    public void TriggerConsumptionSpike(float extraConsumption = 200f)
    {
        targetConsumption += extraConsumption;

        // Prevent it from going below min or above max absurdly
        targetConsumption = Mathf.Clamp(targetConsumption, minConsumption, maxConsumption * 2f);

        Debug.Log($"⚡ Consumption spike triggered! New target: {targetConsumption} kW");
    }
    
    private bool solarHazardActive = false;

    /// <summary>
    /// Trigger a hazard where solar panels stop producing energy (e.g., dust storm).
    /// Energy will drop to 0 and stay there until fixed.
    /// </summary>
    public void TriggerSolarHazard()
    {
        solarHazardActive = true;
        targetSolar = 0f;      // force solar to zero
        currentSolar = 0f;     // immediately set to zero for visual feedback

        Debug.Log("🌑 Solar hazard triggered! Panels are not producing energy.");
    }

    /// <summary>
    /// Resolve the solar hazard. Solar production resumes normal fluctuations.
    /// </summary>
    public void FixSolarHazard()
    {
        solarHazardActive = false;
        targetSolar = Random.Range(minSolarInput, maxSolarInput); // back to normal target

        Debug.Log("☀ Solar hazard fixed! Panels are back online.");
    }

}
