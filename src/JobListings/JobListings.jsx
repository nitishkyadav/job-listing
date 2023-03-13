import JobListing from "../Job-Listing/JobListing";
import { filterParameters } from "../utility/helperFunctions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobListings = (props) => {
  const { keywords } = useSelector((state) => state.filterKeywords);
  const [jobData, setJobData] = useState([]);
  const [smMarginTop, setSmMarginTop] = useState([]);

  useEffect(() => {
    if (keywords.length === 0) {
      setJobData(filterParameters());
    } else {
      const data = keywords;
      setJobData(filterParameters(...data));
    }

    if (keywords.length === 0) {
      setSmMarginTop("mt-4");
    } else if (keywords.length <= 2) {
      setSmMarginTop("mt-20");
    } else if (keywords.length <= 4) {
      setSmMarginTop("mt-32");
    } else if (keywords.length > 4) {
      setSmMarginTop("mt-48");
    }
    console.log(jobData);
  }, [keywords, smMarginTop]);

  return (
    <div className={`flex px-8 mx-auto flex-col xs:${smMarginTop}`}>
      {jobData.map((data) => (
        <JobListing data={data} key={data.id} setJobData={setJobData} />
      ))}
    </div>
  );
};

export default JobListings;
