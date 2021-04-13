import * as React from 'react'; 
import {render} from 'react-dom';
import {HashRouter,Switch, Route, Redirect} from 'react-router-dom';
import App from './page/app';

render(
<HashRouter>
    <Switch>
        <Route path="/" component={App}/>
        <Redirect to="/"></Redirect>
    </Switch>
</HashRouter>,
document.getElementById("root")
);