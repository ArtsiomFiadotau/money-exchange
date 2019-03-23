module.exports = function makeExchange(currency) {
    var obj = {
         H: 50,
         Q: 25,
         D: 10,
         N: 5,
         P: 1    
      }
     
    if (currency > 10000) {
      var errobj = {
          error: "You are rich, my friend! We don\'t have so much coins for exchange"
      }
      return (errobj);
    }
      let resultobj = {};
      for (var prop in obj) {
        if (currency <= 0) break;
        let c = obj[prop];
        obj[prop] = Math.floor(currency/c);
        currency = currency-c*obj[prop];
        if (obj[prop] != 0) {
          resultobj[prop] = obj[prop];
         }
      }
      return (resultobj); 
    }