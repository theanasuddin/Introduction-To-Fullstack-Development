/**
 * TODO: Make a *thenable*, which is an object that has a method called 'then' and simulates Promise's resolve functionality. 
 * This thenable must behave like a promise that resolves with onFulfilled()
 * and the value `👍` after timemout of 10ms.
 * See *rejectable* below for reference.
 */
const thenable = {
  then: function (onFulfilled) {
    setTimeout(() => onFulfilled("👍"), 10);
  },
};

/**
 * A rejectable object, similar to thenable above.
 * Instead of only "onFulfilled" parameter, 
 * rejectable also needs the "onRejected"
 * parameter that here returns "👎"
 */
const rejectable = {
  then: function(onFulfilled, onRejected) {
    onRejected("👎");
  },
};

//TODO: verify that all functions exported below are available for tests (they should be)
exports.thenable = thenable;
exports.rejectable = rejectable;