using System.Collections;
using UnityEngine;
using TMPro;
using UnityEngine.Events;
using UnityEngine.UI;

public class StoryTeller : MonoBehaviour
{
    // 1️⃣ ADD THESE TWO LINES ONLY
    public static System.Action<StoryData> StoryStarted;
    public static System.Action<StoryData> StoryEnded;
    
    [Header("UI References")]
    public GameObject storyPanel;
    [SerializeField] private TMP_Text storyText;
    [SerializeField] private TMP_Text speakerNameText;
    [SerializeField] private Image speakerPortrait;
    [SerializeField] private Button nextButton;
    [SerializeField] private Button skipButton;

    [Header("Settings")]
    [SerializeField] private float typeSpeed = 0.05f;

    private StoryData storyData;
    private int currentLineIndex;
    private Coroutine typingCoroutine;
    private bool isTyping;
    
    public void BeginStory(StoryData data, int startIndex = 0)
    {
        storyData = data;
        currentLineIndex = startIndex;
        ShowCurrentLine();

        nextButton.onClick.RemoveAllListeners();
        skipButton.onClick.RemoveAllListeners();
        nextButton.onClick.AddListener(OnNextClicked);
        skipButton.onClick.AddListener(OnSkipClicked);
        
        // 2️⃣ ADD THIS LINE (story really starts here)
        StoryStarted?.Invoke(storyData);
    }

    void ShowCurrentLine()
    {
        if (typingCoroutine != null)
            StopCoroutine(typingCoroutine);

        var line = storyData.lines[currentLineIndex];
        speakerNameText.text = line.speakerName;
        speakerPortrait.sprite = line.portrait;

        typingCoroutine = StartCoroutine(TypeText(line.dialogue));
    }

    IEnumerator TypeText(string text)
    {
        isTyping = true;
        storyText.text = "";

        foreach (char c in text)
        {
            storyText.text += c;
            yield return new WaitForSeconds(typeSpeed);
        }

        isTyping = false;
    }

    void OnNextClicked()
    {
        if (isTyping)
        {
            StopCoroutine(typingCoroutine);
            storyText.text = storyData.lines[currentLineIndex].dialogue;
            isTyping = false;
        }
        else
        {
            currentLineIndex++;
            StoryManager.Instance.UpdateProgress(currentLineIndex);

            if (currentLineIndex < storyData.lines.Length)
            {
                ShowCurrentLine();
            }
            else
            {
                Debug.Log("Story finished!");
                EndStory();
                storyPanel.SetActive(false);
            }
        }
    }
    
    void EndStory()
    {
        // 3️⃣ ADD THIS LINE (story really ends here)
        StoryEnded?.Invoke(storyData);
        
        Debug.Log("Story finished!");
        storyPanel.SetActive(false);
    }

    void OnSkipClicked()
    {
        Debug.Log("Story skipped!");
        EndStory();
    }
}
