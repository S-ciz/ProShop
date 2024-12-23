import React from "react";
import "./rating.css";

const Rating = ({ rate, text }) => {
  function fillStar(starArray, numFull) {
    for (let i = 0; i < numFull; i++) {
      starArray[i] = 1;
    }
  }

  function displayStars(rate) {
    // 0 - empty
    // 0.5 - halft
    // 1 - full

    let initialState = [0, 0, 0, 0, 0];

    if (rate % 1 === 0 && rate > 0) {
      // positive whole number
      fillStar(initialState, rate);
    } else if (rate % 1 !== 0 && rate > 0) {
      let floor = Math.floor(rate);
      fillStar(initialState, floor);
      initialState[floor] = 0.5;
    }
    return initialState;
  }

  let stars = displayStars(rate).map((item) => (
    <i
      className={
        item === 1
          ? "fas fa-star"
          : item === 0.5
          ? "fas fa-star-half-alt"
          : "far fa-star"
      }
    />
  ));

  return ( 
    <div className="rating">
      <section>{stars} </section>
      <section>{text}</section>
    </div>
  )
};

export default Rating;
