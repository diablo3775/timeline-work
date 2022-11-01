import React, { useEffect, useState } from 'react'
import data from './a/name.json'
import './Baka.css'

const Baka = () => {
  const [data, setData] = useState([])
  const [date,setDate] = useState("")
  const [CallerName, setCallerName] = useState("");

  const handleChangeCourse = (event) => {
    setDate(event.target.value);
  };

  const handleChangeName = (event) => {
    setCallerName(event.target.value);
  }

  const getUnique = (arr, comp) => {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      
      .map((e) => arr[e]);

    return unique;
  };

  useEffect(() => {
    const data = require("./a/name.json");
    setData(data);
  }, []);

  const uniqueCouse = getUnique(data, "Date");
  const uniqueName = getUnique(data, "CallerName")

  const filterDropdown = data.filter(function (result) {
    return result.Date === date  && result.CallerName === CallerName;
  });

    const strAscending = [...filterDropdown].sort((a, b) =>
    a.Date > b.Date ? 1 : -1,
    );

    console.log(strAscending)

  return (
    <div>
       {/*  */}
       <label>
          <select value={CallerName} onChange={handleChangeName}>
            {uniqueName.map((course) => (
              <option key={course.id} value={course.CallerName}>
                {course.CallerName}
              </option>
            ))}
          </select>
        </label>
          <hr />
          {/*  */}
        <label>
          <select value={date} onChange={handleChangeCourse}>
            {uniqueCouse.sort((a,b) => a.Date > b.Date ? 1 : -1).map((course) => (
              <option key={course.id} value={course.Date}>
                {course.Date}
              </option>
            ))}
          </select>
        </label>
          {/* <hr /> */}
         
        <div className='flex'>
          {filterDropdown.sort((a,b) => a.Time > b.Time ? 1 : -1).map((course) => (
            <div key={course.id} style={{ margin: "10px" }}>
              {/* <div className='bar'> */}
              {/* <div className="tooltip-on-hover">d</div>
              <div className="tooltip">{course.result}</div> */}
              <p>{course.Time}</p>
              <div className="tooltip-on-hover">⦿</div>
              <div className="tooltip">{course.result ? course.result.toString().replace(/\\n/g, '') : "" ? null : "No Message"}</div>
              <p className="tooltip-on-hover">{course.PhoneNumber}</p>
              {/* <div className='dot'></div> */}
              {/* <p>{course.CallerName}</p> */}
              <br />
              {/* </div> */}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Baka

