import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "./firebase";
import "./TinderCard.css";
import { collection, getDocs } from "firebase/firestore/lite";

function TinderCards() {
  const [people, setPeople] = useState([]);

  async function getPeople(db) {
    const peopleCol = collection(db, "people");
    const peopleSnapshot = await getDocs(peopleCol);
    const peopleList = peopleSnapshot.docs.map(doc => doc.data());
    return peopleList;
  }

  useEffect(() => {
    let isFetched = true;
    getPeople(db).then(data => {
      if (isFetched) setPeople(data);
    })
    //cleanup
    return () => {
      isFetched = false;
    };
  }, []);

  return (
    <div className="tinderCards__container">
      {people.map((person) => {
        return (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
}

export default TinderCards;
