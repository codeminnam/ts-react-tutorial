import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';
import { asyncState } from '../../lib/reducerUtils';

const initialState: GithubState = {
    // userProfile: {
    //     loading: false,
    //     data: null,
    //     error: null
    // }
    userProfile: asyncState.initial()
};

const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: (state, action) => ({
        ...state,
        // userProfile: {
        //     loading: true,
        //     data: null,
        //     error: null
        // }
        userProfile: asyncState.load()
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        // userProfile: {
        //     loading: false,
        //     data: action.payload,
        //     error: null
        // }
        userProfile: asyncState.success(action.payload)
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        // userProfile: {
        //     loading: false,
        //     data: null,
        //     error: action.payload
        // }
        userProfile: asyncState.error(action.payload)
    }),
});

export default github;