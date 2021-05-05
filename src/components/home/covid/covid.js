import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {covidAction} from '../../../redux/action/covid'
import "./covid.css";
function Covid() {

  useEffect(() => {
    dispatch(covidAction());
  }, []);

  const data = useSelector((state) => state.covid);
  const { covid} = data;
  const dispatch = useDispatch();

 
  return (
    covid === undefined ? 'ไม่พบข้อมูล': 
    <div className="home-box-covid">
      <div className="covid">
        <span className="covid-title">Important <br/> Information <br/>(Covid-19)</span>
        <div className="covid-box">
          <span>Confirmed</span>
          <span>{covid.confirm_case}</span>
        </div>
        <div className="covid-box">
          <span>Recovery</span>
          <span>{covid.recovery}</span>
        </div>
        <div className="covid-box">
          <span>New</span>
          <span>{covid.new}</span>
        </div>
        <div className="covid-box">
          <span>Dead</span>
          <span>{covid.dead}</span>
        </div>
      </div>
    </div>
  );
}

export default Covid;
