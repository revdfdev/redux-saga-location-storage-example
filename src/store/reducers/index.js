import { combineReducers } from 'redux';
import dropdown from '../ducks/dropdown';
import form from '../ducks/form';
import users from '../ducks/users';

export default () => combineReducers({
    users,
    form,
    dropdown
});