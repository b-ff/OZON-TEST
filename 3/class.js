var singleton = (function() {

  // Приватные свойства
  var privateProp1 = 'secret1';
  var privateProp2 = 'secret2';
  
  // Приватные методы
  var privateMethod1 = function() {
    return 'My first secret is: ' + privateProp1 + ' and the second one is: ' + privateProp2;
  }
  var privateMethod2 = function(s1, s2) {
    privateProp1 = s1;
    privateProp2 = s2;
  }

  return {
    prop1: 'foo',
    prop2: 'bar',
    method1: function() { 
      alert('Hi! This is singleton method1'); 
      },
    method2: function() { 
      alert(privateMethod1());
      privateMethod2(this.prop1, this.prop2);
      },
  }
})();