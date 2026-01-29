const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
  ];
//Use filter() to get only inStock products
let inStockProducts=cart.filter(item=>item.inStock)
console.log("In Stock Products:",inStockProducts)

//Use map() to create a new array with:  { name, totalPrice }
let r=cart.map(item=>{
  return {
    name: item.name,
    totalPrice: item.price * item.quantity
  }
})
console.log("Products with Total Price:",r)

//Use reduce() to calculate grand total cart value 
let grandTotal=cart.reduce((total,item)=>{
  if(item.inStock){
    return total+(item.price*item.quantity)
  }
  return total
},0)
console.log("Grand Total Cart Value:",grandTotal)
//Use find() to get details of "Mouse"
let r2=cart.find(item=>item.name==="Mouse")
console.log(r2)

//Use findIndex() to find the position of "Keyboard"
let index=cart.findIndex(item=>item.name==="Keyboard")
console.log("Index of Keyboard:",index)