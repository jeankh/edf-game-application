
export interface CertificatEnCartonProps {
  certificatInfo :User
}

import { User } from "../../types/models/UserResultat"
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const useCertificatEnCarton = (props: CertificatEnCartonProps) => {
  function downloadCertificatePdf() {
    const element = document.getElementById(`certificateSection `)!;
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("certificate.pdf");
      });
    } else {
      console.log("error");
    }
  }

  function downloadCertificateImage() {
    const element = document.getElementById(`certificateSection`)!;

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }

    
  return { ...props  ,downloadCertificatePdf, downloadCertificateImage    }
}
