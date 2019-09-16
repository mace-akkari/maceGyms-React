import React, { useState, useEffect } from "react";
import { getClasses } from './ExampleAPIData';
import { Timetable } from './Timetable';

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const TimeTablePage = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getClasses()
        .then((classes) => { setAppointments(classes) })
        .then(() => setLoading(false))
    }, []);
    return (
        loading ? "Loading..." : <Timetable days={DAYS} hours={HOURS} appointments={appointments} />
    );
}

export default TimeTablePage;