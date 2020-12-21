import React, { useState, useEffect } from "react";
import "./SwipingCards.css";
import TinderCard from "react-tinder-card";
import database from "../config/firebase";

function SwipingCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection("people").onSnapshot((snap) => {
      setPeople(snap.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []); //Empty dependency helps in loading content only once when component loads

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  return (
    <div>
      <div className="card-container">
        {people.map((person) => (
          <TinderCard
            onSwipe={onSwipe}
            preventSwipe={["up", "down"]}
            className="swipe"
            key={person.name}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <div className="detail">
                <h3>
                  {person.name} ({person.gender}/{person.age})
                </h3>
                <h5>{person.city}</h5>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default SwipingCards;
