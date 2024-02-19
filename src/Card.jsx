import React, { useEffect } from 'react';

function CardContainer() {
  // Array de objetos que representan las cartas
  const cardsData = [
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 1",
      description: "Description for Card 1."
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 2",
      description: "Description for Card 2."
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 3",
      description: "Description for Card 3."
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 4",
      description: "Description for Card 4."
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 5",
      description: "Description for Card 5."
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 6",
      description: "Description for Card 6."
    }
  ];

  useEffect(() => {
    // Selecciona el contenedor de las cartas
    const cardContainer = document.getElementById('card-container');

    // Genera el HTML de las cartas dinámicamente
    for (let i = 0; i < cardsData.length; i++) {
      const cardData = cardsData[i];
      const cardHtml = `
        <div class="card">
          <img src="${cardData.imageUrl}" alt="${cardData.title}">
          <h2>${cardData.title}</h2>
          <p>${cardData.description}</p>
        </div>
      `;
      // Agrega el HTML de la carta al contenedor
      cardContainer.innerHTML += cardHtml;
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez

  return <div id="card-container"></div>;
}

export default CardContainer;
