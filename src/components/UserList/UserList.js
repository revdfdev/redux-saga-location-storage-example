import React from 'react';
import { Container, Row, Jumbotron } from 'reactstrap'
import UserCard from './UserCard';

export function UserList({ userList }) {

     return (userList && userList.length > 0) ? (
        <Row className="mt-4">
            {userList.map(user => {
                return <UserCard user={user} />
            })
            }
        </Row>
    ): (
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">No Records</h1>
                    <p className="lead">No records are added please add some records to display the list</p>
                </Container>
            </Jumbotron>
    )
}
