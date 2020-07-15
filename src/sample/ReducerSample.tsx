import React from 'react';
import { useSampleState, useSampleDispatch } from './SampleContext';

function ReducerSample() {
    const state = useSampleState();
    const dispatch = useSampleDispatch();

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
                isGood: {state.isGood ? 'true' : 'false'}<br />
            </div>
        </div>
    );
}

export default ReducerSample;