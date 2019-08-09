
export const SET_LIST = 'SET_LIST';
export const GET_LIST = 'GET_LIST';
const ListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_LIST: {
      return [...action.value]
    }
    case GET_LIST: {
      return state;
    }
    // case ADD_ITEM: {
    //   const id = uuid();
    //   const newItem = {
    //     value: action.payload.value,
    //     id,
    //     completed: false,
    //   };
    //
    //   return { ...state, items: [...state.items, newItem] };
    // }
    //
    // case CANCEL_EDIT_ITEM: {
    //   const newState = state.items.length ? { ...state, editingItem: {} } : { ...state };
    //   return newState;
    // }
    //
    // case DELETE_ITEM: {
    //   const items = state.items.filter(({ id }) => id !== action.payload.id);
    //   return { ...state, items };
    // }
    //
    // case EDIT_ITEM: {
    //   const items = state.items.map(item => {
    //     if (item.id === action.payload.modifiedItem.id) {
    //       item.value = action.payload.modifiedItem.value;
    //     }
    //
    //     return item;
    //   });
    //
    //   return { ...state, items, editingItem: {} };
    // }
    //
    // case ITEM_COMPLETION: {
    //   const items = state.items.map(item => {
    //     if (item.id === action.payload.modifiedItem.id) {
    //       const newItem = { ...item };
    //       newItem.completed = !newItem.completed;
    //       return newItem;
    //     }
    //
    //     return item;
    //   });
    //
    //   return { ...state, items };
    // }
    //
    // case SELECT_EDIT_ITEM: {
    //   const item = state.items.find(({ id }) => id === action.payload.id);
    //   return { ...state, editingItem: item };
    // }
    //
    // case REORDER_ITEM: {
    //   const clone = [...state.items];
    //   const [removed] = clone.splice(action.payload.initialPosition, 1);
    //   clone.splice(action.payload.newPosition, 0, removed);
    //
    //   return { ...state, items: clone };
    // }

    default: {
      return state;
    }
  }
};

export default ListReducer;
