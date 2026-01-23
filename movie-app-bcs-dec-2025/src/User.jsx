 export function User({ name, img }) {
    return (
      <div>
        <img className="num-1" src={img} alt="" />
        <p className="user-msg">
          Hello,<span className="p-name"> {name}</span> 🎉🎉
        </p>
      </div>
    );
  }
