const allowedUrls = [
  // Secure URLs without authuser parameter
  "https://mail.google.com/",
  "https://translate.google.com/",
  "https://www.google.com/",
  "https://drive.google.com/",
  "https://www.classlink.com/",
  "https://classroom.google.com/",
  "https://www.khanacademy.org/",
  "https://kahoot.com/",
  "https://docs.google.com/presentation/create",
  "https://docs.google.com/spreadsheets/create",
  // Add more URLs to your list...
];

// Validate URL before opening
function isValidUrl(url) {
  // Implement your URL validation logic here
  // You can check for whitelisted domains, specific patterns, etc.
  return true; // Replace with your actual validation logic
}

function getRandomPageIndex() {
  return Math.floor(Math.random() * allowedUrls.length);
}

function openRandomStudyResource() {
  const randomPageIndex = getRandomPageIndex();
  const url = allowedUrls[randomPageIndex];
  if (isValidUrl(url)) {
    window.open(url, "_blank");
  } else {
    console.warn("Invalid URL detected. Skipping...");
  }
}
