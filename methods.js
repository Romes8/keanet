def_val = 0;

class Purchase {

    internetConnection;
    phoneLines;
    cellPhones;
    price = 0;
    
    phones = {
        'Motorola G99': 800,
        'iPhone 99': 6000,
        'Samsung Galaxy 99': 1000,
        'Sony Xperia 99': 900,
        'Huawei 99': 900
    };

    //for button click 
    buy_pressed() {
        alert("Buy button has been pressed.");
        price_text();
    }
    
    //internet checkbox
    internet() {

        chkBox = document.getElementById('internet_checkbox');

        if(chkBox.checked)
        {
            price = price + 200;

            price_text();
        
        }
        else 
        {
            price = price - 200;

            price_text();
        }

    }  

    phone_lines() {
        
        var phone_line_price = 150;

        var val = document.getElementById('phone_lines').value;
        alert("Def: " + def_val + "  ||   Cur: " + val);

        if(def_val > val)
        {
            price = price - phone_line_price;
            def_val = val;
        }
        else 
        {
            price = price + phone_line_price;
            def_val = val;
        }

        price_text();
    }


    price_text() {  
        document.getElementById('price_text').innerHTML = price + "DKK";  
    }

    //select a cell phone
    select_phone(selectedName)
    {
        price += phones[selectedName];
        return price;
    }

    //deselect a cell phone
    deselect_phone(selectedName)
    {
        price -= phones[selectedName];
        return price;
    }

}

pur = new Purchase();

function _phone_lines() {
    
    var phone_line_price = 150;

    val = document.getElementById('phone_lines').value;
    alert("Def: " + def_val + "  ||   Cur: " + val);

    if(def_val > val)
    {
        price = price - phone_line_price;
        def_val = val;
    }
    else 
    {
        price = price + phone_line_price;
        def_val = val;
    }

    price_text();
}



/*
test("Selects a cell phone and displays a new price", () => {
    expect(pur.select_phone("Samsung Galaxy 99")).toBe(1400);
});

test("Deselect a cell phone and displays a new price", () => {
    expect(pur.deselect_phone("Motorola G99")).toBe(600);
})
*/
