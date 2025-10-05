using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Colony : MonoBehaviour
{
    [SerializeField] private List<Transform> habitatSpawnPoints;
    [SerializeField] private GameObject habitatParent;
    [SerializeField] private int qty = 4;
    
    [Header("Colony Data")]
    private GameObject habitatPrefab;

    public void Initialize(GameObject habitatPrefab)
    {
        this.habitatPrefab = habitatPrefab;
        PopulateColonyHabitat();
    }

    private void PopulateColonyHabitat()
    {
        GameManager.Instance.habitatManagers.Clear();
        for (int i = 0; i < qty; i++)
        {
            GameObject habitat = Instantiate(habitatPrefab, habitatSpawnPoints[i].position, habitatSpawnPoints[i].rotation, transform);
            GameManager.Instance.habitatManagers.Add(habitat.GetComponent<HabitatManager>());
            habitat.transform.SetParent(habitatParent.transform);
        }
    }

    public void PopulateColonyPopulation()
    {
        
    }

    public void ReInitializeColonyhabitat(GameObject habitatPrefab)
    {
        for (int i = habitatParent.transform.childCount - 1; i >= 0; i--)
        {
            Destroy(habitatParent.transform.GetChild(i).gameObject);
        }
        Initialize(habitatPrefab);
    }
}
