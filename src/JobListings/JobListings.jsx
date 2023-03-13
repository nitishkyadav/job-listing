import JobListing from "../Job-Listing/JobListing";
import { filterParameters } from "../utility/helperFunctions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";

const JobListings = (props) => {
  const { keywords, isSearchEnabled } = useSelector(
    (state) => state.filterKeywords,
  );
  const [jobData, setJobData] = useState([]);
  const [smMarginTop, setSmMarginTop] = useState([]);

  useEffect(() => {
    if (keywords.length === 0) {
      setJobData(filterParameters());
    } else {
      const data = keywords;
      setJobData(filterParameters(...data));
    }

    if (isSearchEnabled) {
      setSmMarginTop("-mt-9");
    } else {
      setSmMarginTop("");
    }
  }, [keywords, isSearchEnabled]);

  return (
    <div className={`flex px-8 mx-auto flex-col ${smMarginTop} mb-16`}>
      <SearchBar />
      {jobData.map((data) => (
        <JobListing data={data} key={data.id} setJobData={setJobData} />
      ))}
    </div>
  );
};

export default JobListings;
