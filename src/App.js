import React from "react";
import PropTypes from "prop-types";
function Food({ fav, how, rating }) {
  return (
    <h1>
      i like {fav}
      <br></br>
      it is {how}
      star {rating}
    </h1>
  );
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

const foodilike = [
  {
    name: "kimchi",
    number: 1,
  },
  {
    name: "nana",
    number: 2,
  },
  {
    name: "mama",
    number: 3,
  },
  {
    name: "papa",
    number: 4,
  },
];

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {foodilike.map(current => (
        <Food
          fav={current.name}
          key={current.number}
          how={current.number}
          rating={current.number}
        />
      ))}
    </div>
  );
}

export default App;
