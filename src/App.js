import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState({});
  const [date, setDate] = useState(new Date());
  console.log("render");
  const getAndDisplayQuote = () => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((data) => setQuote(data.data[0]));
  };
  useEffect(getAndDisplayQuote, [date]);

  return (
    <div className="App">
      <p>{date.toISOString()}</p>
      <button onClick={() => setDate(new Date())}>Update Date</button>
      <p>{quote.character}</p>
      <img src={quote.image} />
    </div>
  );
}

export default App;
