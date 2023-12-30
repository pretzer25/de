// Import the list of items from a separate file
import items from "/./scripts/items.js"; // Adjust the path if needed

// Get a reference to the container element
const container = document.getElementById("container");

// Fill out the divs with the items
items.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("column");

  const link = document.createElement("a");
  link.href = item.link;
  link.onclick = () => {
    location.href = item.link; // Ensure redirect happens even with JavaScript disabled
  };

  const img = document.createElement("img");
  img.width = 145;
  img.height = 145;
  img.src = item.imageUrl;

  const p = document.createElement("p");
  p.textContent = item.name;

  link.appendChild(img);
  link.appendChild(p);
  div.appendChild(link);

  container.appendChild(div);
});
