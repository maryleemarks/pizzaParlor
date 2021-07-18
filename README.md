# Mary's Pizza Parlor

#### This is a webpage that lets you order a custom pizza at Mary's Pizza Parlor

#### By Mary Marks

## Technologies Used

*HTML
*CSS
*JQuery
*JavaScript
*GIT

## Description

This webpage lets you select your custom pizza and tells you much it will cost by using javaScript constructors and prototypes.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to your devices desktop files and click the webpage link
* View the webpage on your browser
* Type your name in the "Name" box
* Select your pizza size from the drop down menu
* Check the appropriate boxes for your toppings
* Click the "Submit Order" button
* View the cost of your pizza

## Known Bugs

* Does not let you enter in more than one order

## License

MIT

## Specs

Describe: Pie()

Test: It should return a name when text is entered into the "Name" box
Code: let name = "Bob"
Expected Output: Bob

Test: It should create a new pizza object with a name, size and toppings
Code: let pie = ("Bob", "Medium", "Pepperoni")
Expected Output: Bob, Medium, Pepperoni

Describe: Pie.prototype.priceCal()

Test: It should set base prices for small, medium, large, and extra large
Code: let pie = new pie ("medium")
Expected Output: $20

Test: It should add 1 to the base price for each topping selected.
Code: let pie = new pie ("medium", olives, pepperoni)
Expected Outpu: $22

