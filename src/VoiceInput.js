import React, { useState } from 'react';

function VoiceInput() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US'; // You can set other languages

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div>
      <button onClick={startListening}>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default VoiceInput;