// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

//实现一个新的升级版本 
contract BoxV2 {
    uint256 private value;
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
 
    //在合约里存储一个新值
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }
    
    //读取最后存储的值
    function retrieve() public view returns (uint256) {
        return value;
    }
    
    //当前存储的值增加 1
    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}
