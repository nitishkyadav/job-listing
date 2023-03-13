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
      <div className="flex justify-center top-2/3 w-full absolute">
        <div className="flex mx-auto bg-white rounded-md font-leagueSparten justify-between gap-5 border-transparent xs:max-w-md w-10/12 p-4">
          <div className="flex flex-wrap gap-5 m-1.5">
            {keywords.map((data, index) => (
              <div key={index} className="flex border-red-50 rounded-2xl">
                <p className="bg-bodyBg font-leagueSparten text-cyan-500 xs:font-medium p-1.5 text-base">
                  {data}
                </p>
                <button
                  onClick={onClickHandler}
                  data-keyword={data}
                  className="flex content-center justify-center w-8 flex-wrap bg-cyan-500 xs:w-5"
                >
                  <img
                    className="xs:w-3"
                    src="images/icon-remove.svg"
                    alt="remove"
                    data-keyword={data}
                  />
                </button>
              </div>
            ))}
          </div>
          <button onClick={clearHandler}>Clear</button>
        </div>
      </div>
    );
  }
};

export default SearchBar;
