// test/Box.test.js
// 加载依赖
const { expect } = require('chai');
 
// Load compiled artifacts
const Box = artifacts.require('Box');
 
// Start test block
contract('Box', function () {
  beforeEach(async function () {
    // 为每个测试部署一个新的Box合约
    this.box = await Box.new();
  });
 
  // 测试用
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.box.store(42);
 
    // 测试是否返回了同一个设置的值
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.box.retrieve()).toString()).to.equal('42');
  });
});
