
import './App.css';
import SearchBar from '../SearchBar/searchBar';
import emojiList from './emojiList.json'



function App() {
  return (
    <div className="App">
<SearchBar placeholder="Enter emoji name..."  data= {emojiList}  />


    </div>
  );
}

export default App;
