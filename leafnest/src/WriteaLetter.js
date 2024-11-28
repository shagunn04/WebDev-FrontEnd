import React, { useState, useContext, useEffect } from "react";
import { Context } from "./GlobalContext/Context";
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from "react-confetti"; // Import Confetti component
import "./css/WriteALetter.css";
import badge from "./images/Gratitudebadge.png";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function WriteaLetter() {
  const { addLetter } = useContext(Context);
  const [wordFreq, setWordFreq] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [letter, setLetter] = useState({
    Title: "",
    Experience: "",
    Rating: 3,
    public: false,
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false); // State to control confetti visibility

  const handleLetterChange = (e) => {
    const { name, value } = e.target;
    setLetter({
      ...letter,
      [name]: name === "Rating" ? Number(value) : value,
    });
  };

  const handleConsentChange = (e) => {
    const { value } = e.target;
    setLetter((prevLetter) => ({
      ...prevLetter,
      public: value === "true", // Set public to true or false based on the selected radio button
    }));
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  const renderStars = () => {
    const stars = "★".repeat(letter.Rating) + "☆".repeat(5 - letter.Rating);
    return <div className="star-rating">{stars}</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    console.log("submit button clicked");
    addLetter(letter);
    setIsSubmitted(true); // Mark as submitted
    setLetter({
      Title: "",
      Experience: "",
      Rating: 3,
      public: false,
    });
    setCaptchaVerified(false); // Reset captcha verification

    // Show confetti for 5 seconds
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 5000); // Hide confetti after 5 seconds
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true); // Mark captcha as verified
  };

  // Handle keypress for word count (exclude backspace and delete)
  const handleKeyPress = (e) => {
    const key = e.key;
  
    // Prevent counting backspace and delete keys
    if (key === 'Backspace' || key === 'Delete') {
      return; // Do nothing, just return early
    }
  
    // If the key is a valid character (alphabetical or numerical)
    if (/^[a-zA-Z0-9]$/.test(key)) {
      setWordFreq((prev) => prev + 1);
    }
    
  
    console.log(wordFreq)
    if (wordFreq >= 150) {
      alert("Please write in 150 words");
      e.preventDefault(); 
    }
  };
  

  // Handle the word count dynamically when user types
  const handleExperienceChange = (e) => {
    const { value } = e.target;
    const wordCount = value.split(/\s+/).filter(Boolean).length;
    setWordFreq(wordCount);
    setLetter((prevLetter) => ({
      ...prevLetter,
      Experience: value,
    }));
  };

  const handlePaste = (e) => {
    e.preventDefault(); 
    const pasteData = e.clipboardData.getData('text'); 
    const combinedText = letter.Experience + ' ' + pasteData;
    const wordCount = combinedText.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount > 150) {
      alert("Pasting this content would exceed the 150-word limit.");
    } else {
      setLetter((prevLetter) => ({
        ...prevLetter,
        Experience: prevLetter.Experience + pasteData,
      }));
      setWordFreq(wordCount);
    }
  };

  




  return (
    <div className="WriteALetter-section">
      {isSubmitted? (
        <div className="Thank-You-section">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200} // Number of confetti pieces
            recycle={false} // Don't repeat the confetti after 5 seconds
            gravity={0.2} // Control how fast the confetti falls
            style={{
              position: "absolute",
              top: `${window.innerHeight * 0.3}px`, // Confetti starts from 30% of the window height
              left: 0,
            }}
          />
          <h1>Thank you for sharing your experience</h1>
          <h2>
            You have earned <span className="earned">Gratitude Champion</span>
          </h2>
          <img src={badge} alt="badge of honour"></img>
        </div>
      ) 
      :

        (
          <div className="Letter-before-section">
        <div className="Letter-section">
          <form onSubmit={handleSubmit}>
            <h1>Tell us about your experience</h1>
 
            <label htmlFor="Letter-Title">Title:</label>
            <input
              type="text"
              id="Letter-Title"
              name="Title"
              placeholder="Enter the title of your letter"
              required
              value={letter.Title}
              onChange={handleLetterChange}
            />

            {/* Experience Textarea */}
            <label htmlFor="Letter-Content">Your Experience:</label>
            <textarea
              id="Letter-Content"
              name="Experience"
              rows="5"
              placeholder="Write your experience here"
              required
              value={letter.Experience}
              onChange={handleExperienceChange} // Updated handler for Experience
              onKeyDown={handleKeyPress}  // Handle keypress event for counting words
              onPaste={handlePaste}
            ></textarea>

            {/* Display word count */}
            <div className="word-count">Word Count: {wordFreq} / 150</div>

            {/* Range Slider */}
            <label htmlFor="experience-rating">Rate Your Experience:</label>
            <input
              type="range"
              id="experience-rating"
              name="Rating"
              min="1"
              max="5"
              value={letter.Rating}
              onChange={handleLetterChange}
             
            />
            {/* Display stars instead of numeric rating */}
            {renderStars()}

            <h2>Should we post it publicly?</h2>
            <div className="Letter-Consent">
              <label htmlFor="consent-yes">Yes, I consent:</label>
              <input
                type="radio"
                id="consent-yes"
                name="consent"
                value="true"
                checked={letter.public === true}
                onChange={handleConsentChange}
              />
              <label htmlFor="consent-no">No, I don't want the spotlight</label>
              <input
                type="radio"
                id="consent-no"
                name="consent"
                value="false"
                checked={letter.public === false}
                onChange={handleConsentChange}
              />
            </div>
            <div className="Captcha-Section">
              <div onClick={handleToggle} style={{ cursor: 'pointer', fontSize: '20px' ,
                marginTop: "20px",
                display:"flex",
                }}>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}<p>Why I need to fill ReCAPTCHA ?</p> 
              </div> 
              {/* Toggle Text */}
              {isOpen && (
                <p style={{ marginTop: "10px", color: "#555" }}>
                  So to avoid any kind of bot submissions of letters and integrate trust with our customers.
                </p>
              )}
              {/* ReCAPTCHA */}
              <ReCAPTCHA
                sitekey="6Ld4lIgqAAAAABLJAzm1L7D-86vaV79oPprQCCdr"
                onChange={handleCaptchaChange}
                className="ReCAPTCHA"
              />
            </div>

          
            <button type="submit">Submit</button>
          </form>
        </div>


        <div className="Letter-Preview">
          
          <h1>{letter.Title}</h1>
          <div className="Letter-Preview-p">
          <p>{letter.Experience}</p>
          </div>
          {renderStars()}
        </div>
        </div>
      )}
    </div>
  );
}

export default WriteaLetter;
