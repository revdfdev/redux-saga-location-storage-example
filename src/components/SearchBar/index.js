import { connect } from 'react-redux';
import { SearchBar } from './SearchBar'

function mapStateToProps (state) {
    return {
        searchBy: state.dropdown.selectedItem,
        users: state.users.users
    }
}

export default connect(mapStateToProps, {})(SearchBar);