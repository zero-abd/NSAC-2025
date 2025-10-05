using UnityEngine;
using UnityEngine.Events;

public class StoryManager : MonoBehaviour
{
    public static StoryManager Instance { get; private set; }

    [Header("Story Assets")]
    [SerializeField] private StoryTeller storyteller;
    [SerializeField] private StoryData[] allStories;
    

    private StoryData currentStory;
    private int currentIndex = 0;

    void Awake()
    {
        if (Instance != null && Instance != this) 
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
        
        storyteller.storyPanel.SetActive(false);
    }

    public void StartStory(string storyID, int startIndex = 0)
    {
        currentStory = GetStoryByID(storyID);
        if (currentStory == null)
        {
            Debug.LogWarning("Story not found: " + storyID);
            return;
        }

        currentIndex = startIndex;
        storyteller.storyPanel.SetActive(true);
        storyteller.BeginStory(currentStory, currentIndex);
    }
    
    private StoryData GetStoryByID(string id)
    {
        foreach (var s in allStories)
        {
            if (s.storyID == id)
                return s;
        }
        return null;
    }

    public void UpdateProgress(int newIndex)
    {
        currentIndex = newIndex;
    }
}