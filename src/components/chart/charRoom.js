import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./chartArea.css";
function ChartRoom({data}) {

    // const setSeries = () =>{
    //     console.log(props.data)
    // }

    // useEffect(() => {
    //     setSeries()
    // }, [])

  const series = [
    {
      name: "xxxx",
      data: 10,
    },
    
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: 10,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="chart-area">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
}

export default ChartRoom;
