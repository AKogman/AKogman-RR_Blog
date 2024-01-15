import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoute({ children, ...rest }) {
    const { user } = useAuth();

    return (
    <Route
        {...rest}
        render={({ location }) =>
        user ? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                state: { from: location },
            }}
        />
        )
        }
    />
    );
}
