// import headerbg from "../public/images/bg-header-desktop.svg";

import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="flex relative justify-center">
      <img
        src="./images/bg-header-desktop.svg"
        className="bg-darkCyan max-w-screen-2xl"
        alt="bg"
      />
      <SearchBar />
    </header>
  );
};
export default Header;
