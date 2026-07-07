import jsPDF from "jspdf";

export const generateReport = (
  material: string,
  confidence: number,
  predictionTime: string
) => {
  const pdf = new jsPDF();

  pdf.text("AI Material Detection Report", 20, 20);
  pdf.text(`Material: ${material}`, 20, 40);
  pdf.text(`Confidence: ${confidence.toFixed(2)}%`, 20, 55);
  pdf.text(`Prediction Time: ${predictionTime} sec`, 20, 70);

  pdf.save("report.pdf");
};