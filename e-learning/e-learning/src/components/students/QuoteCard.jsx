import React, { useEffect, useState } from "react";


const QuoteCard = () => {
    const [quote, setQuote] = useState("");
  
    const quotes = [
      "The secret of getting ahead is getting started.",
      "Don’t let what you cannot do interfere with what you can do.",
      "Success is not the key to happiness. Happiness is the key to success.",
      "Believe you can and you’re halfway there.",
      "With the new day comes new strength and new thoughts."
    ];
  
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, []);
  
    return (
      <div className="bg-[#424874] p-6 rounded-xl shadow-md w-full text-white">
        <h2 className="text-lg font-semibold"> Quote of the Day</h2>
        <p className="mt-2 italic">“{quote}”</p>
      </div>
    );
  };
  export default QuoteCard;
  