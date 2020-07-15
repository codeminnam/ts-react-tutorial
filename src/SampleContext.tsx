import React, { createContext, Dispatch, useReducer, useContext } from 'react';

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

type SampleDispatch = Dispatch<Action>
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

type SampleProviderProps = {
    children: React.ReactNode;
}

export function SampleProvider({ children }: SampleProviderProps) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'woodz',
        color: 'blue',
        isGood: true
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
}

export function useSampleState() {
    const state = useContext(SampleStateContext);
    if (!state) throw new Error('No Context');
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) throw new Error('No Context');
    return dispatch;
}