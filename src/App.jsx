import { useState } from "react";
import "./App.css";

const popups = [
  "Oh no, you've been hacked baby!",
  "However, I want to ask you something...",
  "Will you be my valentine?"
];

export default function App() {
  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const maxNoClicks = 10;
  const [message, setMessage] = useState(null);
  const [showGif, setShowGif] = useState(false);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleYes = () => {
    setShowGif(true);
    setMessage(null);
  };

  const handleNo = () => {
    if (noCount >= maxNoClicks - 1) {
      setMessage("Fuck you 😤");
    } else {
      setNoCount(noCount + 1);
      setMessage("Please 🙏");
    }
  };

  return (
    <div className="container">
      <div className="popup">
        <div className="title-bar">
          <span>Message</span>
        </div>
        <div className="popup-content">
          {showGif ? (
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWNsemQybmhwZDB3bzRsOGxpM3dud216ejJkMTl2MW1tdHB5c2NjNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IgRbcwks6yNknyV9TL/giphy.gif"
              alt="Golden Retriever Valentine"
              className="gif"
            />
          ) : (
            <>
              <p>{message ? message : popups[step]}</p>
              {message === "Fuck you 😤" ? null : (
                <>
                  {step < popups.length - 1 && !message ? (
                    <button onClick={handleNext} className="ok-button">OK</button>
                  ) : (
                    !showGif && (
                      <>
                        <button onClick={handleYes} className="yes-button">Yes</button>
                        <button onClick={handleNo} className="no-button">No</button>
                      </>
                    )
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
