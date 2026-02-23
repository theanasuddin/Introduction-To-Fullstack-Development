// TODO: Install testing packages with npm install

/**
 * TODO: implement an *async* function 'notSyncPro' that returns the value of a parameter inside a Promise
 * @param {number} value, must be a number, isNaN() is useful here
 * @throws an error, if the parameter 'value' is not a number. The thrown error message must
 * be 'Parameter is not a number!'
 * @returns a new Promise, which resolves to the parameter value
 */
const notSyncPro = async (value) => {
  if (isNaN(value)) {
    throw "Parameter is not a number!";
  }
  return value;
};

/**
 * TODO: Implement an async function 'proLog' that calls the previously made async function 'notSyncPro'.
 * With then() function g waits for the result of notSyncPro and returns the natural logarithm (Math.log()) of notSyncPro's value.
 * Handle exceptions gracefully by returning the thrown error message with catch().
 * @param {number} value
 */
const proLog = async (value) => {
  return notSyncPro(value)
    .then((result) => Math.log(result))
    .catch((err) => err);
};

/**
 * TODO: Implement an async function 'checkIfFunction'.
 * The function checks the type of a parameter. typeof is useful here.
 * However, since we are now practicing
 * Promises, the value is returned as a "promisified" value
 * @param {*} param the value is checked to be a function
 * @returns resolved Promise with value true if parameter is a function or 
 * a rejected Promise with message "Not a function!" otherwise
 */
const checkIfFunction = async (param) => {
  if (typeof param === "function") {
    return true;
  } else {
    return Promise.reject("Not a function!");
  }
};

/**
 * TODO: Implement a function 'resPro' that returns a resolved Promise after a given time.
 * If time > 2000 milliseconds, the Promise must be rejected with message "Too long time!".
 * If time is not a number the Promise must be rejected with message "Not a number!".
 * @param {number} time
 * @returns {an empty Promise after a given time}, if time is acceptable
 */
const resPro = (time) => {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject("Not a number!");
    } else if (time > 2000) {
      reject("Too long time!");
    } else {
      setTimeout(() => resolve(), time);
    }
  });
};

//TODO: verify that all functions exported below are available for tests (they should be)
exports.notSyncPro = notSyncPro;
exports.proLog = proLog;
exports.checkIfFunction = checkIfFunction;
exports.resPro = resPro;


// TODO: Run the tests with npm test