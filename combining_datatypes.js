const crayonBox = {
    colors: ['green', 'blue', 'purple', 'teal'],
    age: '5 years',
    smell: 'waxy',
}
console.log(crayonBox.colors[2])

////////////////////////////////////////////////////////////////////////
const bottle = {
    material: 'plastic',
    size: '16 oz',
    color: 'green',
    cap: {
      material: 'plastic',
      color: 'green'
    }
  };
  
  console.log(bottle.cap.color)
////////////////////////////////////////////////////////////////////////
  const receipt = [
    {
        item: 'pears',
        cost: 4,
        quantity: 3,
    },
    {
        item: 'eggs',
        cost: 12,
        quantity: 1,
    }
  ]
  console.log(receipt[0].item)
////////////////////////////////////////////////////////////////////////
const apartmentBuilding = [
    {
        aptNum: 2,
        people: ['Sam', 'Frodo'],
        pets: 0,
    },
    {
        aptNum: 6,
        people: ['Moe', 'Curly', 'Larry'],
        pets: 5,
    },
    {
        aptNum: 10,
        people: ['Shallan', 'Adolin', 'Kaladin'],
        pets: 0,
    }
]
console.log(apartmentBuilding[0].people[0])
//////////////////////////////////////////////////////////////////////////
function knit() {
   return {
    item: 'scarf',
    size: '6ft',
    color: 'red',
    material: 'wool',
   }
}
const scarf = knit()
console.log(scarf.color)
////////////////////////////////////////////////////////////////////////
const crayonSelector = () => {
    return {
        colors: ['green', 'blue', 'purple', 'teal'],
        age: '5 years',
        smell: 'waxy',
    }
}
const crayonPick = crayonSelector()
console.log(crayonPick.colors[2])
////////////////////////////////////////////////////////////////////////
const powerButton = () => {
   const options = () => {
        console.log('Pick your poison.')
    }
    return options
}
powerButton()()
////////////////////////////////////////////////////////////////////////
// Model a Vending Machine 

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = [ 
    {snack: 'pretzels', cost: 2},
    {snack: 'potato chips', cost: 1.5},
    {snack: 'Payday', cost: 1.75},
]

vendingMachine.vend = function() {
const snackIndex = parseInt(prompt('Enter the snack number (0-2):'));

if (snackIndex < 0 || snackIndex > vendingMachine.length - 1) {
  alert('Invalid snack number!');
  return;
}

const selectedSnack = vendingMachine[snackIndex];
alert(`You selected ${selectedSnack.snack} for ${selectedSnack.cost}.`);
};

vendingMachine.vend(2);




