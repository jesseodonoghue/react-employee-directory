import React from 'react';
import './style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function FilterBtnGroup({ sortBtn, resetBtn, children, handleSelectDropdown }) {
    return (
        <ButtonGroup className="margin full-width">
            <Button onClick={sortBtn}>{children}</Button>

            <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Manager">Manager</Dropdown.Item>
                <Dropdown.Item eventKey="Designer">Designer</Dropdown.Item>
                <Dropdown.Item eventKey="Developer">Developer</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Cary">Cary</Dropdown.Item>
                <Dropdown.Item eventKey="Greensboro">Greensboro</Dropdown.Item>
                <Dropdown.Item eventKey="Jacksonville">Jacksonville</Dropdown.Item>
                <Dropdown.Item eventKey="Raleigh">Raleigh</Dropdown.Item>
            </DropdownButton>
            <Button onClick={resetBtn}>Reset</Button>
        </ButtonGroup>
    )
}


export default FilterBtnGroup;