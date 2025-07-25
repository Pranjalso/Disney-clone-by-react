import React, { useState, useEffect } from 'react';

const SearchBarHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  // Save new term to history
  const saveToHistory = (term) => {
    if (!term.trim()) return;
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    // Avoid duplicates, keep latest first
    history = [term, ...history.filter((item) => item !== term)];
    history = history.slice(0, 10); // Optional: keep only latest 10
    localStorage.setItem("searchHistory", JSON.stringify(history));
    setSearchHistory(history);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveToHistory(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="border p-2 rounded w-full mb-2"
      />
      <div>
        <h4 className="font-semibold mb-2">Search History</h4>
        <ul>
          {searchHistory.map((item, idx) => (
            <li key={idx} className="text-gray-700 mb-1">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBarHistory;
