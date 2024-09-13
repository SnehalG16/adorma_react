import React from 'react'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


      
function Events() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button style={{backgroundColor:"#003773"}}>Events</Button>

      <Dropdown.Toggle split  style={{backgroundColor:"#003773"}} id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" style={{color:"black"}}>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" style={{color:"black"}}>Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" style={{color:"black"}}>Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-4" style={{color:"black"}}>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-5" style={{color:"black"}}>Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-6" style={{color:"black"}}>Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-7" style={{color:"black"}}>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-8" style={{color:"black"}}>Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-9" style={{color:"black"}}>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Events

