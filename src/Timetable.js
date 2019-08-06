import React from 'react';


const CLASSES = [

    {
        Time: 7,
        Day: 1,
        Class: "Yoga",
        End: 8,
        Instructor: "Maja"

    },
    {
        Time: 7,
        Day: 0,
        Class: "Yoga",
        End: 8,
        Instructor: "Maja"

    },
    {
        Time: 9,
        Day: 4,
        Class: "yoga",
        End: 11,
        Instructor: "Maja"
    },
    {
        Time: 7,
        Day: 3,
        Class: "Boxing",
        End: 8,
        Instructor: "Mace"
    },
    {
        Time: 12,
        Day: 7,
        Class: "yogalaties",
        End: 2,
        Instructor: "Pat"
    },

];



export const getClasses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CLASSES), 500)
  })
} 

// export default getClasses;


// export const Timetable = (props) => {
//     const {columnHeaders, rows} = props
//     return (
//         <div className="App">
//         <h1>Mace Gyms</h1>
//         <h2>Time Table</h2>
//         <table className="time-table">
//           <thead>
//             <tr>{columnHeaders}</tr>
//           </thead>
//           <tbody>
//             {rows}
//           </tbody>
//         </table>
//       </div>
//     );
// };

// export const Timetable = {
//    const [] = useState([""])

//   return (
//       <div className="App">
//       <h1>Mace Gyms</h1>
//       <h2>Time Table</h2>
//       <table className="time-table">
//         <thead>
//           <tr>{columnHeaders}</tr>
//         </thead>
//         <tbody>
//           {rows}
//         </tbody>
//       </table>
//     </div>
//   );
// };
