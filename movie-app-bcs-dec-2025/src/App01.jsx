import { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router";

import "./index.css";
import { Counter } from "./Counter.1";
import { ColorBox } from "./ColorBox";
export default function App() {
  return (
    <div className="App">
      <MovieList />
      {/* <Counter /><ColorGame /> */}
    </div>
  );
}

function MovieList() {
  const [movieLibrary, setMovieLibrary] = useState([
    {
      name: "Border 2",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-yvzgkbpdca-portrait.jpg",
      rating: 7.5,
      summary:
        "A massive war drama sequel set during the 1971 Indo-Pak war. Sunny Deol returns as Major Kuldip Singh Chandpuri to lead a new battalion in a high-stakes battle for sovereignty, featuring intense tank warfare and patriotic sacrifice.",
    },
  ]);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const newMovie = {
    name: name,
    poster: poster,

    rating: rating,
    summary: summary,
  };

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="movie-name"
      />
      <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder=" movie-poster"
      />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        type="number"
        placeholder="movie-rating"
      />
      <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="movie-summary"
      />

      <button onClick={() => setMovieLibrary([...movieLibrary, newMovie])}>
        Add Button
      </button>
      {movieLibrary.map(({ name, poster, rating, summary }) => (
        <Msg name={name} poster={poster} rating={rating} summary={summary} />
      ))}
    </div>
  );
}

function Msg({ name, poster, rating, summary }) {
  return (
    <div className="movie-container">
      <img src={poster} alt="image" className="image-poster" />
      <div className="name-rating">
        <h2 className="movie-name">{name}</h2>
        <span className="movie-rating">⭐{rating}</span>
      </div>
      <p className="movie-description">{summary}</p>
    </div>
  );
}

export function ColorGame() {
  const [colorList, setColorList] = useState(["crimson", "pink", "orange"]);
  const [color, setColor] = useState("");

  const styles = {
    backgroundColor: color,
  };

  // Task 1
  // 1.1. Echo on screen
  // 1.2. Change the color to the typed color
  return (
    <div>
      {/* Data binding */}
      <input
        // Universal event listener - radio, checkbox
        onChange={(event) => setColor(event.target.value)}
        // Styles we are binding to style
        style={styles}
        type="text"
        placeholder="Favorite color"
      />
      {/* <h1>{color}</h1> */}
      <button onClick={() => setColorList([...colorList, color])}>
        {" "}
        Add Color
      </button>
      {colorList.map((clr) => (
        <ColorBox name={clr} />
      ))}
    </div>
  );
}
