$(document).ready(function() {
    $("button").click(function() {
        $("#type-pizza").show();
    });
    $("#form-table1").click(function() {
        $("#type-pizza").show();
    });

});
$(document).ready(function() {
    $("#form-table2").click(function() {
        $("#sizes").slideDown();
    });
});
$(document).ready(function() {
    var str = "";

    $(':checkbox').each(function() {
        str += this.checked ? "1," : "0,";
    });

    str = str.substr(0, str.length - 1); //Remove the trailing comma

});