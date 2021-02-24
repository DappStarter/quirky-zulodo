require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rule stick mistake good kangaroo army gas'; 
let testAccounts = [
"0x9103fcf761f5b549961883e1253c1cfc697bd66625682535eb7e048278f5f3a5",
"0x89d631b5cea10017461533893be3e4907e5109cb8c65c52c81c44bdab05d3588",
"0xbbc0f2722e399460b5c2a7d4b0396d63809ff42cf7357e08c8c9f86ca9296cc3",
"0x499962df13eeabfcead311724967036b9c4ca80031ec6834cc1fd41c2ac7ffc4",
"0x16e111056a06b18159ca3acea54981d968b487327f1f32e8756d9b20a2430b17",
"0x54cc14746eae1c8960bf4e16f163872fda2cffa671e15501ca2ea12aea3045fe",
"0x5d318d7416591c4bc577b4203c18dfa2c07125eef345b133a5d0a7da32a53c04",
"0x53ce6d2457d994d9ccab0e31ff6b1a0aaa27ac8aec3ba106151ea905ce88dc71",
"0xc7ab5019f0fbc4e9fe3cd8aed35c39bc1c1b7a7fff569e238d15e44e418125a4",
"0xa26cb61ade08db1b0ee613b1d03a9a590c544a332b27e3e37917572cfca77e5f"
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

