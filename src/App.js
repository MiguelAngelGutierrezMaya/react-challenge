import React from 'react';

/**
 * Router service
 */
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

/**
 * Routes
 */
import { Routes } from './routes';

/**
 * Routers
 */
import { LayoutRoute } from './routes/LayoutRoute/index'
import { DashboardRoute } from './routes/DashboardRoute/index'

/**
 * Components
 */
import { ToggleAppBar } from './components/ToggleAppBar';
import { Container } from '@material-ui/core';

/**
 * Pages
 */
import { Login } from './pages/Login';
import { LogOut } from './pages/Logout';
import { Posts } from './pages/Posts';

/**
 * Styles
 */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export const App = () => {

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        {
          <>
            <ToggleAppBar></ToggleAppBar>

            <Container fixed>
              <Switch>
                {/* Guest views */}
                <LayoutRoute path={Routes.appLogin}>
                  <Login />
                </LayoutRoute>

                {/* Auth views */}
                <DashboardRoute
                  hasAuthorization={true}
                  path={Routes.appHome}
                  exact
                >
                  <Posts />
                </DashboardRoute>

                <DashboardRoute
                  hasAuthorization={true}
                  path={Routes.appLogout}
                >
                  <LogOut />
                </DashboardRoute>

              </Switch>
            </Container>
          </>

        }
      </div>
    </Router>
  );
}
