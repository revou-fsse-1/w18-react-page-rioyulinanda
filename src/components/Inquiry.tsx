import React from "react";
import "./PhotoGallery.css";

interface InquiryProps {
  onClose: () => void;
}

const Inquiry: React.FC<InquiryProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the name and email values from form fields
  };

  return (
    <div className="inquiry">
      <div className="inquiry-form-container">
        <p>
          We will send you the information about the Photographers of all the
          photos here, therefore you can contact them if you need the service!
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
