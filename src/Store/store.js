import {createStore} from 'redux';
import { handleAddToCart } from '../Reducer/reducer';
import reducer from '../Reducer/combReducer';

const store = createStore(reducer);
export default store;