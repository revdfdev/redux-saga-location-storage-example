import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export function GroupByDropDown({ isOpen, toggle, selectedItem, items, setCurrentSelected }) {

    return (
        <React.Fragment>
            <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                <DropdownToggle caret color="primary" id={selectedItem.id}>
                    {selectedItem.name}
                </DropdownToggle>
                <DropdownMenu>
                    {items.map(item => (
                        <DropdownItem
                            key={item.id}
                            onClick={e => setCurrentSelected(item)}>
                            {item.name}
                        </DropdownItem>))}
                </DropdownMenu>
            </ButtonDropdown>
        </React.Fragment>
    );
}
