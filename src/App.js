import "./App.css";
import Header from "./Header";
import JobListings from "./JobListings/JobListings";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <div className="flex flex-col align-middle">
      {/* <Header /> */}
      {/* <SearchBar /> */}
      <JobListings />
    </div>
  );
}

export default App;
