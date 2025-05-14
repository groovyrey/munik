import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const initialPeople = {
  "Alex": [2, 6],
  "Jasper": [5, 3],
  "Jedrick": [1, 8],
  "Regie": [0, 3],
  "Eljay": [4, 4]
};


function calculateFCFS(processes) {
  let time = 0;
  return processes.map(([name, [arrival, burst]]) => {
    const start = Math.max(time, arrival);
    const finish = start + burst;
    time = finish;
    return { name, arrival, burst, start, finish, wait: start - arrival };
  });
}

function Main() {
  const sortedPeople = Object.fromEntries(
  Object.entries(initialPeople).sort(([, a], [, b]) => a[0] - b[0])
)
  const [people, setPeople] = useState(sortedPeople);
  const [results, setResults] = useState(calculateFCFS(Object.entries(sortedPeople)));

  const handleChange = (name, field, value) => {
    const updatedPeople = { ...people, [name]: [...people[name]] };
    updatedPeople[name][field === "arrival" ? 0 : 1] = Number(value);
    setPeople(updatedPeople);
  };

  const updateResults = () => {
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
    setResults(calculateFCFS(Object.entries(people)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">First Come First Serve Scheduling</h1>
      <hr />
      <table className="table table-bordered table-secondary mt-4">
        <thead className="table-dark">
          <tr>
            <th>Process</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(people).map(([name, [arrival, burst]]) => (
            <tr key={name}>
              <td>{name}</td>
              <td><input className="rounded w-25 border-0" type="number" value={arrival} onChange={(e) => handleChange(name, "arrival", e.target.value)} /></td>
              <td><input className="rounded w-25 border-0" type="number" value={burst} onChange={(e) => handleChange(name, "burst", e.target.value)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
      <button className="btn btn-success" onClick={updateResults}>Update Results</button>
      </div>
      <h1 className="text-center mt-4">Results:</h1>
      <table className="table table-bordered table-secondary mt-4">
        <thead className="table-dark">
          <tr>
            <th>Process</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Start Time</th>
            <th>Finish Time</th>
            <th>Waiting Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => (
            <tr key={index}>
              <td>{res.name}</td>
              <td>{res.arrival}</td>
              <td>{res.burst}</td>
              <td>{res.start}</td>
              <td>{res.finish}</td>
              <td>{res.wait}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
      <h3>Gantt Chart</h3>
      <div className="d-flex justify-content-center align-items-center">
        {results.map((res, index) => (
          <div key={index} className="card p-2 border bg-primary text-white me-2">
            {res.name}
            <hr></hr>
            {res.start} - {res.finish}
          </div>
        ))}
      </div>
      <hr></hr>
    </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
