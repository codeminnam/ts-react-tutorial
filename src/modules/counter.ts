import { createAction, ActionType, createReducer, action } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

type CounterState = {
    count: number
};

const initialState: CounterState = {
    count: 0
};

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// const counter = createReducer<CounterState, CounterAction>(initialState)
//     .handleAction(INCREASE, state => ({ count: state.count + 1 }))
//     .handleAction(DECREASE, state => ({ count: state.count - 1 }))
//     .handleAction(INCREASE_BY, (state, action) => ({
//         count: state.count + action.payload
//     }));

const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
});

export default counter;