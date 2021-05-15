import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "react-apexcharts";
import "./chartArea.css";
function ChartArea() {
  const chartDataSensor = useSelector((state) => state.chartDataSensor);
  const { data_sensor } = chartDataSensor;

  const chartDataOneSensor = useSelector((state) => state.chartDataOneSensor);
  const { data_one_sensor } = chartDataOneSensor;

  const [dataSeries, setDataSeries] = useState([]);
  const [timeOption, setTimeOption] = useState([]);

  const setSeries = () => {
    if (data_sensor !== undefined) {
      setDataSeries(data_sensor.map((item) => parseInt(item.value)));
      setTimeOption(data_sensor.map((item) => item.createdAt));
    }
  };

  const setSeriesNew = () => {
    if (data_one_sensor !== undefined) {
      setDataSeries((prevState) => [
        ...prevState,
        parseInt(data_one_sensor.value),
      ]);
      setTimeOption((prevState) => [...prevState, data_one_sensor.createdAt]);
    }
  };

  useEffect(() => {
    setSeries();
  }, [data_sensor]);

  useEffect(() => {
    setSeriesNew();
  }, [data_one_sensor]);

  const series = [
    {
      name: "xxxx",
      data: dataSeries,
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
      categories: timeOption,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return data_sensor === undefined ? (
    ""
  ) : (
    <div className="chart-area">
      <span className='chart-area-title'>{data_sensor && data_sensor[0].sensor.sensor_name }</span>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
}

export default ChartArea;
