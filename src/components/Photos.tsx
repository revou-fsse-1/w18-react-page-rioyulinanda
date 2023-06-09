import React, { useState } from "react";
import { Data } from "./data";

interface DataProps {
  data: Data; // Updated prop name to match the interface
}

const DataComponent: React.FC<DataProps> = ({ data }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <img src={data.imageUrl} className="card-img-top" alt="Data" />
      <div className="card-body">
        <button className="btn btn-primary" onClick={handleLike}>
          Like
        </button>
        <p className="card-text">Likes: {likes}</p>
      </div>
    </div>
  );
};

export default DataComponent;
