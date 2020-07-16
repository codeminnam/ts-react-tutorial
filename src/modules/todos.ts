import { createAction, ActionType, createReducer } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
});

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = {
    addTodo, toggleTodo, removeTodo
}

type TodosAction = ActionType<typeof actions>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({
            ...action.payload, // id, text 를 이 안에 넣기
            done: false
        }),
    // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter(todo => todo.id !== id)
});

// function todos(
//     state: TodosState = initialState,
//     action: TodosAction
// ): TodosState {
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false
//             });
//         case TOGGLE_TODO:
//             return state.map(todo =>
//                 todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//             );
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;
//     }
// }

export default todos;