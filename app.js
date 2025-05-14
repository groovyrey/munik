import React from 'react';
import ReactDOM from 'react-dom';

const people = {
  "Jasper": [2, 6],
  "Regie": [5, 3],
  "Jedrick": [1, 8],
  "Alex": [0, 3],
  "Eljay": [4, 4]
};

// Sort the processes based on arrival time (FCFS)
const sortedPeople = Object.entries(people).sort(([, a], [, b]) => a[0] - b[0]);

function calculateFCFS(processes) {
  let time = 0;
  const results = processes.map(([name, [arrival, burst]]) => {
    const start = Math.max(time, arrival);
    const finish = start + burst;
    time = finish;
    return { name, arrival, burst, start, finish, wait: start - arrival };
  });
  return results;
}

const firstTable = calculateFCFS(Object.entries(people))
const results = calculateFCFS(sortedPeople);

function GanttChart({ results }) {
  return (
    <div className="mt-4">
      <h3>Gantt Chart</h3>
      <div className="d-flex align-items-center">
        {results.map((res, index) => (
          <div key={index} className="p-2 border bg-primary text-white me-2">
            {res.name} ({res.start} - {res.finish})
          </div>
        ))}
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="container mt-5">
    	<h1 className="text-center">First Come First Serve Scheduling</h1>
       <table className="table table-secondary mt-4">
        <thead className="table-dark">
          <tr>
            <th>Process</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
          </tr>
        </thead>
        <tbody>
          {firstTable.map((res, index) => (
            <tr key={index}>
              <td>{res.name}</td>
              <td>{res.arrival}</td>
              <td>{res.burst}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-center">Results: </h1>
      <table className="table table-secondary mt-4">
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

      <GanttChart results={results} />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
