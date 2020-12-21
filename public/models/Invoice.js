// Class + Interface
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // since in Interfaces, format() is defined, so below format function must exists.
    Invoice.prototype.format = function () {
        return this.client + " owes Nrs." + this.amount + " for " + this.details;
    };
    return Invoice;
}());
export { Invoice };
