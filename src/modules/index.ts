import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import github, { githubSaga } from './github';
import { all } from 'react-saga/effects';

const rootReducer = combineReducers({ counter, todos, github });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([githubSaga()]);
}

