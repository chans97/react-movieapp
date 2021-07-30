import React from "react";

function Potato({ fav, how }) {
  return (
    <h1>
      i like {fav}
      <br></br>
      it is {how}
    </h1>
  );
}

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
      {foodilike.map((current) => (
        <Potato key={current.number} fav={current.name} how={current.number} />
      ))}
    </div>
  );
}

export default App;
