function theBiscuitFactory(input) {
    let biscuitPerPerson = input.shift();
    let peoples = input.shift();
    let another = input.shift();
    let total = 0;

    for (let i = 1; i <= 30; i++) {
        let days = i;

        if (days % 3 === 0) {
            total += Math.floor(biscuitPerPerson * 0.75 * peoples);
        } else {
            total += Math.floor(biscuitPerPerson * peoples);
        }
    }
    console.log(`You have produced ${(total)} biscuits for the past month.`);

    if (total > another) {
        console.log(`You produce ${(((total / another) * 100) - 100).toFixed(2)} percent more biscuits.`);
    } else if (total < another) {
        console.log(`You produce ${(Math.abs(((total / another) * 100) - 100)).toFixed(2)} percent less biscuits.`);
    }
}
//theBiscuitFactory(["78","8","16000"]);
//theBiscuitFactory((["65", "12", "26000"]));
theBiscuitFactory(["163", "16", "67020"]);