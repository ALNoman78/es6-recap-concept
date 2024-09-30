const numbers = [12, 43, 65, 74, 67, 65];

const evenNumber = numbers.find((x) => x > 45 && x % 2 === 0);
// console.log(evenNumber);

const maping = numbers.map((x) => x * 2);
// console.log(maping);

const filterName = numbers.filter((x) => x < 32);
// console.log(filterName);

const reducer = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  0
); // initial value na dile kaj hbe (0)
// console.log(reducer);

const phones = [
{
        phone: "iPhone",
        model: "iPhone 15 Pro",
        price: 1199,
        itemsIncluded: [
        "Charger",
        "USB-C Cable",
        "SIM Ejector Tool",
        "Documentation",
        ],
    },
    {
        phone: "Samsung",
        model: "Galaxy S24 Ultra",
        price: 1299,
        itemsIncluded: ["Charger", "USB-C Cable", "Screen Protector", "Stylus Pen"],
    },
    {
        phone: "Google",
        model: "Pixel 8 Pro",
        price: 999,
        itemsIncluded: [
        "Charger",
        "USB-C Cable",
        "User Manual",
        "SIM Ejector Tool",
        ],
    },
    {
        phone: "OnePlus",
        model: "OnePlus 12",
        price: 799,
        itemsIncluded: ["Charger", "USB-C Cable", "Case", "Screen Protector"],
    },
    {
        phone: "Xiaomi",
        model: "Mi 13 Ultra",
        price: 1099,
        itemsIncluded: ["Charger", "USB-C Cable", "Phone Case", "Warranty Card"],
    },
    {
        phone: "Sony",
        model: "Xperia 5 V",
        price: 999,
        itemsIncluded: ["Charger", "USB-C Cable", "SIM Ejector Tool", "Earbuds"],
    },
    {
        phone: "Huawei",
        model: "P60 Pro",
        price: 899,
        itemsIncluded: ["Charger", "USB-C Cable", "Case", "Screen Protector"],
    },
    {
        phone: "Oppo",
        model: "Find X6 Pro",
        price: 1049,
        itemsIncluded: ["Charger", "USB-C Cable", "Earbuds", "SIM Ejector Tool"],
    },
    {
        phone: "Asus",
        model: "ROG Phone 7",
        price: 1199,
        itemsIncluded: ["Charger", "USB-C Cable", "AeroActive Cooler", "Case"],
    },
    {
        phone: "Motorola",
        model: "Edge 40 Pro",
        price: 899,
        itemsIncluded: [
        "Charger",
        "USB-C Cable",
        "Screen Protector",
        "SIM Ejector Tool",
        ],
    },
];

const objectReduce = phones.reduce((previous , currentValue) => previous + currentValue.price ,0)
console.log(objectReduce);
