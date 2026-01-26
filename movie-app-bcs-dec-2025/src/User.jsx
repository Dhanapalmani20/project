export function User({ name, poster, rating, summary }) {
  return (
    <div>
      <img className="num-1" src={poster} alt="" />
      <p className="user-msg">
        <span className="p-name">
          {name},{summary}
        </span>
      </p>
    </div>
  );
}
