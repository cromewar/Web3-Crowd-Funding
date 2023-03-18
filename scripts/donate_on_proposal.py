from brownie import (
    UpgradeableProxy,
    CrowdFundingV1,
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

    ID = 1
    AMOUNT = Web3.toWei(0.1, "ether")

    tx = funding_contract.donateToCampaign(ID, {"from": account, "value": AMOUNT})

    tx.wait(1)

    print(tx)
