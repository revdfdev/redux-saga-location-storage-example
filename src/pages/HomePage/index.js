import { HomePage } from './HomePage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openAddModal, closeAddModal, closeEditModal } from '../../store/ducks/form';
import { getAllUsers, addUser, editUser, onSearch } from '../../store/ducks/users';

function mapStateToProps( state ) {
    return {
        isModalOpen: state.form.isModalOpen,
        isInEditMode: state.form.isInEditMode,
        formState: state.form.formState,
        users: state.users.users,
        searchBy: state.dropdown.selectedItem
    }
}

export default withRouter(connect(mapStateToProps, { 
    openAddModal, 
    closeAddModal, 
    closeEditModal, 
    getAllUsers, 
    addUser,
    editUser,
    onSearch
 })(HomePage));