import React from "react";
import { Route, Switch } from "react-router-dom";
import { CounterItemComponent } from './itemDetails/components'

const counterSystemLandingComponent = () => (
    <div>
        <Switch>
            <Route exact path="/" component={CounterItemComponent} />
        </Switch>
    </div>
);

export default counterSystemLandingComponent;