var myModule = (function() {
  // 6.
  var CartItems = 0;
  var totalItems = 0;
  var addPrice = function(img1, index) {
    if (img1 == "clear") {
      CartItems = 0;
      document.getElementById("CartItems").innerHTML = CartItems;
      totalItems = 0;
      document.getElementById("CartTotal").innerHTML = totalItems;
    } else {
      if (img1 === _privateArray[index].brand) 
      CartItems += 1;
      document.getElementById("CartItems").innerHTML = CartItems;
      totalItems += _privateArray[index].price;
      document.getElementById("CartTotal").innerHTML = " $ " + totalItems;
    }
  };

  // 7.
  var clearMe = function(clear) {
    CartItems = clear;
    addPrice(CartItems);
  };

  // 8.
  var _privateArray = [
    { brand: "extra", price: 1.25 },
    { brand: "doubleMint", price: 1.50 },
    { brand: "trident", price: 1 },
    { brand: "bubble_gum", price: 2.5 }
  ];
  // 10.
  var extra = document.getElementById("extra");
  extra.addEventListener("click", function() {
    addPrice("extra", "0");
  });
  // 11.
  var doubleMint = document.getElementById("doubleMint");
  doubleMint.addEventListener("click", function() {
    addPrice("doubleMint", "1");
  });
  // 12.
  var trident = document.getElementById("trident");
  trident.addEventListener("click", function() {
    addPrice("trident", "2");
  });
  // 13.
  var bubble_gum = document.getElementById("bubble_gum");
  bubble_gum.addEventListener("click", function() {
    addPrice("bubble_gum", "3");
  });
  // 14. Clear all data
  var clear = document.getElementById("clear");
  clear.addEventListener("click", function() {
    clearMe("clear");
  });

  return {
    addPrice: addPrice,
    clear: clear
  };
})();
