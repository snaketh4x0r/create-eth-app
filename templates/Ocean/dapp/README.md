[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

# keeper-contracts

> 💧 Integration of SEAs, DID and OceanToken in Solidity
> [oceanprotocol.com](https://oceanprotocol.com)

| Dockerhub | TravisCI | Ascribe | Greenkeeper |
|-----------|----------|---------|-------------|
|[![Docker Build Status](https://img.shields.io/docker/build/oceanprotocol/keeper-contracts.svg)](https://hub.docker.com/r/oceanprotocol/keeper-contracts/)|[![Build Status](https://api.travis-ci.com/oceanprotocol/keeper-contracts.svg?branch=master)](https://travis-ci.com/oceanprotocol/keeper-contracts)|[![js ascribe](https://img.shields.io/badge/js-ascribe-39BA91.svg)](https://github.com/ascribe/javascript)|[![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/keeper-contracts.svg)](https://greenkeeper.io/)|

---

**🐲🦑 THERE BE DRAGONS AND SQUIDS. This is in alpha state and you can expect running into problems. If you run into them, please open up [a new issue](https://github.com/oceanprotocol/keeper-contracts/issues). 🦑🐲**

---


## Table of Contents

  - [Get Started](#get-started)
     - [Docker](#docker)
     - [Local development](#local-development)
  - [Testing](#testing)
     - [Code Linting](#code-linting)
  - [Networks](#networks)
     - [Testnets](#testnets)
        - [Duero Testnet](#duero-testnet)
        - [Nile Testnet](#nile-testnet)
        - [Kovan Testnet](#kovan-testnet)
     - [Mainnets](#mainnets)
        - [Ethereum Mainnet](#ethereum-mainnet)
        - [Pacific Mainnet](#pacific-mainnet)
        - [xDai](#xdai)
  - [Packages](#packages)
  - [Documentation](#documentation)
  - [Contributing](#contributing)
  - [Prior Art](#prior-art)
  - [License](#license)

---

## Get Started

For local development of `keeper-contracts` you can either use Docker, or setup the development environment on your machine.

### Docker

The simplest way to get started with is [barge](https://github.com/oceanprotocol/barge), a docker compose application to run Ocean Protocol.

### Local development

As a pre-requisite, you need:

- Node.js
- npm

Note: For MacOS, make sure to have `node@10` installed.

Clone the project and install all dependencies:

```bash
git clone git@github.com:oceanprotocol/keeper-contracts.git
cd keeper-contracts/

# install dependencies
npm i

# install RPC client globally
npm install -g ganache-cli
```

Compile the solidity contracts:

```bash
npm run compile
```

In a new terminal, launch an Ethereum RPC client, e.g. [ganache-cli](https://github.com/trufflesuite/ganache-cli):

```bash
ganache-cli
```

Switch back to your other terminal and deploy the contracts:

```bash
npm run deploy:development

# for redeployment run this instead
npm run clean
npm run compile
npm run deploy:development
```

Upgrade contracts [**optional**]:
```bash
npm run upgrade
```

## Testing

Run tests with `npm run test`, e.g.:

```bash
npm run test -- test/unit/agreements/AgreementStoreManager.Test.js
```

### Code Linting

Linting is setup for `JavaScript` with [ESLint](https://eslint.org) & Solidity with [Ethlint](https://github.com/duaraghav8/Ethlint).

Code style is enforced through the CI test process, builds will fail if there're any linting errors.

## Networks

### Testnets

#### Duero Testnet

The contract addresses deployed on Ocean's `Duero` Test Network:

| Contract                          | Version | Address                                      |
|-----------------------------------|---------|----------------------------------------------|
| AccessSecretStoreCondition        | v0.13.2 | `0x38e26f97AcCc0f6f0bA70b6304d89781449BAc11` |
| AgreementStoreManager             | v0.13.2 | `0x10f763D50600462F7253dc721dC895754b3Aee26` |
| ComputeExecutionCondition         | v0.13.2 | `0x69Cf2ae0148140E0d9Fa0AdC6bA7Fd10989Fe940` |
| ConditionStoreManager             | v0.13.2 | `0x10083113a47E6689D5C526D9e814bA42752BE09c` |
| DIDRegistry                       | v0.13.2 | `0xb1eA341724Fdcd53CA39d7DE3264bB89E6120BE4` |
| DIDRegistryLibrary                | v0.13.2 | `0xcb7D122Af3C861a87C9fBb17F1B52b7C501c1062` |
| Dispenser                         | v0.13.2 | `0xe76548A5b24AF890093A4C8423D542bcA1752CB8` |
| EpochLibrary                      | v0.13.2 | `0x2B4d53BE84964983932dD6167155052201892c0A` |
| EscrowAccessSecretStoreTemplate   | v0.12.7 | `0xBd7e5fFf4Eb8d67111227C9541080a74c634d643` |
| EscrowComputeExecutionTemplate    | v0.12.7 | `0xe509CE38a1A58195D0257c70DeD536253A4039Fc` |
| EscrowReward                      | v0.13.2 | `0xEb30f990F8F3a784F9eD3A594021D3764af00469` |
| HashLockCondition                 | v0.13.2 | `0x4939063413A7a9B79d5437de73ed6d9996F92629` |
| LockRewardCondition               | v0.13.2 | `0x53F89846832a793bF988B604b2489f74E6D22648` |
| OceanToken                        | v0.13.2 | `0xFEBfC7dA1cAf52E4207501ad6df6B19EcDA4614b` |
| SignCondition                     | v0.13.2 | `0x127c9A80A61b5BB6b97EE796CACDFbc201969447` |
| TemplateStoreManager              | v0.13.2 | `0x6d3d30BB9074c1e3013A8b99A2e22a3FF5966EA2` |
| ThresholdCondition                | v0.13.2 | `0xe940DBA354d444aA9Af0723A46a277ea6Ac36DE1` |
| WhitelistingCondition             | v0.13.2 | `0x453c7912d4e33B3348961810296FE55a6adE20B2` |



#### Nile Testnet

The contract addresses deployed on Ocean's `Nile` Test Network:

| Contract                          | Version | Address                                      |
|-----------------------------------|---------|----------------------------------------------|
| AccessSecretStoreCondition        | v0.13.2 | `0x45DE141F8Efc355F1451a102FB6225F1EDd2921d` |
| AgreementStoreManager             | v0.13.2 | `0x62f84700b1A0ea6Bfb505aDC3c0286B7944D247C` |
| ComputeExecutionCondition         | v0.13.2 | `0xc63c6DA8Cfa99927E48B5d7784758fef4e5e1D6d` |
| ConditionStoreManager             | v0.13.2 | `0x39b0AA775496C5ebf26f3B81C9ed1843f09eE466` |
| DIDRegistry                       | v0.13.2 | `0x4A0f7F763B1A7937aED21D63b2A78adc89c5Db23` |
| DIDRegistryLibrary                | v0.13.2 | `0x82281775C6AB73E85b7a7e0CEe62910729d1cF95` |
| Dispenser                         | v0.13.2 | `0x865396b7ddc58C693db7FCAD1168E3BD95Fe3368` |
| EpochLibrary                      | v0.13.2 | `0x787Cf4627F3F2bf5B8e9Da619aba59CB997A19B4` |
| EscrowAccessSecretStoreTemplate   | v0.12.7 | `0xfA16d26e9F4fffC6e40963B281a0bB08C31ed40C` |
| EscrowComputeExecutionTemplate    | v0.12.7 | `0x4dc980aA0786Dc3B5FC76BDb5C9c42cac796e68B` |
| EscrowReward                      | v0.13.2 | `0xeD4Ef53376C6f103d2d7029D7E702e082767C6ff` |
| HashLockCondition                 | v0.13.2 | `0xB5f2e45e8aD4a1339D542f2defd5095B98054590` |
| LockRewardCondition               | v0.13.2 | `0xE30FC30c678437e0e8F78C52dE9db8E2752781a0` |
| OceanToken                        | v0.13.2 | `0x9861Da395d7da984D5E8C712c2EDE44b41F777Ad` |
| SignCondition                     | v0.13.2 | `0x5a4301F8a7a8A13485621b9B4C82B1E66c112ee2` |
| TemplateStoreManager              | v0.13.2 | `0x9768c8ae44f1dc81cAA98F48792aA5730cAd2F73` |
| ThresholdCondition                | v0.13.2 | `0xf29a50080163Fb2938E2024f19681Ac2FB8745De` |
| WhitelistingCondition             | v0.13.2 | `0x9Db7fE5A18Ff4fb1746c290192EDE67a64EB4385` |


#### Kovan Testnet

----

**Deprecated**: The `kovan` network is deprecated and will be removed in the next version.

----

The contract addresses deployed on Kovan testnet:

| Contract                          | Version | Address                                      |
|-----------------------------------|---------|----------------------------------------------|
| AccessSecretStoreCondition        | v0.10.3 | `0x9Ee06Ac392FE11f1933a51B48D1d07dd97f1dec7` |
| AgreementStoreManager             | v0.10.3 | `0x412d4F57425b41FE027e06b9f37D569dcAE2eAa4` |
| ConditionStoreManager             | v0.10.3 | `0xA5f5BaB34DE3782A71D37d0B334217Ded341cd64` |
| DIDRegistry                       | v0.10.3 | `0x9254f7c8f1176C685871E7A8A99E11e96775F488` |
| DIDRegistryLibrary                | v0.10.3 | `0xf22aEF1421CCd4f0A0D0BB1f7fe03233384c69B4` |
| Dispenser                         | v0.10.3 | `0x5B92243133094210F504dF6B9D54fD70E7B281DC` |
| EpochLibrary                      | v0.10.3 | `0x44Ca6882823a2d7864376893A4BCF3eB377693e4` |
| EscrowAccessSecretStoreTemplate   | v0.10.3 | `0xe0Afe9a948f9Fa39524c8d29a98d75409018ABf0` |
| EscrowReward                      | v0.10.3 | `0xa182ff844c71803Bf767c3AB4180B3bfFADa6B2B` |
| HashLockCondition                 | v0.10.3 | `0x11ef2D50868c1f1063ba0141aCD53691A0293c25` |
| LockRewardCondition               | v0.10.3 | `0x2a2A2C5fF51C5f1c84547FC7a194c00F82763432` |
| OceanToken                        | v0.10.3 | `0xB57C4D626548eB8AC0B82b086721516493E2908d` |
| SignCondition                     | v0.10.3 | `0x7B8B2756de9Ab474ddbCc87047117a2A16419194` |
| TemplateStoreManager              | v0.10.3 | `0xD20307e2620Bb8a60991f43c52b64f981103A829` |


### Mainnets

### Pacific Mainnet

The contract addresses deployed on `Pacific` Mainnet:

| Contract                          | Version | Address                                      |
|-----------------------------------|---------|----------------------------------------------|
| AccessSecretStoreCondition        | v0.13.2 | `0x7FC6520Af3F0800d76A3e2FfE7b838c945ADBFE4` |
| AgreementStoreManager             | v0.13.2 | `0x44665ee68779eC83202702C091279661336F5F8a` |
| ComputeExecutionCondition         | v0.13.2 | `0xBbaCeaA102e62fEeE89eAF935aD757CD5aac844a` |
| ConditionStoreManager             | v0.13.2 | `0xbD1dEd7ef05c31F81C54e913a23Da69E77d3e0EE` |
| DIDRegistry                       | v0.13.2 | `0x1f0E059a50356D8617980F8fa21a53F723072712` |
| DIDRegistryLibrary                | v0.13.2 | `0x2eBD03c446e11EA4eC58eC092b3906a816828D2f` |
| EpochLibrary                      | v0.13.2 | `0xBCc5b375AB7ca0AB45b00F3dA24eC8b3b5aEe031` |
| EscrowAccessSecretStoreTemplate   | v0.12.7 | `0x9BF43606d833489fbD568ace13f535fC41130c28` |
| EscrowComputeExecutionTemplate    | v0.12.7 | `0x04D939Bbe37de1Aa0261F523EdB7654613dfB97F` |
| EscrowReward                      | v0.13.2 | `0x656Aa3D9b37A6eA770701ae2c612f760d9254A66` |
| HashLockCondition                 | v0.13.2 | `0x5Eef92d570996ED20Cb60fE41475f594299Ec21C` |
| LockRewardCondition               | v0.13.2 | `0x7bf64DaCc7929A1e5466f7d9E575128abf1875f8` |
| OceanToken                        | v0.13.2 | `0x012578f9381e876A9E2a9111Dfd436FF91A451ae` |
| SignCondition                     | v0.13.2 | `0xB74172078ABb029FaD809335d82241371b998708` |
| TemplateStoreManager              | v0.13.2 | `0xF2Cf3761c166c6D85d07299427821D18A4329cd1` |
| ThresholdCondition                | v0.13.2 | `0xeD2A0787885f4ef781E35c5808F3C786fc8C1817` |
| WhitelistingCondition             | v0.13.2 | `0x5b4c3B48062bDCa9DaA5441c5F5A9D557bFE3356` |


### Ethereum Mainnet

----

**Deprecated**: The `ethereum mainnet` network is deprecated and will be removed in the next version.

----

The contract addresses deployed on Ethereum Mainnet:

| Contract                          | Version | Address                                      |
|-----------------------------------|---------|----------------------------------------------|
| AccessSecretStoreCondition        | v0.10.3 | `0x57e299517B6E5637cE9da15E4372f42a63c7e099` |
| AgreementStoreManager             | v0.10.3 | `0x5E98B9EfABe192aB02a9B39D9B44A22C88A625BD` |
| ConditionStoreManager             | v0.10.3 | `0x031A0B2FE74086e5963CD5Ac27Bd1451A40Fe593` |
| DIDRegistry                       | v0.10.3 | `0xC4A1D6d4778C9A17D5e37797dA2FaB48FA9d01f6` |
| DIDRegistryLibrary                | v0.10.3 | `0xFb4231AF132A8E160292022eBd8ea4292104B1Da` |
| EpochLibrary                      | v0.10.3 | `0xb5096b69638689eE2dC7CA56Babaf7d8521a7Abb` |
| EscrowAccessSecretStoreTemplate   | v0.10.3 | `0xa713D8F4791512a599A98f5DcaCC6401D6c76e5f` |
| EscrowReward                      | v0.10.3 | `0xB950FE753871dc8b79284d76EA4A213db4697578` |
| HashLockCondition                 | v0.10.3 | `0x860761Dbbe9b8377A2933a1093B39167B907befF` |
| LockRewardCondition               | v0.10.3 | `0xD41161D8f2CE5Ec95465F4b2fBD00Cfea186204C` |
| SignCondition                     | v0.10.3 | `0xEE33DCDBE6aF6197dD01907cfc4296BFC0448B16` |
| TemplateStoreManager              | v0.10.3 | `0x04DD5364b12131ae870Ec54bd539b5Cb94B9DC36` |

### xDai

The contract addresses deployed on `xDai` Mainnet:

| Contract                          | Version | Address                                      |
|-----------------------------------|---------|----------------------------------------------|
| AccessSecretStoreCondition        | v0.13.2 | `0x2EadA723f7C631284B299E5BfB724B2153D4c1d7` |
| AgreementStoreManager             | v0.13.2 | `0x5E12966F910A819a84D359383F0B2777Af04B664` |
| ComputeExecutionCondition         | v0.13.2 | `0x0233d73aFf3030FE26a53F363217c84DF25638E9` |
| ConditionStoreManager             | v0.13.2 | `0xBe3419C1E4764BeF16A272A45865c1C1072Bf8AB` |
| DIDRegistry                       | v0.13.2 | `0x99ae43155D8Fa205b5CEE705aD8ab1a1A92B904E` |
| DIDRegistryLibrary                | v0.13.2 | `0x304AA20E6D04B18221D7a1d971ff4C245039486D` |
| EpochLibrary                      | v0.13.2 | `0xa1BC282eAc22092C0D9344aba38F65aDA6200242` |
| EscrowAccessSecretStoreTemplate   | v0.12.7 | `0xCD3a33379DBDc6Cb14C3bf8eAb594e5ae1317BB1` |
| EscrowComputeExecutionTemplate    | v0.12.7 | `0xbb3B88589902eFF97d3E6Af2757f83c66a9FE2Ac` |
| EscrowReward                      | v0.13.2 | `0x9C71Ac20Ef2178bD6f9d927a601985f9983b1E8E` |
| HashLockCondition                 | v0.13.2 | `0x6a9C322ADE3c58b6D83DA1cB4A687D834872BFc8` |
| LockRewardCondition               | v0.13.2 | `0x3857986E111d78E1bD4017Efe620e05e3cb9376b` |
| OceanToken                        | v0.13.2 | `0x83180c00B360B17b7d2158bfeFD32D17F01695b3` |
| SignCondition                     | v0.13.2 | `0x547A4BA7Bec2AE45393D07AF9E0F53aEA50aD968` |
| TemplateStoreManager              | v0.13.2 | `0xD2f1Ccb9E51659f1bAC7EF3e6cD713b536C1BDa4` |
| ThresholdCondition                | v0.13.2 | `0xeED6Bf968e5808f6Ba0d284475f437aa93997aC4` |
| WhitelistingCondition             | v0.13.2 | `0xA9c8Ae2784BF0FdB56004BE0D46dE1BeE15Fe421` |

## Packages

To facilitate the integration of the Ocean Protocol's `keeper-contracts` there are `Python`, `JavaScript` and `Java` packages ready to be integrated. Those libraries include the Smart Contract ABI's.
Using these packages helps to avoid compiling the Smart Contracts and copying the ABI's manually to your project. In that way the integration is cleaner and easier.
The packages provided currently are:

* JavaScript `npm` package - As part of the [@oceanprotocol npm organization](https://www.npmjs.com/settings/oceanprotocol/packages), the [npm keeper-contracts package](https://www.npmjs.com/package/@oceanprotocol/keeper-contracts) provides the ABI's to be imported from your `JavaScript` code.
* Python `Pypi` package - The [Pypi keeper-contracts package](https://pypi.org/project/keeper-contracts/) provides the same ABI's to be used from `Python`.
* Java `Maven` package - The [Maven keeper-contracts package](https://search.maven.org/artifact/com.oceanprotocol/keeper-contracts) provides the same ABI's to be used from `Java`.

The packages contains all the content from the `doc/` and `artifacts/` folders.

In `JavaScript` they can be used like this:

Install the `keeper-contracts` `npm` package.

```bash
npm install @oceanprotocol/keeper-contracts
```

Load the ABI of the `OceanToken` contract on the `nile` network:

```javascript
const OceanToken = require('@oceanprotocol/keeper-contracts/artifacts/OceanToken.nile.json')
```

The structure of the `artifacts` is:

```json
{
  "abi": "...",
  "bytecode": "0x60806040523...",
  "address": "0x45DE141F8Efc355F1451a102FB6225F1EDd2921d",
  "version": "v0.9.1"
}
```

## Documentation

* [Contracts Documentation](doc/contracts/README.md)
* [Release process](doc/RELEASE_PROCESS.md)
* [Packaging of libraries](doc/PACKAGING.md)
* [Upgrading of contracts](doc/UPGRADES.md)
* [Template lifecycle](doc/TEMPLATE_LIFE_CYCLE.md)

## Contributing

See the page titled "[Ways to Contribute](https://docs.oceanprotocol.com/concepts/contributing/)" in the Ocean Protocol documentation.

## Prior Art

This project builds on top of the work done in open source projects:
- [zeppelinos/zos](https://github.com/zeppelinos/zos)
- [OpenZeppelin/openzeppelin-eth](https://github.com/OpenZeppelin/openzeppelin-eth)

## License

```
Copyright 2018 Ocean Protocol Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

