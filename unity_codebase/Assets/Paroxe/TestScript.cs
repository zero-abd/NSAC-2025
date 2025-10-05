using System.Collections;
using System.Collections.Generic;
using Paroxe.PdfRenderer;
using UnityEngine;

public class TestScript : MonoBehaviour
{
    public PDFViewer pdfRenderer;

    public void LoadPDF()
    {
        pdfRenderer.LoadDocument();
    }
}
