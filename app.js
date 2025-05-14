import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const initialPeople = {
  "Jhon": [0, 20],
  "Emma": [5, 5],
  "Liam": [8, 10],
  "Olivia": [12, 15],
  "Sofia": [10, 10]
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
  const [people, setPeople] = useState(initialPeople);
  const [results, setResults] = useState(calculateFCFS(Object.entries(sortedPeople)));

  const handleChange = (name, field, value) => {
    const updatedPeople = { ...people, [name]: [...people[name]] };
    updatedPeople[name][field === "arrival" ? 0 : 1] = Number(value);
    setPeople(updatedPeople);
  };

  const updateResults = () => {
const toastLiveExample = document.getElementById('liveToast')
const sortedPeople = Object.fromEntries(
  Object.entries(people).sort(([, a], [, b]) => a[0] - b[0]))
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
    setResults(calculateFCFS(Object.entries(sortedPeople)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">First Come First Serve Scheduling</h1>
      <hr />
      <p>Scenario: Bank Teller Queue</p>
      <p>At a local bank branch, there is one teller available for customer service. Customers arrive at different times and are served in the order they arrive — First-Come, First-Served (FCFS). Services vary in duration depending on customer needs like deposits, account issues, or loan queries.</p>
      <p>Customers and Arrival Times</p>
<p>Customer Arrival Time Service Duration</p>
<ul>
  <li>John	9:00 AM	20 minutes</li>
  <li>Emma	9:05 AM	5 minutes</li>
  <li>Liam	9:08 AM	10 minutes</li>
  <li>Sofia 9:10 AM 10 minutes</li>
  <li>Olivia	9:12 AM	15 minutes</li>
</ul>
<p>Applying FCFS</p>
<ol>
  <li>John arrives at 9:00 AM (0 minutes) and starts immediately. He finishes at 9:20 AM.</li>
  <li>Emma arrives at 9:05 AM (5 minutes) but waits until John is done. She starts at 9:20 AM and finishes at 9:25 AM.</li>
  <li>Liam arrives at 9:08 AM (8 minutes) but also waits for Emma. He starts at 9:25 AM and finishes at 9:35 AM.</li>
  <li>Sophia arrives at 9:10 AM (10 minutes) and waits until Liam finishes. She starts at 9:35 AM and finishes at 9:45 AM.</li>
  <li>Olivia arrives at 9:12 AM (12 minutes) and waits for Sophia. She starts at 9:45 AM and finishes at 10:00 AM.</li>
</ol>
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
