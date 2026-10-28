import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);

  const increment = () => {
        setLike(like + 1);
    }

  return (
    <div>
        <h3>좋아요:{like}</h3>
      <button onClick={increment}>👍</button>
    </div>
  );
};

export default LikeButton;