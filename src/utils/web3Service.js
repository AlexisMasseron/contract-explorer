import Web3 from "web3";

const endpoint = process.env.REACT_APP_MAINET_ENDPOINT;

export function setWeb3() {
    return new Promise((resolve, reject) => {
        const web3 = new Web3(
            Web3.givenProvider ||
                new Web3.providers.WebsocketProvider(endpoint),
            null,
            {}
        );
        resolve(web3);
    });
}

export function logNetwork(netId) {
    switch (netId) {
        case 1:
            return "main net";
        case 3:
            return "Ropsten";
        case 4:
            return "Rinkeby";
        case 5:
            return "Goerli";
        case 42:
            return "Kovan";
        default:
            return "Ethereum network";
    }
}
