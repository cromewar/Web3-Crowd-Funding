from brownie import (
    CrowdFundingV1,
    CrowdFundingV2,
    UpgradeableProxy,
    ProxyAdmin,
    config,
    network,
    Contract,
)

from scripts.helpful_scripts import get_account, encode_function_data, upgrade


def main():
    account = get_account()
    fundingv2 = CrowdFundingV2.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get("verify", False),
    )

    admin = ProxyAdmin[-1]
    proxy = UpgradeableProxy[-1]

    upgrade_tx = upgrade(account, proxy, fundingv2, proxy_admin_contract=admin)
    upgrade_tx.wait(1)
