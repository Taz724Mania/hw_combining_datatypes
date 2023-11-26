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




