using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections;
using UnityEngine.Events;

public class HazardUIManager : MonoBehaviour
{
    public static HazardUIManager Instance;

    [Header("UI References")]
    [SerializeField] private CanvasGroup hazardOverlay; 
    [SerializeField] private TMP_Text hazardTitle;
    [SerializeField] private TMP_Text hazardDescription;
    [SerializeField] private Image vignette;

    [Header("Effects Settings")]
    public Color dangerColor = Color.red;
    public float pulseSpeed = 2f;
    public float shakeIntensity = 5f;
    public float blinkSpeed = 5f;  // How fast the overlay/text blinks
    public float displayTime = 5f; // How long hazard shows before auto-clear
    
    [Header("Events")]
    public UnityEvent onHazardEnd;

    private bool hazardActive = false;
    
    [Header("Test Hazard (Inspector Only)")]
    public string testTitle = "Storm Alert ! Storm Alert ! Storm Alert !";
    public string testDescription = "Solar panels covered with dust! Critical Energy";

    [ContextMenu("Trigger Test Hazard")]
    public void TriggerTestHazard()
    {
        TriggerHazard(testTitle, testDescription);
        GameManager.Instance.batteryUI.TriggerSolarHazard();
    }

    void Awake()
    {
        Instance = this;

        // Start inactive
        hazardOverlay.gameObject.SetActive(false);
        vignette.enabled = false;
        hazardTitle.gameObject.SetActive(false);
        hazardDescription.gameObject.SetActive(false);
    }

    public void TriggerHazard(string title, string description)
    {
        StopAllCoroutines();
        StartCoroutine(HazardSequence(title, description));
    }

    private IEnumerator HazardSequence(string title, string description)
    {
        // Activate UI
        hazardOverlay.gameObject.SetActive(true);
        hazardTitle.gameObject.SetActive(true);
        hazardDescription.gameObject.SetActive(true);
        vignette.enabled = true;

        hazardTitle.text = "⚠ " + title.ToUpper();
        hazardDescription.text = description;

        hazardActive = true;

        float elapsed = 0f;
        while (elapsed < displayTime)
        {
            elapsed += Time.deltaTime;

            // Pulse vignette
            float pulse = (Mathf.Sin(Time.time * pulseSpeed) + 1) / 2f; 
            vignette.color = Color.Lerp(Color.black, dangerColor, pulse);

            // Shake text
            hazardTitle.rectTransform.localPosition = Random.insideUnitCircle * shakeIntensity;

            // Blink overlay
            hazardOverlay.alpha = Mathf.PingPong(Time.time * blinkSpeed, 0.5f) + 0.5f; // flicker 0.5–1
            yield return null;
        }

        // Fade out smoothly
        yield return StartCoroutine(FadeOut());
    }

    private IEnumerator FadeOut()
    {
        float t = 1f;
        while (t > 0f)
        {
            t -= Time.deltaTime;
            hazardOverlay.alpha = t;
            yield return null;
        }

        // Deactivate UI after fade
        hazardOverlay.gameObject.SetActive(false);
        hazardTitle.gameObject.SetActive(false);
        hazardDescription.gameObject.SetActive(false);
        vignette.enabled = false;

        hazardActive = false;
        onHazardEnd?.Invoke();
    }
}
