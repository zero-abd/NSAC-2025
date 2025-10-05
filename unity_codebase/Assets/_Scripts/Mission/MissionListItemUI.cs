using UnityEngine;
using TMPro;

public class MissionListItemUI : MonoBehaviour
{
    public TextMeshProUGUI titleText;
    public TextMeshProUGUI statusText;

    public void SetData(string title, string status)
    {
        titleText.text = title;
        SetStatus(status);
    }

    public void SetStatus(string status)
    {
        statusText.text = status;

        switch (status)
        {
            case "Not Started":
                statusText.color = Color.gray;
                break;
            case "Active":
                statusText.color = Color.yellow;
                break;
            case "Completed ✅":
                statusText.color = Color.green;
                break;
        }
    }
}