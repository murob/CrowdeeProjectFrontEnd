import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import SwipeableTemporaryDrawer from "./components/SwipeableTemporaryDrawer";
import SignIn from "./components/SignIn";
import MenuAppBar from "./components/MenuAppBar";
export default function AdminPage() {
    return (
        <div>
            <SignIn></SignIn>
        </div>

    )

}