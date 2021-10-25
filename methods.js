

var price = 0.0;
var def_val = 0;

//for button click 
function buy_pressed()
{
    alert("Buy button has been pressed.")
    price_text()
}

//internet checkbox
function internet()
{
    var chkBox = document.getElementById('internet_checkbox');

    if(chkBox.checked)
    {
        price = price + 200

        price_text()
       
    }
    else 
    {

        price = price - 200

        price_text()
    }

}  

function phone_lines()
{
    phone_line_price = 150


    var val = document.getElementById('phone_lines').value
    //alert("Def: " + def_val + "  ||   Cur: " + val)

    if(def_val > val)
    {
        price = price - phone_line_price
        def_val = val
    }
    else {
        price = price + phone_line_price
        def_val = val
    }

    price_text()
}

function price_text() {  
    document.getElementById('price_text').innerHTML = price + "DKK";  
}



