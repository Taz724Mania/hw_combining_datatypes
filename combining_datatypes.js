const crayonBox = {
    colors: ['green', 'blue', 'purple', 'teal'],
    age: '5 years',
    smell: 'wax',
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