async function renderGifts(params) {
  const response = await fetch("/gifts");
  const data = await response.json();
  console.log(data);

  const mainContainer = document.getElementById("main-container");
  const mainContent = document.getElementById("main-content");


  if (data) {
    data.map((gift) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${gift.image})`;

      const name = document.createElement("h3");
      name.textContent = gift.name;
      bottomContainer.appendChild(name);

      const audience = document.createElement("p");
      audience.textContent = "Great For: " + gift.audience;
      bottomContainer.appendChild(audience);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/gifts/${gift.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
  }
}

renderGifts();
