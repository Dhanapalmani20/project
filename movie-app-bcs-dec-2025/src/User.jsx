export function User({ name, poster, rating, summary }) {
  return (
    <div>
      <img className="movie-poster" src={poster} alt="" />
      <h1>{name}</h1>
      
      <p className="movie-spec-container">⭐{rating}</p>
      <p className="user-msg">
        <span className="p-name">{summary}</span>
      </p>
      </div>
  );
}
