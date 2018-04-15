// Higher Order Component 
//A component (HOC) that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p> You are not logged in </p> }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="Rain" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Rain" />, document.getElementById("app"));

// { !props.isAuthenticated && <p> You are not logged in </p>}
// { props.isAuthenticated && <WrappedComponent {...props} /> }