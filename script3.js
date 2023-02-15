// Chain of responsibility

// to help solve common practical issues of having a request from a client
//     and needing this request to pass through multiple functions or logic
//     to get the result.

// Buy? =>
// Logged in?
// Address?
// Calculate taxes?
// Shipping?
// Process payment

// these events occur in a linear way:
// (calls one function or handler after another until the chain is completed.)
// (if there are errors, the abstract handler can provide error information to
//     the backend ...)

// Abstract Handler =>
// Login handler
// Check address handler
// Taxes handler
// Shipping handler
// Payment processing handler

// the most simple example possible:
var Request = function (amount) {
  this.amount = amount;
  console.log("Requested: $" + amount + "\n");
};

Request.prototype = {
  get: function (bill) {
    var count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  },
};
function run() {
  var request = new Request(378);

  request.get(100).get(50).get(20).get(10).get(5).get(1);
}
