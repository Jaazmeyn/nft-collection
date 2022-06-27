import Web3 from "web3";

// eosio not etherium
// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.web3.currentProvider);
const web3 = new Web3(window.web3.currentProvider);

export default web3;