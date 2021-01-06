import React from 'react';

import { Route } from 'react-router-dom';
import './RouterView.scss';
import Home from '../Home';
import OaLogin from '../Auth/OaLogin';
import Landing from '../Landing';
import { Authorization } from '../Types/GeneralTypes';
import Tenant from '../Tenant';
import OakRoute from '../Auth/OakRoute';
import Unauthorized from '../Auth/Unauthorized';
import OneAuth from '../Login/OneAuth/index';
import Login from '../Login/index';
import ListProject from '../Project/ListProject';
import CreateProject from '../Project/CreateProject';
import ViewProject from '../Project/ViewProject';
import ViewEndpointCustom from '../Endpoint/ViewEndpointCustom';
import ViewEndpointDomain from '../Endpoint/ViewEndpointDomain';
import CreateEndpoint from '../Endpoint/CreateEndpoint';
import ListEndpoint from '../Endpoint/ListEndpoint';

interface Props {
  cookies: any;
}

const RouterView = (props: Props) => {
  return (
    <div className="router-view">
      <Route
        path="/login"
        render={propsLocal => (
          <OakRoute {...propsLocal} {...props} component={OaLogin} />
        )}
      />
      <Route
        path="/:space/unauthorized"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Unauthorized}
            middleware={['isAuthenticated']}
          />
        )}
      />
      <Route
        path="/"
        exact
        render={propsLocal => (
          <OakRoute {...propsLocal} {...props} component={Landing} />
        )}
      />
      <Route
        path="/home"
        exact
        render={propsLocal => (
          <OakRoute {...propsLocal} {...props} component={Landing} />
        )}
      />
      <Route
        path="/tenant"
        exact
        render={propsLocal => (
          <OakRoute {...propsLocal} {...props} component={Tenant} />
        )}
      />
      <Route
        path="/:space/home"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Home}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/login/home"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Login}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/:space/login/oa"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={OneAuth}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/:space/project"
        exact
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={ListProject}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/project/view"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={ViewProject}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/project/create"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={CreateProject}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/endpoint"
        exact
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={ListEndpoint}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/endpoint/create"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={CreateEndpoint}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/endpoint/domain/view"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={ViewEndpointDomain}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/:space/endpoint/custom/view"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={ViewEndpointCustom}
            middleware={['authenticate']}
          />
        )}
      />
    </div>
  );
};

export default RouterView;
