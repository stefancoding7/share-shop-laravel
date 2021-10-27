import React, { useState } from 'react';

const Settings = (props) => {

    const [name, setName] = useState('')

    const logout = () => {
        props.context.actions.logOut();
    };

    const onChange = (e) => {
        const { name } = e.target;
        setName(name);
        console.log(name)
      }

    return(
        <>
            <div className="settings-container m-2">
            <label for="inputPassword5" class="form-label">Name</label>
                <input 
                value={name}
                onChange={onChange}
                type="text" id="inputPassword5" className="form-control" 
                
                />
                <br />
                <button onClick={logout} className="btn btn-secondary">Logout</button>    
            </div>
            
        </>
    )
}

export default Settings;