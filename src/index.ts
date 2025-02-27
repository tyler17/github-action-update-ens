import * as core from '@actions/core';
//import ethers from 'ethers';
import {
  DefenderRelayProvider,
  //DefenderRelaySigner
} from 'defender-relay-client/lib/ethers';
// @ts-ignore
import ENS, { getEnsAddress } from '@ensdomains/ensjs';

async function run(): Promise<void> {
  try {
    const NAME = core.getInput('name');
    const KEY = core.getInput('key');
    const VALUE = core.getInput('value');
    const DEFENDER_API_KEY = core.getInput('defenderApiKey');
    const DEFENDER_API_SECRET = core.getInput('defenderApiSecret');

    const credentials = { apiKey: DEFENDER_API_KEY, apiSecret: DEFENDER_API_SECRET };
    const provider = new DefenderRelayProvider(credentials);
    //const signer = new DefenderRelaySigner(credentials, provider, { speed: 'fast' });
    core.setOutput('provider', provider);
    // const ens = new ENS({ provider, ensAddress: getEnsAddress('5') }); //5 for goerli
    // core.debug('ens');
    // core.debug(ens);
    // const text = await ens.name(NAME).getText('ipfs');
    // core.setOutput('text', text);
    // core.debug('text');
    // core.debug(text);
    // const tx = await ens.name(NAME).setText(NAME, KEY, VALUE);
    // core.debug('tx');
    // core.debug(tx);

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
