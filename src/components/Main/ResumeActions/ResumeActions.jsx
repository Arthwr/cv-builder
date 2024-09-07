import html2pdf from "html2pdf.js";

export default function ResumeActions() {
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
    <div className="actions no-print">
      <button id="pdf" onClick={generatePDF}>
        Download PDF
      </button>
    </div>
  );
}
