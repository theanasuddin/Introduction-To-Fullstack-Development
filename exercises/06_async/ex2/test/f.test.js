const { expect, assert } = require("chai");
const f = require("../f_skeleton");

describe("notSyncPro", () => {
  it("does not immediately return a number", async () => {
    const result = f.notSyncPro(10);
    expect(typeof result).to.equal("object");
  });
  it("returns a number after await", async () => {
    const result = await f.notSyncPro(10);
    expect(typeof result).to.equal("number");
  });
  it("returns a correct number after await", async () => {
    const number = Math.random() * Math.floor(5000);
    const result = await f.notSyncPro(number);
    expect(result).to.equal(number);
  });
  it("throws when a string is passed", async () => {
    try {
      await f.notSyncPro("Hello world!");
      assert.fail("Should have thrown!");
    } catch (e) {
      expect(e).to.equal("Parameter is not a number!");
    }
  });
});

describe("proLog", () => {
  it("does not immediately return a number", async () => {
    const result = f.proLog(10);
    expect(typeof result).to.equal("object");
  });
  it("returns a number after await", async () => {
    const result = await f.proLog(10);
    expect(typeof result).to.equal("number");
  });
  it("returns correct result", async () => {
    const number = Math.random() * Math.floor(5000);
    const expected = Math.log(number);
    const result = await f.proLog(number);
    expect(result).to.equal(expected);
  });
});

describe("checkIfFunction", () => {
  it("returns true when function is passed as a parameter", async () => {
    const result = await f.checkIfFunction(() => {});
    expect(result).to.be.true;
  });
  it("rejects when string is passed as a parameter", async () => {
    try {
      await f.checkIfFunction("Hello world!");
      assert.fail("Should have rejected!");
    } catch (e) {
      expect(e).to.equal("Not a function!");
    }
  });
  it("rejects when integer is passed as a parameter", async () => {
    try {
      await f.checkIfFunction(12345);
      assert.fail("Should have rejected!");
    } catch (e) {
      expect(e).to.equal("Not a function!");
    }
  });
  it("rejects when null is passed as a parameter", async () => {
    try {
      await f.checkIfFunction(null);
      assert.fail("Should have rejected!");
    } catch (e) {
      expect(e).to.equal("Not a function!");
    }
  });
});

describe("resPro", () => {
  it("rejects if time > 2000 is passed as a parameter", async () => {
    const value = 2001;
    try {
      await f.resPro(value);
      assert.fail("Should have rejected!");
    } catch (e) {
      expect(e).to.equal("Too long time!");
    }
  });
  it("rejects if string is passed", async () => {
    try {
      await f.resPro("Not a number!");
      assert.fail("Should have rejected!");
    } catch (e) {
      expect(e).to.equal("Not a number!");
    }
  });
  it("does not resolve immediately", async () => {
    const result = f.resPro(1500);
    expect(typeof result).to.equal("object");
  });
  it("resolves after some time with a valid parameter", async () => {
    expect(async () => await f.resPro(1500)).to.not.throw();
  });
});
