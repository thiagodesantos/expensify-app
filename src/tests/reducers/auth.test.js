import { expect } from '@jest/globals';
import authReducer from '../../reducers/auth';

test('Deveria setar o uid para o login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer({}, action);;
    expect(state.uid).toBe(action.uid);
});

test('Deveria limpar o uid durante o logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: '123'}, action);
    expect(state).toEqual({});
});