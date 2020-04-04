import React, { Component } from 'react'
import { Container, Button, Row, Col, Modal,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserList from '../../components/UserList';
import SearchPage from '../../components/SearchBar';
import Fab from '../../components/Fab';
import UserForm from '../../components/UserForm';

export class HomePage extends Component {

  onSearhcSubmitted = (e, searchText) => {
    e.preventDefault();
    this.props.onSearch(this.props.searchBy, searchText);
  }

  onFormSubmitted = (e) => {
    if (this.props.isInEditMode) {
      this.props.editUser(this.props.formState);
      this.props.getAllUsers();
    } else {
      this.props.addUser(this.props.formState);
      this.props.getAllUsers();
    }
    this.closeModal(e);
  }

  closeModal = (e) => {
    e.preventDefault();
    if (this.props.isInEditMode) {
      this.props.closeEditModal();
    } else {
      this.props.closeAddModal();
    }
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { isModalOpen, isInEditMode } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col>
            <Container>
              <Col lg={12}>
                <SearchPage onSearchClicked={this.onSearhcSubmitted} />
                <UserList />
              </Col>
            </Container>
          </Col>
        </Row>
        <Modal isOpen={isModalOpen}>
          <ModalHeader>{ isInEditMode ? "Edit user" : "Add user" }</ModalHeader>
          <ModalBody>
            <UserForm />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onFormSubmitted}>{isInEditMode ? "Update" : "Add"}</Button>
            <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Fab onClick={this.props.openAddModal}>+</Fab>
      </Container>
    )
  }
}
