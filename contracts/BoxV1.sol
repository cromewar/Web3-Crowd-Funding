//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV1 {
    uint256 private value;

    function getValue() public view returns (uint256) {
        return value;
    }
}
