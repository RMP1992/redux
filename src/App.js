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
    console.log("hello");
    const getAbsences = async () => {
      console.log("hello");
      try {
        const result = await axios.get(
          `https://front-end-kata.brighthr.workers.dev/api/absences`
        );
        console.log("result", result);
        dispatch(setAbsences(result.data));
      } catch (error) {
        console.error("Error fetching absences:", error);
      }
    };
    getAbsences();
  }, [dispatch]);

  if (absence.absence <= 0) {
    return;
  }
  console.log(absence);
  console.log(absence?.absence.map((i) => i));

  return (
    <div className="App">
      <h1>List of absences</h1>

      {absence && absence?.absence?.length > 0 ? (
        absence?.absence.map((i) =>
          Object.entries(i).map((abs) =>
            abs[1].employee.map((n) => (
              <div className="card" key={i.id}>
                <>
                  <p>First Name: {n.firstName}</p>
                  <p>Last Name: {n.lastName}</p>
                </>
                <p>ID: {i.startDate}</p> <p>Start Date: {i.startDate}</p>{" "}
                <p>Days: {i.days}</p>
                <p>absenceType: {i.absenceType}</p>
                <p>Status: {i.approved}</p>
              </div>
            ))
          )
        )
      ) : (
        <p>No data Found</p>
      )}
    </div>
  );
}

export default App;
