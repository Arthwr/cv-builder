import html2pdf from "html2pdf.js";

export default function GeneratePDF() {
  const generatePDF = () => {
    const resumeElement = document.getElementById("resume");

    const clonedResumeElement = resumeElement.cloneNode(true);
    clonedResumeElement.classList.add("print-mode");

    const options = {
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 3,
        useCORS: true,
      },
    };

    html2pdf()
      .from(clonedResumeElement)
      .set(options)
      .save("resume")
      .catch((error) => {
        console.error("Error generating PDF: ", error);
      });
  };

  return (
    <button id="pdf" onClick={generatePDF} aria-label="download pdf">
      Download PDF
    </button>
  );
}
