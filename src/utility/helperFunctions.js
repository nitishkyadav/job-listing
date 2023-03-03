import data from "../data/data.json";

export function filterParameters(...params) {
  const filteredData = data.filter((curData) => {
    const curDataKeys = [
      ...curData.tools,
      ...curData.languages,
      curData.role,
      curData.level,
    ];
    // console.log(curDataKeys);
    // console.log(params);
    const multipleExists = params.every((ele) => curDataKeys.includes(ele));

    if (multipleExists) {
      return curData;
    }
  });
  return filteredData;
  // console.log(filteredData);
}
