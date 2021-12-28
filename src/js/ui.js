$(document).ready(function(){

    const tableRow = $("table tr");

    tableRow.click(function(){
        $(this).addClass("select");
        tableRow.not($(this)).removeClass("select");
    })
 });