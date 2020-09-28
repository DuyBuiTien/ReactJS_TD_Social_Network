import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';

import * as auth from '../app/modules/Auth/_redux/authRedux';
import {customersSlice} from '../app/modules/ECommerce/_redux/customers/customersSlice';
import {productsSlice} from '../app/modules/ECommerce/_redux/products/productsSlice';
import {friendsSlice} from '../app/modules/Friends/_redux/friendsSlice';
import {chatSlice} from '../app/modules/Chats/_redux/chatSlice';

import {remarksSlice} from '../app/modules/ECommerce/_redux/remarks/remarksSlice';
import {specificationsSlice} from '../app/modules/ECommerce/_redux/specifications/specificationsSlice';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  products: productsSlice.reducer,
  friends: friendsSlice.reducer,
  chats: chatSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
