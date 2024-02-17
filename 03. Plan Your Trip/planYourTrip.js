const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe("Tests for planYourTrip object", function() {
    
    describe("choosingDestination()", function() {
        it("should return a message for Ski Resort in Winter", function() {
            const result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
            assert.strictEqual(result, "Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return a message for Ski Resort in non-Winter season", function() {
            const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
            assert.strictEqual(result, "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

        it("should throw an error for invalid year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw(Error, "Invalid Year!");
        });

        it("should throw an error for invalid destination", function() {
            expect(() => planYourTrip.choosingDestination("Beach Resort", "Summer", 2024)).to.throw(Error, "This destination is not what you are looking for.");
        });

        it("should throw an error for undefined year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", undefined)).to.throw(Error, "Invalid Year!");
        });

        it("should throw an error for undefined destination", function() {
            expect(() => planYourTrip.choosingDestination(undefined, "Summer", 2024)).to.throw(Error, "This destination is not what you are looking for.");
        });

        it("should throw an error for undefined season", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", undefined, 2024)).to.throw(Error, "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
    });

    describe("exploreOptions()", function() {
        it("should remove an activity at the specified index", function() {
            const result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);
            assert.strictEqual(result, "Skiing, Winter Hiking");
        });

        it("should throw an error for invalid activities parameter", function() {
            expect(() => planYourTrip.exploreOptions("Skiing", 0)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for invalid activityIndex", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], undefined)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for out-of-bounds activityIndex", function() {
            expect(() => planYourTrip.exploreOptions(undefined, 1)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for undefined activities", function() {
            expect(() => planYourTrip.exploreOptions(undefined, 0)).to.throw(Error, "Invalid Information!");
        });
    });

    describe("estimateExpenses()", function() {
        it("should return a budget-friendly message", function() {
            const result = planYourTrip.estimateExpenses(100, 4);
            assert.strictEqual(result, "The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("should return a plan accordingly message", function() {
            const result = planYourTrip.estimateExpenses(300, 3);
            assert.strictEqual(result, "The estimated cost for the trip is $900.00, plan accordingly.");
        });

        it("should throw an error for invalid distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses("invalid", 4)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for zero or negative distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses(undefined, 4)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for zero or negative fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for undefined distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses(undefined, 4)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for undefined fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw(Error, "Invalid Information!");
        });
    });

});
