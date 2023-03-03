import { useDispatch } from "react-redux";
import { filterKeywordsActions } from "../store/searchBaFilters-slice";

const JobListing = (props) => {
  const dispatch = useDispatch();
  let borderLeft = "";
  const data = props.data;

  if (data.featured) {
    borderLeft = "border-l-cyan-500 border-l-8";
  } else {
  }

  function onClickHandler(e) {
    const value = e.target.innerHTML;
    dispatch(filterKeywordsActions.addKeywords({ value }));
  }
  return (
    <div
      className={`flex ${borderLeft} bg-white rounded-md font-leagueSparten justify-between w-10/12 max-w-5xl px-4 border border-black p-8`}
    >
      <div className={data.featured ? "flex ml-6" : "flex ml-8"}>
        <img src={data.logo} alt={data.company} />

        <div className="flex flex-col ml-4 justify-center gap-1">
          <div className="flex">
            <p className="mr-2.5 font-medium pt-0.5">{data.company}</p>
            <ul className="flex list-none gap-2.5">
              {data.new && (
                <li className="px-2.5 pt-0.5 rounded-2xl bg-cyan-500 text-white font-medium">
                  New
                </li>
              )}
              {data.featured && (
                <li className="px-2.5  pt-0.5 rounded-2xl bg-black font-medium text-white">
                  Featured
                </li>
              )}
            </ul>
          </div>
          <div className="">
            <h2 className="text-cyan-500 text-xl mt-1 cursor-pointer">
              {data.position}
            </h2>
          </div>

          <div className="">
            <ul className="flex gap-2.5 opacity-70 list-disc list-inside">
              <li className="list-none">{data.postedAt}</li>
              <li>{data.contract}</li>
              <li>{data.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex my-auto">
        <ul className="flex list-none gap-2.5">
          <li
            className="px-2.5 cursor-pointer bg-teal-100 text-center text-teal-500 hover:bg-teal-500 hover:text-white pt-0.5"
            onClick={onClickHandler}
          >
            {data.role}
          </li>
          <li
            className="px-2.5 cursor-pointer bg-teal-100 text-center text-teal-500 hover:bg-teal-500 hover:text-white pt-0.5"
            onClick={onClickHandler}
          >
            {data.level}
          </li>
          {data.tools.map((tool, index) => (
            <li
              key={index}
              className="px-2.5 cursor-pointer bg-teal-100 text-center text-teal-500 hover:bg-teal-500 hover:text-white pt-0.5"
              onClick={onClickHandler}
            >
              {tool}
            </li>
          ))}
          {data.languages.map((language, index) => (
            <li
              key={index}
              className="px-2.5 cursor-pointer bg-teal-100 text-center text-teal-500 pt-0.5 hover:bg-teal-500 hover:text-white"
              onClick={onClickHandler}
            >
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
