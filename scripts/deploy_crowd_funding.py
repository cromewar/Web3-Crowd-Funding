from brownie import (
    CrowdFundingV1,
    UpgradeableProxy,
    ProxyAdmin,
    config,
    network,
    Contract,
)

from scripts.helpful_scripts import get_account, encode_function_data


def main():
    account = get_account()
    print(f"Deploying to {network.show_active()}")

    funding = CrowdFundingV1.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get("verify", False),
    )

    proxy_admin = ProxyAdmin.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get("verify", False),
    )

    funding_encoded_initializer_function = encode_function_data()

    proxy = UpgradeableProxy.deploy(
        funding.address,
        proxy_admin.address,
        funding_encoded_initializer_function,
        {"from": account, "gas_limit": 1000000},
        publish_source=config["networks"][network.show_active()].get("verify", False),
    )
