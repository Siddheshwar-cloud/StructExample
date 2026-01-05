// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract wallet {
    struct PaymentReceivedStruct {
        uint256 amount;
        address from;
    }

    PaymentReceivedStruct public payment;

    function payContract() public payable {
        payment = PaymentReceivedStruct(msg.value, msg.sender);
    }
}
