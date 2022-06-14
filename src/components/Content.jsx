import React from 'react'
import Nfts from './Nfts'
import Public from './Public';
import FindOwner from './findOwner'
import ConnectButton from './ConnectButton';
let owner = FindOwner();

function Content() {
    console.log(owner); // web3 after connected to account with metamask

    function RenderView(){
        if(owner.length > 0){
            return (
                <Nfts />
            )
        }

        if(owner.length === 0){
            // console.log(owner.length <= 0)
            return (
                <Public />
            )
        }
    }

    return (
        <div className="content">
            <RenderView />
        </div>);
}

export default Content