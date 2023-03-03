import "./App.css";
import Header from "./Header";
import JobListings from "./JobListings/JobListings";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      <JobListings />
    </div>
  );
}

export default App;
