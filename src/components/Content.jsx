import React, { useState, useEffect } from 'react'
import Nfts from './Nfts'
import Public from './Public';
// import FindOwner from './findOwner'
import web3 from "../web3";

function Content() {

    const [owner, setOwner] = useState('');

    // web3.eth.getAccounts(console.log);
    // nur wenn walletadress erkannt wurde!!!!!!!
    //!!!!
    function connectedAccount(){
        web3.eth.getAccounts()
        .then( fetchedAccounts => {
            // check if connected to any account
            if(fetchedAccounts.length === 0){
                // setOwner('');
                setOwner('')
            }
            if(fetchedAccounts.length >= 1){
                //get account name out of the public key
                // setOwner(fetchedAccounts);


                // setOwner('wombatmaster')
                // setOwner('womplayextra')
                // setOwner('wombatpromo1')
                setOwner('saschaahcsas')
                
                // console.log(owner, fetchedAccounts, 'this is the owner, now we can render page based on his collection')
            }
        })        
    }

    useEffect(() => {
        // check all the time if there is a walletadress
        connectedAccount();
        // abhängig von connected or not
        // render view  RenderView diffrently
    },[RenderView]);


   function RenderView(){

        if(owner.length >= 1){

            return (
                <Nfts owner={owner}/>
            )
        }

        if(owner.length === 0 || owner === ""){
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

