import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'blue';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action =
    { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' };


function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Unhandled error');
    }
}

function ReducerSample() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hey',
        color: 'blue',
        isGood: true
    });
    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'hello' });
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
    const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

    return (
        <div>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
            <div>
                Count: {state.count} <br />
                Text: {state.text}<br />
                Color: {state.color}<br />
                isGood: {state.isGood ?'true': 'false'}<br />
            </div>
        </div>
    );
}

export default ReducerSample;