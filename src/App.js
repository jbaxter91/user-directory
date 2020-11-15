import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import db from "./employees.json";

function App() {
  // Setting this.state.employees to the employees json array
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(db);
  }, []);

  const getByDepartment = (e) => {
    const filteredDB = db.filter(
      (employee) => employee.department === e.target.value
    );
    setEmployees(filteredDB);
    if (e.target.value === "all") {
      setEmployees(db);
    }
  };

  //Possible real time search... not done yet!
 const handleChange = (e) => {
    this.setState({search: e.target.value});
  } 

  // Map over this.state.employees and render a EmployeeCard component for each employee object

  return (
    <Wrapper>
      <Title>Employees List</Title>
      <div className="row">
        <div className="drop-down-flex">
          <label className="label col-6">  Choose a Department  </label>
          <select className="drop-down box col-6" onChange={getByDepartment}>
            <option value="all">All</option>
            <option value="management">Management</option>
            <option value="sales">Sales</option>
            <option value="reception">Reception</option>
            <option value="accounting">Accounting</option>
            <option value="warehouse">Warehouse</option>
            <option value="quality assurance">Quality Assurance</option>
            <option value="supply and relations">Supply and Relations</option>
            <option value="customer service">Customer Service</option>
          </select>
        </div>
      </div>
      <div className="row">
      {employees.map((employee) => (
        <EmployeeCard
          //removeEmployee={this.removeEmployee}
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          occupation={employee.occupation}
          location={employee.location}
        />
      ))}
      </div>
    </Wrapper>
  );
}

export default App;
