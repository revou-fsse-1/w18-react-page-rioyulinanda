import { useState } from "react";
import PhotoGallery from "./components/PhotoGallery";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "../src/components/PhotoGallery.css";

function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  const handleLike = (photoId: number) => {
    setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
    setLikeCount(likeCount + 1);
  };

  const handleUnlike = (photoId: number) => {
    setLikedPhotos((prevLikedPhotos) =>
      prevLikedPhotos.filter((id) => id !== photoId)
    );
    setLikeCount(likeCount - 1);
  };

  return (
    <>
      <h1>World Places</h1>
      <p className="like-counter">Likes: {likeCount}</p>
      <PhotoGallery
        onLike={handleLike}
        onUnlike={handleUnlike}
        likedPhotos={likedPhotos}
      />
    </>
  );
}

export default App;
