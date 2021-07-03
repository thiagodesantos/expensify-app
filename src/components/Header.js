import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Despesinhas</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/criar" activeClassName="is-active">Adicionar</NavLink>
        <NavLink to="/ajuda" activeClassName="is-active">Ajuda</NavLink>
    </header>
);

export default Header;