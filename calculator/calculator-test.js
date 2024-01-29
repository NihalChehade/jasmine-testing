describe("tests for calculatingMonthlyPayments function", ()=>{
  it('should calculate the monthly rate correctly', function () {
    // ...
    const inputs = {
      amount: 100000,
      years: 5,
      rate:2.99
    };
    expect(calculateMonthlyPayment(inputs)).toEqual('1796.42');
  });
  it('should calculate the monthly rate correctly', function () {
    // ...
    const inputs = {
      amount: 50000,
      years: 3,
      rate:3.6
    };
    expect(calculateMonthlyPayment(inputs)).toEqual('1467.32');
  });
  it("should return a result with 2 decimal places", function() {
    // ..
    const inputs = {
      amount: 100000,
      years: 5,
      rate:2.8
    };
    expect(calculateMonthlyPayment(inputs)).toEqual('1788.00');
  });
  it("should return a string", function() {
    // ..
    const inputs = {
      amount: 100000,
      years: 5,
      rate:2.8
    };
    expect(calculateMonthlyPayment(inputs)).toBeInstanceOf(String);
  });
});






/// etc
