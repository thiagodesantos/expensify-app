//Higher  Order Component (HOC) - um componente que renderiza outro componente 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>a informação é: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapppedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Essa informação é privada, por favor não compartilhe</p>}
            <WrapppedComponent {...props}/>
        </div>
    );
};

const requirdAuthentication = (WrapppedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated? (
                <WrapppedComponent {...props}/>
            ) : (
                <p>Por favor entre no sistema para ver a info</p>
            )}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requirdAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="é um detalhe" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="é um detalhe" />, document.getElementById('app'));