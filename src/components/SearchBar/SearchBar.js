import React, { useState } from 'react';
import { Container, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import GroupByDropDown from '../GroupByDropDown';


export function SearchBar({ onSearchClicked, searchBy, users }) {

    const [ state, setState ] = useState({
        searchText: ""
    })

    const onTextChange = (e) => {
        const  { name, value } = e.target;
        setState({
            [name]: value
        })
    }

    const onSearhSubmitted = (e) => {
        onSearchClicked(e, state.searchText)
    }

    return (
        <Container fluid className="m-2">
            <InputGroup>
                <Input
                    name="searchText"
                    type="number"
                    value={state.searchText}
                    disabled={!users}
                    placeholder={`Search by salary ${searchBy.name}`}
                    onChange={onTextChange} />
                <InputGroupAddon addonType="append">
                    <GroupByDropDown />
                    <Button active={!users} disabled={!users} color="primary" onClick={onSearhSubmitted}>Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </Container>
    )
}