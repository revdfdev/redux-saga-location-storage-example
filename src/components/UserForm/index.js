import { connect } from 'react-redux';
import { UserForm } from './UserForm';
import { onFormStateChange, clearFormState } from '../../store/ducks/form';

function mapStateToProps(state) {
    return {
        formState: state.form.formState,
        isInEditMode: state.form.isInEditMode
    }
}

export default connect(mapStateToProps, { onFormStateChange, clearFormState })(UserForm);