import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text, speed }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typingInterval);

        // Optional: Add a delay before the text disappears
        setTimeout(() => {
          setTypedText(" to my website |");
        }, 1000);
      }
    }, speed); // Adjust the typing speed as needed

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{typedText}</span>;
}

export default TypingAnimation;
