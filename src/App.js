import React from 'react';
import CreateAccount from './CreateAccount';
import Blogs from './Blogs';

function App() {

    const hasAccessToken = localStorage.getItem("accessToken") !== null;

    if (hasAccessToken) {
        return (
            <Blogs />
        );
    } else {
        return (
            <CreateAccount />
        );
    }
}

export default App
