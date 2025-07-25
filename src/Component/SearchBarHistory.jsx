import React from 'react'

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
      
    </div>
  )
}

export default SearchBarHistory
