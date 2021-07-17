import { login, logout } from '../../actions/auth';

test('Deveria gerar o action object do login', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Deveria gerar o action object do logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'        
    });
});