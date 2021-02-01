import React from "react";

function CreateAccount() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        alert("will submit with " + username + " and " + password);
    };

    const onUsernameChanged = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChanged = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h1>Create Account</h1>
            <p>Create account using the form below</p>
            <form onSubmit={onFormSubmit}>
                <div>
                    <input 
                        value={username} 
                        onChange={onUsernameChanged}
                        type="text" 
                        placeholder="username" />
                </div>
                <div>
                    <input 
                        value={password} 
                        onChange={onPasswordChanged}
                        type="password" 
                        placeholder="password" />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount;
