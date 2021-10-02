import { Route, Switch } from "react-router"
import FormLogin from "../components/FormLogin"
import FormRegistration from "../components/FormRegistration"
import Home from "../pages/Home"
import TechPage from "../pages/TechPage"

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <FormRegistration />
                </Route>
                <Route path="/login">
                    <FormLogin />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/tech">
                    <TechPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;