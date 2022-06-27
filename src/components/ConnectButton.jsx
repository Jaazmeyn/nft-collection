// import React, { useState } from 'react'
import './ConnectButton.modules.scss'


function connectWallet () {
    // connect wallet provider of eos!!!
    window.ethereum.request({ method: "eth_requestAccounts" });
    
    // setOwner..
    // return account
}

function ConnectButton() {

    return (
        <div onClick={() => {
        // owenerConfig()
            connectWallet()
            // return owner;
        }} 
        className="connect-button">Connect to Account</div>
    )
}

export default ConnectButton
