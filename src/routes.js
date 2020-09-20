import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./pages/main";
import Product from "./pages/product"

const Routes = () =>
//diz que a rota que vamos utilizar é o browser
<BrowserRouter> 
{/* switch permite que apenas uma rota seja chamada por vez */}
    <Switch> 
        <Route exact path="/" component={Main} />
        {/* recebe o parametro id */}
        <Route path="/products/:id" component={Product} /> 
    </Switch>
</BrowserRouter>

export default Routes;