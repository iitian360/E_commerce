// import React, { useState } from 'react';
// import Sidebar from '../../components/admin/sidebar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { Helmet } from "react-helmet";

// const CalendarPage = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <>
//     <Helmet>
//       <title>Calendar | Admin | Mera Bestie</title>
//     </Helmet>
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-8 ml-[5rem] lg:ml-64 bg-pink-50 min-h-screen">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Calendar</h1>

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <Calendar
//               onChange={setDate}
//               value={date}
//               className="w-full border-none"
//               tileClassName={({ date: tileDate }) => {
//                 if (
//                   tileDate.getDate() === new Date().getDate() &&
//                   tileDate.getMonth() === new Date().getMonth() &&
//                   tileDate.getFullYear() === new Date().getFullYear()
//                 ) {
//                   return 'bg-pink-200 text-pink-800 rounded-full';
//                 }
//               }}
//             />
//           </div>

//           <div className="mt-6 bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Selected Date: {date.toDateString()}
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CalendarPage;

/////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import Sidebar from '../../components/admin/sidebar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { Helmet } from "react-helmet";

// const CalendarPage = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <>
//       <Helmet>
//         <title>Calendar | Admin | Mera Bestie</title>
//       </Helmet>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-8 ml-[5rem] lg:ml-64 bg-pink-50 min-h-screen">
//           <div className="max-w-3xl mx-auto">
//             <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Calendar</h1>

//             <div className="bg-gray-200 rounded-lg shadow-md p-6">
//               <Calendar
//                 onChange={setDate}
//                 value={date}
//                 className="w-full shadow-lg rounded-lg  border-none p-1 custom-calendar"
//                 tileClassName={({ date: tileDate }) => {
//                   const isToday =
//                     tileDate.getDate() === new Date().getDate() &&
//                     tileDate.getMonth() === new Date().getMonth() &&
//                     tileDate.getFullYear() === new Date().getFullYear();

//                   return `rounded-md shadow-sm p-2 ${
//                     isToday ? '' : 'hover:shadow-md'
//                   }`;
//                 }}
//               />
//             </div>

//             <div className="mt-6 bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 Selected Date: {date.toDateString()}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CalendarPage;

import React, { useState } from 'react';
import Sidebar from '../../components/admin/sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Original Calendar CSS
// import './CalendarPage.css'; // Custom Calendar CSS
import { Helmet } from "react-helmet";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const dateMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  }

  const monthMap = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };


  return (
    <>
      <Helmet>
        <title>Calendar | Admin | Mera Bestie</title>
      </Helmet>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8 ml-[5rem] lg:ml-64 bg-pink-50 min-h-screen">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800  mb-3 text-center">Calendar</h1>

            <div className="bg-gray-200 rounded-lg shadow-lg p-6">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full border-none rounded"
              />
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <div className='flex gap-3 items-end'>
                <h1 className='font-bold text-6xl text-pink-600'>{date.getDate()}</h1>
                <span className='text-sm'>{dateMap[date.getDay()]}</span>
              </div>
              <div className='flex gap-3'>
                <p className='text-lg font-bold'>{monthMap[date.getMonth()]}</p>
                <p className='text-lg font-bold'>{date.getFullYear()}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;


