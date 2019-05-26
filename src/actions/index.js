// ./actions/index.js

export const ADD_TODO = 'ADD_TODO';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime().toString(),
      title
    }
  };
}
