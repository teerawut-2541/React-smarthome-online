import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import './chartArea.css'
function ChartRoom({name,itemlist,datedata}) {

  // const types = [
  //   { value: "0", lable: "1วันย้อนหลัง" },
  //   { value: "2", lable: "3วันย้อนหลัง" },
  //   { value: "6", lable: "7วันย้อนหลัง" },
  // ];
  const series = [
    {
      name: name,
      data: itemlist,
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
      categories: datedata,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  //   responsive: [{
  //     breakpoint: 1000,
  //     options: {
  //       chart: {
  //         width: '100%'
  //     }
  //     },
  // }]
  };

  return (
    <div className="">
      <samp className='text-samp'>{name}</samp>
      <Chart options={options} series={series} type="area" height={350} className='bos'  />
    </div>
  );
}

export default ChartRoom;
