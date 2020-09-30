import {createSlice} from '@reduxjs/toolkit';

const initialChatsState = {
  conversations: null,
  conversation: null,
  scrollToBottom: false,
  messages: null,

  inputMessage: {
    images: [],
    text: '',
    files: [],
  },

  listLoading: false,
  actionsLoading: false,
  hasMoreConversation: true,

  totalCount: 0,
  friendForEdit: undefined,
  lastError: null,
};
export const callTypes = {
  list: 'list',
  action: 'action',
};

export const chatSlice = createSlice({
  name: 'chats',
  initialState: initialChatsState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
        state.listLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
        state.hasMoreConversation = true;
      }
    },
    conversationsFetched: (state, action) => {
      const {conversations} = action.payload;
      state.listLoading = false;
      state.error = null;
      state.conversations = conversations;
    },
    conversationFetched: (state, action) => {
      state.actionsLoading = false;

      let payload = action.payload;

      if (payload && payload.skip && payload.conversation) {
        // Nếu cuộc trò chuyện là 0 => hết data
        if (payload.conversation.messages.length === 0) {
          state.hasMoreConversation = false;
        } else {
          state.conversation.messages = payload.conversation.messages.concat(state.conversation.messages);
        }
      } else {
        console.log('VAODAY ===0');

        if (payload && payload.conversation) {
          state.conversation = payload.conversation;
        }
      }

      // state.conversation = action.payload.conversation;
      state.error = null;
    },

    doToggleScrollToBottom: (state, action) => {
      state.scrollToBottom = !state.scrollToBottom;
    },

    socketSendMessage: (state, action) => {
      let payload = action.payload;
      let message = payload.message;
      let currentUser = payload.currentUser;

      // Nếu tin nhắn đang mở thì thêm vào tin nhắn

      console.log('state.record.conversationType');
      console.log(state.conversation);

      console.log('state.record.message');
      console.log(message);

      console.log('state.messages');
      console.log(state.conversations);

      if (
        (state.conversation &&
          state.conversation.conversationType === 'User' &&
          state.conversation.receiver &&
          message.senderId &&
          message.receiverId &&
          state.conversation.receiver.id === message.senderId &&
          currentUser.id === message.receiverId) ||
        (state.conversation.receiver.id === message.receiverId && currentUser.id === message.senderId)
      ) {
        state.conversation.messages.push(message);
        state.scrollToBottom = true;
      } else if (
        state.conversation &&
        message.chatGroup &&
        state.conversation.receiver.id === message.chatGroup.id &&
        state.conversation.conversationType === 'ChatGroup'
      ) {
        state.conversation.messages.push(message);
        state.scrollToBottom = true;
      }

      // Tìm index của item hiện tại trong danh sách  mesages
      let receivedMessageIndex = -1;
      try {
        if (message.conversationType === 'ChatGroup') {
          // Xử lý chat group
          receivedMessageIndex = state.conversations.findIndex(item => {
            return message.chatGroupId === item.chatGroupId;
          });
        } else if (message.conversationType === 'User') {
          // xử lý chat riêng tư
          receivedMessageIndex = state.conversations.findIndex(item => {
            return (
              (message.senderId === item.senderId && message.receiverId === item.receiverId) ||
              (message.senderId === item.receiverId && message.receiverId === item.senderId)
            );
          });
        }
      } catch (error) {
        console.log('error');
        console.log(error);
      }

      if (receivedMessageIndex === 0) {
        // Nếu tin nhắn hiện tại đã nằm đầu danh sách thì thay đổi tin nhắn cuối cùng
        state.conversations[0].message = message.message;
        state.conversations[0].type = message.type;
        state.conversations[0].updatedAt = message.createdAt;
      } else if (receivedMessageIndex === -1) {
        // Nếu không có tin nhắn hiện tại trong danh sách thì thêm vào đầu
        state.conversations.unshift({
          sender: message.sender,
          receiver: message.receiver,
          message: message.message,
          type: message.type,
          conversationType: message.conversationType,
          updatedAt: message.createdAt,
        });
      } else {
        // Nếu tin nhắn hiện tại trong danh sách thì đưa lên đầu
        let [removedMessge] = state.conversations.splice(receivedMessageIndex, 1);
        state.conversations.unshift({
          ...removedMessge,
          message: message.message,
          type: message.type,
          updatedAt: message.createdAt,
        });
      }
    },

    sendMessage: () => {},

    sendMessaged: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
    },

    INPUT_MESSAGE_CHANGE: (state, action) => {
      let payload = action.payload;
      state.inputMessage.text = payload;
    },
    INPUT_IMAGE_LIST_CHANGE: (state, action) => {
      let payload = action.payload;

      console.log('payload:::');
      console.log(payload);

      state.inputMessage.images = payload;
    },

    INPUT_FILE_LIST_CHANGE: (state, action) => {
      let payload = action.payload;
      state.inputMessage.files = payload;
    },

    // getProductById
    productFetched: (state, action) => {
      state.actionsLoading = false;
      state.friendForEdit = action.payload.friendForEdit;
      state.error = null;
    },
    // findProducts
    friendsFetched: (state, action) => {
      const {totalCount, entities} = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createProduct
    productCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.product);
    },
    // updateProduct
    productUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.product.id) {
          return action.payload.product;
        }
        return entity;
      });
    },
    // deleteProduct
    huyKetBaned: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteProducts
    productsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => !action.payload.ids.includes(el.id));
    },
    // productsUpdateState
    productsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const {ids, status} = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    },
  },
});
