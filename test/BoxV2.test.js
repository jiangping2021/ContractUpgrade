// test/BoxV2.test.js
// Load dependencies
const { expect } = require('chai');
 
// Load compiled artifacts
const BoxV2 = artifacts.require('BoxV2');
 
// Start test block
contract('BoxV2', function () {
  beforeEach(async function () {
    // Deploy a new BoxV2 contract for each test
    this.boxV2 = await BoxV2.new();
  });
 
  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.boxV2.store(42);
 
    // 测试是否返回了同一个设置的值
    // 注意需要使用字符串去对比256位的整数
    expect((await this.boxV2.retrieve()).toString()).to.equal('42');
  });
 
  // Test case
  it('retrieve returns a value previously incremented', async function () {
    // Increment
    await this.boxV2.increment();
 
     // 测试是否返回了同一个设置的值
    // 注意需要使用字符串去对比256位的整数
    expect((await this.boxV2.retrieve()).toString()).to.equal('1');
  });
});
