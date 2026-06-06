const getGift = async () => {
  const path = window.location.pathname;
  const pathSegments = path.split("/");

  const giftId = pathSegments[2];
  console.log(giftId);

  const response = await fetch("/gifts");
  const giftData = await response.json();

  const gift = giftData.find((gift) => gift.id == giftId);
  console.log(gift);

  // If no gift matches the ID, show an error message and stop
  if (!gift) {
    document.getElementById("content").innerHTML = "<h2>Gift not found</h2>";
    return;
  }

  // DOM INJECTION CODE
  // Target the container in your index.html
  const mainContent = document.getElementById("content");

  // Create a container element for the gift details
  const giftContainer = document.createElement("div");
  giftContainer.className = "gift-details-container";

  // Build out the structured inner HTML using template literals
  giftContainer.innerHTML = `
    <img src="${gift.image}" alt="${gift.name}" class="gift-image" />
    
    <div class="gift-info">
      <h1 class="gift-title">${gift.name}</h1>
      <p class="gift-description">${gift.description}</p>
      
      <div class="gift-meta">
        <p><strong>Audience:</strong> ${gift.audience}</p>
        <p><strong>Price Point:</strong> ${gift.pricePoint}</p>
      </div>
      
      <hr />
      
      <footer class="gift-attribution">
        <p>Submitted by: <span>${gift.submittedBy}</span></p>
        <p>Date: <span>${new Date(gift.submittedOn).toLocaleDateString()}</span></p>
      </footer>
    </div>
  `;

  // Clear any existing content and append our new element
  mainContent.innerHTML = "";
  mainContent.appendChild(giftContainer);
};

getGift();
