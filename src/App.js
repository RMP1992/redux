import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./App.css";
import { setAbsences } from "./store/absence/absences.action";
import { selectAbsences } from "./store/absence/absences.selectors";

function App() {
  const absence = useSelector(selectAbsences);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAbsences = async () => {
      console.log("hi");
      try {
        console.log("hi");
        const result = await axios.get(
          `https://front-end-kata.brighthr.workers.dev/api/absences`
        );

        dispatch(setAbsences(result));
      } catch (error) {
        console.error("Error fetching absences:", error);
      }
    };
    getAbsences();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>List of absences</h1>

      {absence && absence.absence.data?.length > 0 ? (
        absence.absence.data.map((item) => (
          <div className="card" key={item.id}>
            <>
              <p>First Name: {item.employee.firstName}</p>
              <p>Last Name: {item.employee.lastName}</p>
            </>
            <p>ID: {item.startDate}</p> <p>Start Date: {item.startDate}</p>{" "}
            <p>Days: {item.days}</p>
            <p>absenceType: {item.absenceType}</p>
            <p>Status: {item.approved}</p>
          </div>
        ))
      ) : (
        <p>No data Found</p>
      )}
    </div>
  );
}

export default App;
