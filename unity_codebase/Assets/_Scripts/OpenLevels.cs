using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class OpenLevels : MonoBehaviour
{
    public GameObject Habitats;
    public Slider scalingSlider;
    public GameObject showPreferred;
    public GameObject showNotPreferred;

    private float scaleSliderNumber;
    public void CheckScaling()
    {
        if(scalingSlider.value ==4 || scalingSlider.value == 6 || scalingSlider.value == 8)
        {
            showPreferred.SetActive(true);
            showNotPreferred.SetActive(false);
        }
        else
        {
            showPreferred.SetActive(false);
            showNotPreferred.SetActive(true);
        }
    }

    public void ChangeScaling()
    {
        scaleSliderNumber = 1 + scalingSlider.value * 0.08f;
        Vector3 scale = new Vector3(scaleSliderNumber, scaleSliderNumber, scaleSliderNumber);
        Habitats.transform.localScale = scale;
    }

}
