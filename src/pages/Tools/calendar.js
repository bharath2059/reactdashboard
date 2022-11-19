import { useState } from "react";
import Calendar from "react-calendar";
import SideNavBar from "../../NavBar/SideNavBar";
import "./../styles/style.css";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <SideNavBar />
      <div className="Container">
        <h1 className="header"> Calendar</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="text-center">Selected date: {date.toDateString()}</div>
      </div>
    </>
  );
};

export default ReactCalendar;
