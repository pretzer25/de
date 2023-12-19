const pages = [
  "https://mail.google.com/mail/?authuser=0",
  "https://translate.google.com/?authuser=0",
  "https://www.google.com/",
  "https://drive.google.com/?authuser=0",
  "https://www.classlink.com/",
  "https://classroom.google.com/",
  "https://www.khanacademy.org/",
  "https://kahoot.com/",
  "https://docs.google.com/presentation/create",
  "https://docs.google.com/spreadsheets/create",
  // Add more URLs to your list...
];

function getRandomPageIndex() {
  return Math.floor(Math.random() * pages.length);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "0" && event.key === "o") {
    event.preventDefault();
    const randomPageIndex = getRandomPageIndex();
    window.open(pages[randomPageIndex], "_blank");
  }
});
