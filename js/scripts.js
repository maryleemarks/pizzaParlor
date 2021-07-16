// Business Logic
function Pie(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
}

Pie.prototype.price = function() {
  let price = 0;
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
}

// UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var name = $(".name").val();
    var size = $(".size").val();
    
  })
}