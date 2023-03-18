from brownie import (
    BoxV1,
    BoxV2,
    UpgradeableProxy,
    ProxyAdmin,
    config,
    network,
    Contract,
)
from scripts.helpful_scripts import get_account, encode_function_data, upgrade


def main():
    account = get_account()
    print(f"Deploying to {network.show_active()}")
    box = BoxV1.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get("verify"),
    )

    proxy_admin = ProxyAdmin.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get("verify"),
    )
    box_encoded_initializer_function = encode_function_data()

    proxy = UpgradeableProxy.deploy(
        box.address,
        proxy_admin.address,
        box_encoded_initializer_function,
        {"from": account, "gas_limit": 1000000},
        publish_source=config["networks"][network.show_active()].get("verify", False),
    )

    print(f"Proxy deployed at {proxy.address}, upgrade to V2 now available")

    proxy_box = Contract.from_abi("BoxV1", proxy.address, BoxV1.abi)
    print(f"Proxy box value: {proxy_box.getValue()}")

    box_v2 = BoxV2.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get("verify", False),
    )

    upgrade_tx = upgrade(account, proxy, box_v2, proxy_admin_contract=proxy_admin)
    upgrade_tx.wait(1)
    print(f"Proxy upgraded to V2")

    proxy_box_v2 = Contract.from_abi("BoxV2", proxy.address, BoxV2.abi)
    print(f"Proxy box value: {proxy_box_v2.getValue()}")

    tx = proxy_box_v2.setValue(42, {"from": account})
    tx.wait(1)

    print(f"Proxy box value: {proxy_box_v2.getValue()}")
