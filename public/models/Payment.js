// Class + Interface
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // since in Interfaces, format() is defined, so below format function must exists.
    Payment.prototype.format = function () {
        return this.recipient + " is owed Nrs." + this.amount + " for " + this.details;
    };
    return Payment;
}());
export { Payment };
