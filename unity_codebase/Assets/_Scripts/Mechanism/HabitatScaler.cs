using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class HabitatScaler : MonoBehaviour
{
    // public GameObject ColonyTemplate;
    // public Slider scalingSlider;
    // public TMP_Text tipsText;
    // public GameObject showPreferred;
    // public GameObject showNotPreferred;
    //
    // private float scaleSliderNumber;
    // public void CheckScaling()
    // {
    //     if(scalingSlider.value ==4 || scalingSlider.value == 6 || scalingSlider.value == 8)
    //     {
    //         tipsText.text = "Preferred Scale!";
    //         tipsText.color = Color.green;
    //         // showPreferred.SetActive(true);
    //         // showNotPreferred.SetActive(false);
    //     }
    //     else
    //     {
    //         tipsText.text = "Not Preferred Scale!";
    //         tipsText.color = Color.red;
    //         // showPreferred.SetActive(false);
    //         // showNotPreferred.SetActive(true);
    //     }
    // }
    //
    // public void ChangeScaling()
    // {
    //     scaleSliderNumber = 1 + scalingSlider.value * 0.08f;
    //     Vector3 scale = new Vector3(scaleSliderNumber, scaleSliderNumber, scaleSliderNumber);
    //     ColonyTemplate.transform.localScale = scale;
    // }
    public GameObject habitatHolder;
    
    public void ScaleDirectChildren(Vector3 newScale)
    {
        foreach (Transform child in habitatHolder.transform)
        {
            child.localScale = newScale;
        }
    }
}
