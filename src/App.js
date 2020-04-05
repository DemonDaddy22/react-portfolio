import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default class App extends React.Component {

    render = () => <BrowserRouter><Routes /></BrowserRouter>
}
