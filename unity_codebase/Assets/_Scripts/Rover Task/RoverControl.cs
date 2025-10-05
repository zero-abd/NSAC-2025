using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class RoverControl : MonoBehaviour
{
    public GameObject[] rovers;       // Array of all rovers
    public TMP_Text availableText;    // UI text showing remaining rovers
    public Button deployButton;

    private int currentIndex = 0;     // Tracks which rover to destroy next

    private void Awake()
    {
        deployButton.onClick.AddListener(Deploy);

        // Initialize the text with the total number of rovers
        UpdateAvailableText();
    }

    public void Deploy()
    {
        if (currentIndex < rovers.Length)
        {
            // Destroy the current rover
            Destroy(rovers[currentIndex]);

            // Move to next rover
            currentIndex++;

            // Update text
            UpdateAvailableText();

            // Optional: Disable button if no rovers left
            if (currentIndex >= rovers.Length)
            {
                deployButton.interactable = false;
            }
            GameFlow.Instance.EndMission();
            GameManager.Instance.batteryUI.FixSolarHazard();
            GameFlow.Instance.storyManager.StartStory("SolarPanelClearDone");
        }
    }

    private void UpdateAvailableText()
    {
        int remaining = rovers.Length - currentIndex;
        availableText.text = "Available Rovers: " + remaining;
    }
}
