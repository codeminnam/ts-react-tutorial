import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';
import { AsyncState } from '../../lib/reducerUtils';

export type GithubAction = ActionType<typeof actions>;
export type GithubState = {
    // userProfile: {
    //     loading: boolean;
    //     data: GithubProfile | null;
    //     error: AxiosError | null;
    // }
    userProfile: AsyncState<GithubProfile, Error>;
}