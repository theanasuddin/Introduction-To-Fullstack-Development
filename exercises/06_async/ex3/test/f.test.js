const expect = require("chai").expect;

const f = require("../asyncFunc");

describe("thenable", () => {
  it("resolves with correct value", async () => {
    // TODO: Implement this test. See rejectable below for an example
    // See: https://www.testim.io/blog/testing-promises-using-mocha/
    // This test can be implemented with either Promises or with async / await, as shown on that page.
    // Use expect() and to.equal()
    // to make sure that the resolved value is 👍
    const result = await Promise.resolve(f.thenable);
    expect(result).to.equal("👍");
  });
});

describe("rejectable", () => {
  it("rejects with correct value", (done) => {
    Promise.reject(f.rejectable)
      .catch((err) => err)
      .catch((err) => {
        expect(err).to.equal("👎");
        done();
      });
  });
});