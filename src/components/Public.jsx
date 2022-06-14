import React from 'react'
// import { useState } from 'react';
import ConnectButton from './ConnectButton'

function Public(){
    // const[Connect, setConnect] = useState(false);

    return (
        <>
        <div className="public">
            <div className="heading">NFTs</div>
            <ConnectButton /> 
            <div className="heading-2">Login to see your own cool collection!</div>
            <div className="heading">Hot NFTs</div>


        </div>

            {/* <h1 className='connect' onClick={ Connect===false ? setConnect(true) : setConnect(false)}>Log in</h1> */}
        </>
    )
}

export default Public
