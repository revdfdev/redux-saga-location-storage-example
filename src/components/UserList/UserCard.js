import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import { openEditModal } from '../../store/ducks/form';
import { withRouter } from 'react-router-dom';


function UserCard ({user, openEditModal, history}) {
    const openModal = ()  => {
        openEditModal(user);
    }

    const pushToDetails = () => {
        history.push({
            pathname: '/details',
            search: `?query=${user.name}`,
            state: { user: user }
        })
    }

    return (
        <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <h4 className="card-title">
                            Name: {user.name}
                        </h4>
                        <h5>Salary: {user.salary}</h5>
                        <h5>Email: {user.email}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <Button className="flex-start" color="primary" size="lg" active onClick={openModal} >Edit</Button>
                        <Button className="flex-end" color="primary" size="lg" active onClick={pushToDetails}>Show</Button>
                    </div>
                </div>
        </div>
    )
}

function mapStateToProps() {
    return {}
}

export default withRouter(connect(mapStateToProps, { openEditModal })(UserCard));