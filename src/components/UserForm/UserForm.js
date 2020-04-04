import React, { useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export function UserForm({ formState, onFormStateChange, isInEditMode, clearFormState }) {

    useEffect(() => {
        if (!isInEditMode) {
            clearFormState();
        }
    }, []);

    return (
        <Form>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={onFormStateChange}
                    disabled={isInEditMode}
                    placeholder="Please enter name" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={onFormStateChange}
                    placeholder="Please enter email" />
            </FormGroup>
            <FormGroup>
                <Label for="salary">Salary</Label>
                <Input
                    name="salary"
                    type="number"
                    value={formState.salary}
                    onChange={onFormStateChange}
                    placeholder="Please enter salary" />
            </FormGroup>
        </Form>
    );
}
