function pizzaPrice(size, crust, topping) {
    this.size = size
    this.crust = crust
    this.topping = topping
}

$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();

        let pizzaSize = parseInt($("input:radio[name=size]:checked").val());
        let pizzaCrust = parseInt($("input:radio[name=crust]:checked").val());
        let pizzaTopping = [];
        $.each($("input:checkbox[name=topping]:checked"), function() {
            pizzaTopping.push(parseInt($(this).val()));
        });

    });

});