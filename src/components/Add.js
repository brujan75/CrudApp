import React, { useState , useNavigate} from "react";
import { Button, Form, Table } from "react-bootstrap"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 } from "uuid";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = v4();
    let uniqueId = ids.slice(0, 8);
    let a = name;
    let b = age;
    Employees.push({ id: uniqueId, Name: a, Age: b });
    Navigate("/");
  };
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
