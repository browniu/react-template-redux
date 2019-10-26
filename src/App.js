import React from 'react';
import './App.scss';
import Main from './pages/main'
import {BrowserRouter as Router, Route, Link, Switch, useParams, useHistory} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <Link to={'/'}>首页</Link>
                    <Link to={'/about/haha'}>关于</Link>
                </nav>
                <Switch>
                    <Route path={'/about/:uid'}>
                        <About/>
                    </Route>
                    <Route path={'/'}>
                        首页
                    </Route>
                </Switch>
                <Main/>
            </Router>
        </div>
    );
}

const About = () => {
    const {uid} = useParams();
    const history = useHistory();
    console.log(uid);
    return (<div>
        <h1>关于</h1>
        <p>{uid}</p>
        <button onClick={() => {
            history.push('/')
        }}>返回首页
        </button>
    </div>)
}
export default App;
