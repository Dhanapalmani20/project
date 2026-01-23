 export function User({ name, url }) {
    return (
      <div>
        <img className="num-1" src={url} alt="" />
        <p className="user-msg">
          Hello,<span className="p-name"> {name}</span> 🎉🎉
        </p>
      </div>
    );
  }

