import React, { useState } from 'react';
import './Explore.css';
import { Cards } from './Cards';

export const Explore = () => {
  // Datos originales para las tarjetas
  const cardsData = [
    { id: 1, title: "Jane Doe", content: "From Local Bloggers to Global Influencers", extra:'Empowering Local Communities.', img:'designs/person1.jpg' },
    { id: 2, title: "Tom Jones", content: "From Local Bloggers to Global Influencers", img:'designs/person2.jpg' },
    { id: 3, title: "Mike Wilson", content: "From Local Bloggers to Global Influencers", img:'designs/person3.jpg' },
    { id: 4, title: "Card 4", content: "Contenido del Card 4", img:'designs/london.jpg' },
    { id: 5, title: "Card 5", content: "Contenido del Card 5", img:'designs/london.jpg' },
    // Puedes agregar más elementos según lo necesites
  ];

  const visibleCards = 3;
  // Creamos un array extendido que clona el número de elementos visibles, para lograr el efecto infinito
  const extendedCards = [...cardsData, ...cardsData.slice(0, visibleCards)];

  // slideIndex controla la posición actual del slider
  const [slideIndex, setSlideIndex] = useState(0);
  // Flag para controlar si están activadas las transición (útil para el reset sin animación)
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const handleSlideRight = () => {
    // Deslizamos hacia la derecha agregando 1 al índice
    setSlideIndex(prev => prev + 1);
  };

  const handleTransitionEnd = () => {
    // Al terminar la transición, si el índice es igual a la longitud original 
    // (lo que significa que estamos en la parte clonada)
    // reseteamos de inmediato el índice a 0 sin transición visual.
    if (slideIndex === cardsData.length) {
      setTransitionEnabled(false);
      setSlideIndex(0);
      // Rehabilitamos la transición en el siguiente tick
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 0);
    }
  };

  return (
    <section className="Explore">
      <div className="Explore-container">
        <div className="ExploreGrid">
          <h1>
            Unleash Your Potential With <span>Let'Make News!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, quo!
          </p>
          <button onClick={handleSlideRight}></button>
        </div>
        <div className="Explore-carrousel">
          <div
            className="cards-wrapper"
            style={{
              transform: `translateX(-${(slideIndex * 100) / visibleCards}%)`,
              transition: transitionEnabled ? 'transform 0.5s ease' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((card, index) => (
              <div className="card-item" key={index}>
                <Cards data={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
