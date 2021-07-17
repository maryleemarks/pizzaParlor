// Business Logic
function Pie(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
}

Pie.prototype.priceCal = function() {
  var price = 0;
    if (this.size === "Extra Large") {
      this.price = 30;
    } else if (this.size === "Large") {
      this.price = 25;
    } else if (this.size === "Medium") {
      this.price = 20;
    } else {
      this.price = 15;
    }   
    
    if (this.toppings === 8) {
      this.price += 8;
    } else if (this.toppings === 7) {
      this.price += 7;
    } else if (this.toppings === 6) {
      this.price += 6;  
    } else if (this.toppings === 5) {
      this.price += 5; 
    } else if (this.toppings === 4) {
      this.price += 4; 
    } else if (this.toppings === 3) {
      this.price += 3;
    } else if (this.toppings === 2) {
      this.price += 2;
    } else if (this.toppings === 1) {
      this.price += 1;
    } else {
    } 
    return this.price;  
    };


// UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var orderName = $(".name").val();
    var orderSize = $(".size").val();

    var toppings = 0;
    for (i=0;i<document.order.toppings.length;i++){
      if (document.order.toppings[i].checked==true){
        toppings+=1;
      };
    };

    var newPie = new Pie(orderName, orderSize, toppings);

    $("#total").text("$" + newPie.priceCal().toFixed(2));
    $("#name").text(orderName);
    $("#show-price").show();
  });
});