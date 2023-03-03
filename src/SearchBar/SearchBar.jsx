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
        <div className="flex ml-auto mr-auto bg-white rounded-md font-leagueSparten justify-between gap-5 w-10/12 max-w-4xl border-transparent p-8">
          <div className="flex flex-wrap gap-5 m-1.5">
            {keywords.map((data, index) => (
              <div key={index} className="flex border-red-50 rounded-2xl">
                <p className="p-1.5 bg-bodyBg font-leagueSparten text-cyan-500 font-bold">
                  {data}
                </p>
                <button
                  onClick={onClickHandler}
                  data-keyword={data}
                  className="flex content-center justify-center w-8 flex-wrap bg-cyan-500"
                >
                  <img
                    className=""
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
