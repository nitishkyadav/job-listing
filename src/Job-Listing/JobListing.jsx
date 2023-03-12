import { useDispatch } from "react-redux";
import { filterKeywordsActions } from "../store/searchBaFilters-slice";

const JobListing = (props) => {
  const dispatch = useDispatch();
  let borderLeft = "";
  const data = props.data;

  if (data.featured) {
    borderLeft = "border-l-cyan-500 border-l-4";
  } else {
    borderLeft = "";
  }

  function onClickHandler(e) {
    const value = e.target.innerHTML;
    dispatch(filterKeywordsActions.addKeywords({ value }));
  }
  return (
    <div
      className={`flex text-cyan-500 bg-white font-medium border-transparent border-2 ${borderLeft} rounded-md mt-10 xs:flex-col pl-4 relative`}
    >
      <div className="flex xs:flex-col mt-10">
        <div className="xs:w-2/12 absolute -top-7">
          <img src={data.logo} alt={data.company} />
        </div>

        <div className="flex flex-col text-center xs:mt-1">
          <div className="flex content-center gap-2.5">
            <p className="">{data.company}</p>
            <ul className="flex gap-2.5 text-white">
              {data.new && (
                <li className="p-0.5 px-1.5 rounded-2xl bg-cyan-500">New!</li>
              )}
              {data.featured && (
                <li className="p-0.5 px-1.5 rounded-2xl bg-cyan-500 bg-black">
                  Featured
                </li>
              )}
            </ul>
          </div>
          <div className="flex mt-2">
            <h2 className="text-black font-bold">{data.position}</h2>
          </div>

          <div className="flex mt-2">
            <ul className="flex gap-2.5 list-disc list-inside text-gray-400">
              <li className="list-none">{data.postedAt}</li>
              <li>{data.contract}</li>
              <li>{data.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden xs:block w-11/12 mt-4 mb-2">
        <hr className="justify-start" />
      </div>
      <div className="flex text-cyan-500 xs:pr-2 mt-4 mb-6">
        <ul className="flex flex-wrap gap-2.5">
          <li
            className="p-1 bg-bodyBg border-transparent"
            onClick={onClickHandler}
          >
            {data.role}
          </li>
          <li
            className="p-1 bg-bodyBg border-transparent"
            onClick={onClickHandler}
          >
            {data.level}
          </li>
          {data.tools.map((tool, index) => (
            <li
              key={index}
              className="p-1 bg-bodyBg border-transparent"
              onClick={onClickHandler}
            >
              {tool}
            </li>
          ))}
          {data.languages.map((language, index) => (
            <li
              key={index}
              className="p-1 bg-bodyBg border-transparent"
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
