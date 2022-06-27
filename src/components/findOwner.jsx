// import { useState } from "react";
// import Web3 from "web3";
// import web3 from "../web3";


// 
export default function FindOwner(owner){

    // owner undef why??
    console.log(owner, 'owner')
    // window.ethereum.request({ method: "eth_requestAccounts" });
    // const web3 = new Web3(window.ethereum);
    
    // get collections of eosio account
    // let owner = 'wombatmaster';
    // let urlByOwner = `https://eos.api.atomicassets.io/atomicassets/v1/accounts/`+ {owner} + `/womplayextra`;
    // let urlByOwner = 'https://eos.api.atomicassets.io/atomicassets/v1/accounts/wombatmaster/womplayextra';

    // fetch('https://eos.api.atomicassets.io/atomicassets/v1/accounts/wombatmaster/womplayextra', 'GET')
    //     .then(response => {
                
    //         if (!response.ok){
    //             throw Error('ERROR')
    //         };
    //     return response.json();

    //     }).then(owner => {
    //         console.log(owner, 'account')
    //         return owner;
    //     }).catch(error => {
    //         console.log('error', error);
    // })// catch

    // return 'wombatmaster';

    return owner;

}