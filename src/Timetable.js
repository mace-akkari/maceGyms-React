import React from 'react';

const columnHeaders = (days) => ['', ...days].map(day => <th key={day}>{day}</th>);

const columns = (days, rowHeading) => {
  return (
    <>
      <td>{rowHeading}</td>
      {days.map(day => (<td key={day}></td>))}
    </>
  );
}

const rows = (days, hours) => hours.map(hour => (<tr key={hour}>{columns(days, `${hour}:00`)}</tr>));

export const Timetable = (props) => {
  const { days, hours } = props
  return (
    <table className="time-table">
      <thead>
        <tr>{columnHeaders(days)}</tr>
      </thead>
      <tbody>
        {rows(days, hours)}
      </tbody>
    </table>
  );
};