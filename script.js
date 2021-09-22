function pizzaPrice(size, crust, topping, number) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number = number;
}
pizzaPrice.prototype.totalPizzaPrice = function() {
    return (this.size + this.crust + this.topping) * this.number;

}

$(document).ready(function() {
    $("#pTotals").click(function(event) {
        event.preventDefault();

        let pizzaSize = parseInt($("input:radio[name=size]:checked").val());
        let pizzaCrust = parseInt($("input:radio[name=crust]:checked").val());
        let pizzaTopping = [];
        $.each($("input:checkbox[name=topping]:checked"), function() {
            pizzaTopping.push(parseInt($(this).val()));
        });
        let pizzaToppings = 0;
        for (let i = 0; i < pizzaTopping.length; i++) {
            pizzaToppings += pizzaTopping[i];
        }
        let orderNumb = parseInt($("#pizza-number").val())
        let totalPizzaPrices = new pizzaPrice(pizzaSize, pizzaCrust, pizzaToppings, orderNumb);
        $("#totals").text(totalPizzaPrices.totalPizzaPrice());
    });
    $("#place").click(function() {
        let destination = $("#location").val();
        alert("Your order will be delivered to " + destination);
    })

});