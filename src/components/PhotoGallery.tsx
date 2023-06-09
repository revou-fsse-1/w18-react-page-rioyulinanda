import React, { useState } from "react";
import { data, Data } from "./data";
import "./PhotoGallery.css";
import Inquiry from "./Inquiry";

interface PhotoGalleryProps {
  onLike: (photoId: number) => void;
  onUnlike: (photoId: number) => void;
  likedPhotos: number[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  onLike,
  onUnlike,
  likedPhotos,
}) => {
  const [searchText, setSearchText] = useState("");
  const [showInquiry, setShowInquiry] = useState(false);

  const filteredData = data.filter((item: Data) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleLike = (photoId: number) => {
    if (likedPhotos.includes(photoId)) {
      onUnlike(photoId);
    } else {
      onLike(photoId);
    }
  };

  const handleOpenInquiry = () => {
    setShowInquiry(true);
  };

  const handleCloseInquiry = () => {
    setShowInquiry(false);
  };

  return (
    <div className="photo-gallery-container">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search Places..."
          value={searchText}
          onChange={handleSearch}
          style={{ width: "300px" }}
        />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {filteredData.map((item: Data) => (
          <div key={item.id} className="col mb-4">
            <div className="card position-relative">
              <img
                src={item.imageUrl}
                className="card-img-top photo-card-img"
                alt={item.name}
              />
              <button
                className={`like-button position-absolute top-0 end-0 m-2 ${
                  likedPhotos.includes(item.id) ? "liked" : ""
                }`}
                onClick={() => handleLike(item.id)}
              >
                {likedPhotos.includes(item.id) ? "Unlike" : "Like"}
              </button>
              <div className="photo-name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="mailing-list-button" onClick={handleOpenInquiry}>
        Join our Mailing List!
      </button>

      {showInquiry && <Inquiry onClose={handleCloseInquiry} />}
    </div>
  );
};

export default PhotoGallery;
