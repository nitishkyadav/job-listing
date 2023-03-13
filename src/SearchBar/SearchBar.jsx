import { useDispatch, useSelector } from "react-redux";
import { filterKeywordsActions } from "../store/searchBaFilters-slice";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const { keywords, isSearchEnabled } = useSelector(
    (state) => state.filterKeywords,
  );

  const onClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.getAttribute("data-keyword");
    dispatch(filterKeywordsActions.removeKeywords({ value }));
  };

  const clearHandler = (e) => {
    e.preventDefault();
    dispatch(filterKeywordsActions.removeFilters());
  };

  if (isSearchEnabled) {
    return (
      <div className="flex bg-white rounded-md font-leagueSparten justify-between gap-5 border-transparent xs:w-12/12 p-4 md:w-[inherit]">
        <div className="flex flex-wrap gap-5 justify-start m-1.5 w-12/12">
          {keywords.map((data, index) => (
            <div key={index} className="flex rounded-2xl">
              <p className="bg-bodyBg font-leagueSparten text-teal-500 xs:font-medium p-1.5 text-base md:font-bold">
                {data}
              </p>
              <button
                onClick={onClickHandler}
                data-keyword={data}
                className="flex content-center justify-center w-8 flex-wrap bg-teal-500 xs:w-5 md:w-8 hover:bg-black"
              >
                <img
                  className="xs:w-3 md:w-[initial]"
                  src="images/icon-remove.svg"
                  alt="remove"
                  data-keyword={data}
                />
              </button>
            </div>
          ))}
        </div>
        <button
          className="text-teal-500 hover:underline md:font-bold"
          onClick={clearHandler}
        >
          Clear
        </button>
      </div>
    );
  }
};

export default SearchBar;
