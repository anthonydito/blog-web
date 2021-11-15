import React from "react";

function CreateAccount() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        const signUpData = {
            username: username,
            password: password,
        };
        fetch("http://localhost:8080/sign-up", {
            method: "POST",
            body: JSON.stringify(signUpData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((data) => data.json())
        .then((responsePayload) => {
            localStorage.setItem("accessToken", responsePayload.accessToken);
        })
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
