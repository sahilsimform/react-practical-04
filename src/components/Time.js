import React from "react";
import "./Time.css";

function Time() {
  const d = new Date();

  let year1 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let month1 = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let day1 = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let week1 = new Intl.DateTimeFormat("en", { weekday: "long" }).format(d);

  return (
    <>
      <div className="container mt-4">
        <div className="time_div row  justify-content-md-center">
          <div className="time_div_date col">
            <h1 className="date_h1">{day1}</h1>
          </div>
          <div className="time_div_month col float-left">
            <h4 className="month_h4">{month1}</h4>
            <h4 className="year_h4">{year1}</h4>
          </div>
          <div className="time_div_day col ">
            <h4 className="day_h4">{week1}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Time;
