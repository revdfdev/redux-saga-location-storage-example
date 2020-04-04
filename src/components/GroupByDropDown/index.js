import { GroupByDropDown } from './GroupByDropDown'
import { connect } from 'react-redux';
import { toggle, setCurrentSelected } from '../../store/ducks/dropdown'

function mapStateToProps ( state ) {
    return {
        isOpen: state.dropdown.isOpen,
        selectedItem: state.dropdown.selectedItem,
        items: state.dropdown.items
    }
}

export default connect(mapStateToProps, { toggle, setCurrentSelected })(GroupByDropDown);