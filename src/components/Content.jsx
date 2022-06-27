import React, { useState } from 'react'
import Nfts from './Nfts'
import Public from './Public';
import './Input.scss';

// import FindOwner from './findOwner'
// import web3 from "../web3";
// import Input from './input';
// import Input from './Input';

function Content() {

    const [owner, setOwner] = useState('');

    // web3.eth.getAccounts(console.log);
    // nur wenn walletadress erkannt wurde!!!!!!!
    //!!!!
    // function connectedAccount(){
    //     web3.eth.getAccounts()
    //     .then( fetchedAccounts => {
    //         // check if connected to any account
    //         if(fetchedAccounts.length === 0){
    //             // setOwner('');
    //             setOwner('')
    //         }
    //         if(fetchedAccounts.length >= 1){
    //             //get account name out of the public key
    //             // setOwner(fetchedAccounts);


    //             // setOwner('wombatmaster')
    //             // setOwner('womplayextra')
    //             // setOwner('wombatpromo1')
    //             setOwner('saschaahcsas')
                
    //             // console.log(owner, fetchedAccounts, 'this is the owner, now we can render page based on his collection')
    //         }
    //     })        
    // }

    // useEffect(() => {
    //     // check all the time if there is a walletadress
    //     // connectedAccount();
    //     setOwner()
    //     // abhängig von connected or not
    //     // render view  RenderView diffrently
    // },[RenderView]);

    function handleInputChange(e){
        setOwner(e.target.value)
    }

    const RenderView = () => {
       return owner.length >= 1 ? <Nfts owner={owner}/> : <Public />
    }

    return (
        <div className="content">
            {/* based on input renderView */}
            <input className="input" value={owner} onChange={e => handleInputChange(e)}/>
            {/* <button onClick={() => handleInputChange}>login</button> */}
            <RenderView />
        </div>
    );
        
}

export default Content

