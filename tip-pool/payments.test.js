describe("Payments test", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 5;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('5');
      expect(allPayments['payment1'].tipPercent).toEqual(5);
    });
  
    it('should not add to allPayments with empty billAmtInput on submitPaymentInfo()', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a payment object on createCurPayment()', function () {
        let payment = {
          billAmt: '100',
          tipAmt: '5',
          tipPercent: 5,
        }
    
        expect(createCurPayment()).toEqual(payment);
      });

      it('should not create a payment object with empty billAmtInput on createCurPayment()', function () {
        billAmtInput.value = '';
        let currentPmnt = createCurPayment();
    
        expect(currentPmnt).toEqual(undefined);
      });

    it('should append to paymentTable on appendPaymentTable()', function () {
      let currentPmnt = createCurPayment();
      allPayments['payment1'] = currentPmnt;
      appendPaymentTable(currentPmnt);
  
      let tdList = document.querySelectorAll('#paymentTable tbody tr td');
      expect(tdList.length).toEqual(4);
      expect(tdList[0].innerText).toEqual('$100');
      expect(tdList[1].innerText).toEqual('$5');
      expect(tdList[2].innerText).toEqual('5%');
      
    });
  
    
  
    
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });