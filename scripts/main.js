
function download() {
  // Create a temporary link for download
  const link = document.createElement("a");
  link.href = "/./files/fort.html"; // Replace with your actual file URL
  link.download = "study.html"; // Adjust the filename if needed
  link.click();


