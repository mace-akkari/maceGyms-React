import React from 'react';

const getAppointment = (day, hour, appointments) => {
  return appointments.find((appointment) => {
    return appointment.day === day && appointment.startTime === hour;
  });
}

const columnHeaders = (days) => ['', ...days].map(day => <th key={day}>{day}</th>);

const slot = (appointment) => (
  <>
    <h5>{appointment.description}</h5>
    <p>{`Instructor: ${appointment.instructor}`}</p>
    <p>{`Duration: ${appointment.endTime - appointment.startTime} hour(s)`}</p>
    <p>{`Number of attendees: ${appointment.attendees.length}`}</p>
  </>
)
const columns = (days, hour, appointments) => {
  const getDay = (day, index) => {
    const appointment = getAppointment(index, hour, appointments);
    return (<td className={appointment ? 'appointment': null} key={day}>{appointment ? slot(appointment) : null}</td>)
  }
  return (
    <>
      <td>{`${hour}:00`}</td>
      {days.map(getDay)}
    </>
  );
}

const rows = (days, hours, appointments) => hours.map(hour =>
  (<tr key={hour}>{columns(days, hour, appointments)}</tr>));

export const Timetable = (props) => {
  const { days, hours, appointments } = props
  return (
    <div className='content'>
      <h1>Mace Gyms</h1>
      <h2>Time Table</h2>
      <table className="time-table">
        <thead>
          <tr>{columnHeaders(days)}</tr>
        </thead>
        <tbody>
          {rows(days, hours, appointments)}
        </tbody>
      </table>
    </div>
  )
};