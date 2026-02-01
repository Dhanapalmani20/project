import React, { useState } from "react";
import "./App.css";

function InputTags() {
  const [like, setLike] = useState(0);
  const [Dislike, setDisLike] = useState(0);

  return (
    <div className="like-btn">
      <button className="like" onClick={() => setLike(like + 1)}>
        {like}👍
      </button>
      <button className="dislike" onClick={() => setDisLike(Dislike + 1)}>
        {Dislike}👎
      </button>
      <div>
        {/* {{like >= disLike + 10 && <h2>You are awesome 🎊🎊</h2>}} */}
        {/* <progress max={like+Dislike} value={like}></progress>  */}
      </div>
    </div>
  );
}

export default InputTags;
