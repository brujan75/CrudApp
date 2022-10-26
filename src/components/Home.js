import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let Navigate = useNavigate();
  const handleDelete = (id) => {
    var index = Employees.map((e) => {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    Navigate("/")
  };
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to="/edit"> <Button
                          onClick={() => {
                            alert(item.id);
                          }}
                        >
                          Edit
                        </Button></Link>
                       
                        &nbsp;
                        <Button onClick={()=>{handleDelete(item.id)}}>Delete</Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>
        <Link to="/create" className="d-grid gap-2"><Button size="lg gap-2">Create</Button></Link>
      </div>
    </Fragment>
  );
};

export default Home;
