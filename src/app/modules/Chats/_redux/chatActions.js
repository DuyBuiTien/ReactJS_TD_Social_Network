import * as requestFromServer from './chatCrud';
import {chatSlice, callTypes} from './chatSlice';
import getSocket from '../../../../redux/rootSocket';

import store from '../../../../redux/store';

const {actions} = chatSlice;

export const emitSentMessage = payload => {
  console.log('data');
  console.log(payload);
  getSocket().emit('sent-message', payload);
};

export const onSentMessage = payload => {
  let state = store.getState();
  const {user} = state.auth;
  const currentUser = user;

  return store.dispatch(actions.socketSendMessage({message: payload, currentUser: currentUser}));
};

export const fetchConversations = ({gskip, pskip}) => dispatch => {
  dispatch(actions.startCall({callType: callTypes.list}));

  return requestFromServer
    .Conversations(gskip, pskip)
    .then(response => {
      const conversations = response.data;
      dispatch(actions.conversationsFetched({conversations}));
    })
    .catch(error => {
      error.clientMessage = "Can't find friends";
      dispatch(actions.catchError({error, callType: callTypes.list}));
    });
};

export const sendMessage = message => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));

  return requestFromServer
    .createMessage(message)
    .then(response => {
      const conversations = response.data;

      emitSentMessage(response.data);

      dispatch(actions.sendMessaged());
    })
    .catch(error => {
      error.clientMessage = "Can't find friends";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const INPUT_MESSAGE_CHANGE = message => dispatch => {
  return dispatch(actions.INPUT_MESSAGE_CHANGE(message));
};

export const fetchConversation = (id, skip, limit = 20) => dispatch => {
  if (!id) {
    return dispatch(actions.conversationFetched({conversation: undefined}));
  }

  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .Conversation(id, skip, limit)
    .then(response => {
      const product = response.data;
      dispatch(actions.conversationFetched({conversation: product, skip: skip}));
    })
    .catch(error => {
      error.clientMessage = "Can't find product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const doToggleScrollToBottom = () => dispatch => {
  return dispatch(actions.doToggleScrollToBottom());
};

export const fetchFriends = type => dispatch => {
  dispatch(actions.startCall({callType: callTypes.list}));

  return requestFromServer
    .GetContacts(type)
    .then(response => {
      console.log('response');
      console.log(response);
      //const {totalCount, entities} = response.data;
      const entities = response.data.data;
      const totalCount = response.data.meta.total;
      dispatch(actions.friendsFetched({totalCount, entities}));
    })
    .catch(error => {
      error.clientMessage = "Can't find friends";
      dispatch(actions.catchError({error, callType: callTypes.list}));
    });
};

export const fetchProduct = id => dispatch => {
  if (!id) {
    return dispatch(actions.productFetched({productForEdit: undefined}));
  }

  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .getProductById(id)
    .then(response => {
      const product = response.data;
      dispatch(actions.productFetched({productForEdit: product}));
    })
    .catch(error => {
      error.clientMessage = "Can't find product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const huyKetBan = id => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .huyKetBan(id)
    .then(response => {
      dispatch(actions.huyKetBaned({id}));
    })
    .catch(error => {
      error.clientMessage = 'Không thể hủy kết bạn';
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const createProduct = productForCreation => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .createProduct(productForCreation)
    .then(response => {
      const {product} = response.data;
      dispatch(actions.productCreated({product}));
    })
    .catch(error => {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const updateProduct = product => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .updateProduct(product)
    .then(() => {
      dispatch(actions.productUpdated({product}));
    })
    .catch(error => {
      error.clientMessage = "Can't update product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const updateProductsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .updateStatusForProducts(ids, status)
    .then(() => {
      dispatch(actions.productsStatusUpdated({ids, status}));
    })
    .catch(error => {
      error.clientMessage = "Can't update products status";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const deleteProducts = ids => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .deleteProducts(ids)
    .then(() => {
      dispatch(actions.productsDeleted({ids}));
    })
    .catch(error => {
      error.clientMessage = "Can't delete products";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};
