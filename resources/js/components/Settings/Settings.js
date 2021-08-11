import React from 'react';

const Settings = (props) => {

    const logout = () => {
        props.context.actions.logOut();
    };

    return(
        <>
            <button onClick={logout} className="btn btn-secondary">Logout</button> 
        </>
    )
}

export default Settings;