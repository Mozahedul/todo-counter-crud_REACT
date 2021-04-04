export const initialState = {
  todoList: [],
  counter: 0,
};

const todoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_LIST": {
      return {
        ...state,
        todoList: [...state.todoList, action.item],
      };
    }

    case "ADD_NUMBER":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "SUB_NUMBER":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "REMOVE_LIST": {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
