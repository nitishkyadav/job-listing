import { useDispatch } from "react-redux";
import { filterKeywordsActions } from "../store/searchBaFilters-slice";

const JobListing = (props) => {
  const dispatch = useDispatch();
  let borderLeft = "";
  const data = props.data;
  const tech =
    "p-1 bg-bodyBg border-transparent hover:bg-teal-500 hover:text-white";
  if (data.featured) {
    borderLeft = "border-l-cyan-500";
  } else {
    borderLeft = "";
  }

  function onClickHandler(e) {
    const value = e.target.innerHTML;
    dispatch(filterKeywordsActions.addKeywords({ value }));
  }
  return (
    <div
      className={`flex text-teal-500 bg-white font-medium border-transparent border-2 ${borderLeft} rounded-md mt-14 xs:flex-col pl-4 xs:relative md:flex-row md:justify-around md:min-w-4/5 md:flex-grow-1.5 md:pl-0 md:gap-5  md:font-leagueSparten md:text-lg`}
    >
      <div className="flex xs:flex-col mt-10 md:flex-row md:m-5">
        <div className="xs:w-2/12 xs:absolute xs:-top-8 md:static md:mx-auto md:w-20 md:self-center">
          <img src={data.logo} alt={data.company} />
        </div>

        <div className="flex flex-col text-center xs:mt-1 md:min-w-[300px] md:ml-4 md:mt-0">
          <div className="flex content-center gap-2.5">
            <p className="">{data.company}</p>
            <ul className="flex gap-2.5 text-white">
              {data.new && (
                <li className="p-0.5 px-1.5 rounded-2xl bg-teal-500">New!</li>
              )}
              {data.featured && (
                <li className="p-0.5 px-1.5 rounded-2xl bg-teal-500 bg-black">
                  Featured
                </li>
              )}
            </ul>
          </div>
          <div className="flex mt-2">
            <h2 className="text-black font-bold text-lg hover:text-teal-500">
              {data.position}
            </h2>
          </div>

          <div className="flex mt-2">
            <ul className="flex gap-2.5 list-disc list-inside text-gray-400 text-base font-medium">
              <li className="list-none">{data.postedAt}</li>
              <li>{data.contract}</li>
              <li>{data.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden xs:block w-11/12 mt-4 mb-2">
        <hr className="h-px bg-gray-400 border-0 dark:bg-gray-400" />
      </div>

      <div className="flex text-teal-500 xs:pr-3 xs:mt-4 xs:mb-6 md:content-center md:flex-wrap md:min-w-min md:justify-end">
        <ul className="flex flex-wrap gap-2.5">
          <li className={`${tech}`} onClick={onClickHandler}>
            {data.role}
          </li>
          <li className={`${tech}`} onClick={onClickHandler}>
            {data.level}
          </li>
          {data.tools.map((tool, index) => (
            <li key={index} className={`${tech}`} onClick={onClickHandler}>
              {tool}
            </li>
          ))}
          {data.languages.map((language, index) => (
            <li key={index} className={`${tech}`} onClick={onClickHandler}>
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
