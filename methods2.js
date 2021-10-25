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

    selectedItems = [];

    internet(state)
    {
        if (state)
        {
            this.price += 200;
            this.selectedItems.push('Internet connection');
        } else
        {
            this.price -= 200;
            var index = this.selectedItems.indexOf('Internet connection');
            this.selectedItems.splice(index, 1);
        }
        return this.price;
    }

// increment the price and the list for phone list
    increment_phoneLines()
    {
        this.price += 150;
        this.selectedItems.push('Phone Line');
        return this.price;
    }


// decrement the price an the list for phone list
    decrement_phoneLines()
    {
        this.price -= 150;
        var index = this.selectedItems.indexOf('Phone Line');
        this.selectedItems.splice(index, 1);
        return this.price;
    }

    //select a cell phone
    select_phone(selectedName)
    {
        this.price += this.phones[selectedName];
        this.selectedItems.push(selectedName);
        return this.price;
    }

    //deselect a cell phone
    deselect_phone(selectedName)
    {
        this.price -= this.phones[selectedName];
        var index = this.selectedItems.indexOf(selectedName);
        this.selectedItems.splice(index, 1);
        return this.price;
    }

    buy()
    {
        if (!this.selectedItems.length) return alert("Nothing was selected! Please select items to purchase.");
        else return alert(this.selectedItems)
    }

}

pur = new Purchase();


/*
test("Selects a cell phone and displays a new price", () => {
    expect(pur.select_phone("Samsung Galaxy 99")).toBe(1400);
});

test("Deselect a cell phone and displays a new price", () => {
    expect(pur.deselect_phone("Motorola G99")).toBe(600);
})
*/
