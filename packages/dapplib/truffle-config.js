require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note misery common gesture help frame gauge'; 
let testAccounts = [
"0x296ced625aa72f1c161d589dcde927bfd38dddc4a4a45b35ba02fb5737f18832",
"0xafaf09e5f5c29e3f4ca3fcc568c2ac4cf3313c58c45587b0ea3e09606aa2edd5",
"0x1c56e53f46f221b1cb9de38eb29c88c629549549fb76b556b214cb1e02727f2b",
"0x841dbcae67be202af1509e3d7c50284cae024cacc1967f5bc05d2c3eb00fcab0",
"0xba9250f472e0bb4b4264c90889cd357ccbc4ccee068e75949d4f2abd09536727",
"0x4f3b001930a6bd971a039da6e0e02b4ee8cdba7b43734af22bd69ca4960672eb",
"0x55f0323ccea0ad3888f2b9c3e1fc7b8d96189f2699c1741f049116d74e37cafc",
"0x42c9ee8e026afcc161a10213f064c5028f31ab4259a1c0a9543825ddcf020a09",
"0x559a68ca810f42e51a33bf12a978fe207da622a6f09e2a9d64d96c5a29ac8d93",
"0xc137648b42626087f65199ec9817f47d2578b1f92bb54ad533f7971f18d6322f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
