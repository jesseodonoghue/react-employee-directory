import React from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'

function FilterSearch({ inputValue, handleInputChange }) {
    return (
        <Form className="has-search margin" onSubmit={e => { e.preventDefault(); }}>
            <FaSearch className="form-control-feedback search-icon" />
            <Form.Control
                type="search"
                placeholder="Search by name…"
                className="search-input"
                value={inputValue}
                onChange={handleInputChange}
            />
        </Form>
    )
}

export default FilterSearch;