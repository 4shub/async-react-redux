import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './app.reducer';

const Home = lazy(() => Promise
    .all([import('./home/home.component'), import('./home/home.reducer')])
    .then(([component, reducer]) => {
        store.update('home', reducer.default);
        return Promise.resolve(component);
    }));

const About = lazy(() => Promise
    .all([import('./about/about.component'), import('./about/about.reducer')])
    .then(([component, reducer]) => {
        store.update('about', reducer.default);
        return Promise.resolve(component);
    }));


export default () => (
    <Provider store={store}>
        <Router>
            <Suspense
                fallback={<div>Loading...</div>}
            >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    </Provider>
);
