from brownie import (
    UpgradeableProxy,
    ProxyAdmin,
    CrowdFundingV1,
    accounts,
    config,
    network,
    Contract,
)

from web3 import Web3
from scripts.helpful_scripts import get_account, encode_function_data


def main():
    account = get_account()
    proxy = UpgradeableProxy[-1]

    funding_contract = Contract.from_abi(
        "CrowdFundingV1", proxy.address, CrowdFundingV1.abi
    )

    TITLE = "Shadow Fundation"
    DESCRIPTION = "third Project for the crowdFunding fundation"
    CATEGORY = "NFT"
    TARGET = Web3.toWei(3, "ether")
    DEADLINE = 1679167200
    IMAGE = "https://ipfs.moralis.io:2053/ipfs/QmNr37nZ8LkWe5jJdMu7FZHKpErRd7wLCGSmiub1esWWfJ/image/shadow.jpg"

    tx = funding_contract.createCampaign(
        account.address,
        TITLE,
        DESCRIPTION,
        CATEGORY,
        TARGET,
        DEADLINE,
        IMAGE,
        {"from": account},
    )

    tx.wait(1)

    print(tx)
