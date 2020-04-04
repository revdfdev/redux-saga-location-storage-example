import { UserList } from './UserList';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        userList: state.users.users
    }
}

export default connect(mapStateToProps, {})(UserList);