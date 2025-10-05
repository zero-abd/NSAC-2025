//using UnityEngine;

//public class Player : MonoBehaviour
//{
//    [SerializeField] float mouseSensitivity = 3f;
//    [SerializeField] float movementSpeed = 5f;

//    [SerializeField] Transform cameraTransform;

//    CharacterController controller;
//    Vector2 look;

//    void Awake()
//    {
//        controller = GetComponent<CharacterController>();
//    }
//    void Start()
//    {
        
//    }

//    void Update()
//    {
//        UpdateMovement();
//        UpdateLook();
//    }

//    void UpdateMovement()
//    {
//        var x = Input.GetAxis("Horizontal");
//        var y = Input.GetAxis("Vertical");

//        var input = new Vector3();
//        input += transform.forward * y;
//        input += transform.right * x;
//        input = Vector3.ClampMagnitude(input, 1f);

//        //transform.Translate(input * movementSpeed * Time.deltaTime, Space.World);
//        controller.Move(input * movementSpeed * Time.deltaTime);

//    }

//    void UpdateLook()
//    {
//        look.x += Input.GetAxis("Mouse X") * mouseSensitivity;
//        look.y += Input.GetAxis("Mouse Y") * mouseSensitivity;

//        look.y = Mathf.Clamp(look.y, -89f, 89f);

//        cameraTransform.localRotation = Quaternion.Euler(-look.y, 0, 0);
//        transform.localRotation = Quaternion.Euler(0, look.x, 0);
//    }
//}
