import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import * as serviceWorker from './serviceWorker';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Home = lazy(() => import('./components/Home'));
//const Projects = lazy(() => import('./routes/Projects'));



const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Nav></Nav>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
                <Footer></Footer>
            </div>    
        </Suspense>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
