import JobListing from "../Job-Listing/JobListing";
import { filterParameters } from "../utility/helperFunctions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobListings = (props) => {
  const { keywords } = useSelector((state) => state.filterKeywords);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    if (keywords.length === 0) {
      setJobData(filterParameters());
    } else {
      const data = keywords;
      setJobData(filterParameters(...data));
    }
    console.log(jobData);
  }, [keywords]);

  return (
    <div className="flex px-8 mx-auto flex-col">
      {jobData.map((data) => (
        <JobListing data={data} key={data.id} setJobData={setJobData} />
      ))}
    </div>
  );
};

export default JobListings;
