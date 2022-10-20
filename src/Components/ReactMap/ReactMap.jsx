import React from "react";
import "./ReactMap.module.scss";
import { Chart } from "react-google-charts";

const ReactMap = ({ size,details}) => {
  const {countrycode} = details
  const options = {
    region: countrycode,

    legend: "none",

    keepAspectRatio: false,

    resolution: "provinces",

    backgroundColor: "transparent",

    datalessRegionColor: "transparent",

    defaultColor: "#00C12A",
  };

  const data = [["Region"], [""]];

  return (
    <Chart
    key={size.width}
      chartType="GeoChart"
      width={size.width > 600 ? "100%" : `${size.width - 33}px`}
      // height="400px"
      data={data}
      options={options}
    />
  );
};

export default ReactMap;
