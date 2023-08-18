import React from "react";
import { useState } from "react";
import adesanya from './images/adesanya.webp';
import brock from './images/brock.jpg';
import khabib from './images/khabib.jpg';
import mcgregor from './images/mcgregor.jpg';
import silva from './images/silva.jpg';
import usman from './images/usman.jpg';
import "./Card.css";
import "./CardStyle.css"


function Card() {
  const [cards] = useState ([
   { title: 'Andrei Curea',
      imageUrl: adesanya ,
      text: 'Lorem consequat quis ipsum eu culpa enim id nostrud officia excepteur aute labore et consequat. Occaecat aliqua aliqua irure occaecat ipsum. Magna laborum duis labore id esse labore aute ut. Est excepteur laboris occaecat eu nisi cupidatat adipisicing cupidatat. Sit magna reprehenderit minim nisi pariatur qui quis laborum cillum cupidatat cillum ad.'
    },
  { title: 'Razvan Dumitrescu',
    imageUrl: brock ,
    text: 'Lorem consequat quis ipsum eu culpa enim id nostrud officia excepteur aute labore et consequat. Occaecat aliqua aliqua irure occaecat ipsum. Magna laborum duis labore id esse labore aute ut. Est excepteur laboris occaecat eu nisi cupidatat adipisicing cupidatat. Sit magna reprehenderit minim nisi pariatur qui quis laborum cillum cupidatat cillum ad.'
},
{ title: 'Radu Sabin',
  imageUrl: khabib,
  text: 'Lorem consequat quis ipsum eu culpa enim id nostrud officia excepteur aute labore et consequat. Occaecat aliqua aliqua irure occaecat ipsum. Magna laborum duis labore id esse labore aute ut. Est excepteur laboris occaecat eu nisi cupidatat adipisicing cupidatat. Sit magna reprehenderit minim nisi pariatur qui quis laborum cillum cupidatat cillum ad.'
  },
  { title: 'Radu Anghel',
    imageUrl: mcgregor,
    text: 'Lorem consequat quis ipsum eu culpa enim id nostrud officia excepteur aute labore et consequat. Occaecat aliqua aliqua irure occaecat ipsum. Magna laborum duis labore id esse labore aute ut. Est excepteur laboris occaecat eu nisi cupidatat adipisicing cupidatat. Sit magna reprehenderit minim nisi pariatur qui quis laborum cillum cupidatat cillum ad.'
  },
  { title: 'Mir Caru',
    imageUrl: silva,
    text: 'Lorem consequat quis ipsum eu culpa enim id nostrud officia excepteur aute labore et consequat. Occaecat aliqua aliqua irure occaecat ipsum. Magna laborum duis labore id esse labore aute ut. Est excepteur laboris occaecat eu nisi cupidatat adipisicing cupidatat. Sit magna reprehenderit minim nisi pariatur qui quis laborum cillum cupidatat cillum ad.'
    },
    { title: 'Mir Andu',
    imageUrl: usman,
    text: 'Lorem consequat quis ipsum eu culpa enim id nostrud officia excepteur aute labore et consequat. Occaecat aliqua aliqua irure occaecat ipsum. Magna laborum duis labore id esse labore aute ut. Est excepteur laboris occaecat eu nisi cupidatat adipisicing cupidatat. Sit magna reprehenderit minim nisi pariatur qui quis laborum cillum cupidatat cillum ad.'
  }

  ])
  return (
    <div>
     <section>
      <div className="container">
        <h1>Fighters</h1>
        <div className="cards">
          {cards.map((card, i) => (
            <div key={i} className="card">
            <h3> {card.title}</h3>
            <img src={card.imageUrl} alt={card.title} className="card-image" /> 
            <p> {card.text}</p>
            <button className="btn">Explore</button>
          </div>
          ))}
        </div>
      </div>
     </section>
    </div>
  );
}

export default Card;

