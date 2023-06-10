import React, { useState } from "react";
import "./PhotoGallery.css";

interface InquiryProps {
  onClose: () => void;
}

const Inquiry: React.FC<InquiryProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name && email) {
      // Handle form submission logic here
      console.log("Name:", name);
      console.log("Email:", email);

      // Show notification
      setSubmitted(true);

      // Clear name and email fields
      setName("");
      setEmail("");
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="inquiry">
      <div className="inquiry-form-container">
        {submitted ? (
          <>
            <p>Thank you for signing up!</p>
            <button onClick={handleClose}>Close</button>
          </>
        ) : (
          <>
            <p>
              We will send you the information about the Photographers of all
              the photos here, therefore you can contact them if you need the
              service!
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="button-container">
                <button type="submit">Sign Up</button>
                <button type="button" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Inquiry;
