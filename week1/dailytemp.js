const temperatures = [32, 35, 28, 40, 38, 30, 42]
//filter() temperatures above 35
let above35=temperatures.filter(t=>t>35)
console.log("temperatures above 35:",above35)
//2. map() to convert all temperatures from Celsius → Fahrenheit
let FahrenheitTemps=temperatures.map(t=>(t*9/5)+32)
console.log("temperatures in farenheit:",FahrenheitTemps)
//3. reduce() to calculate average temperature
let avgTemperatures=temperatures.reduce((sum,t)=>sum+t,0)/temperatures.length
console.log(avgTemperatures)
//4. find() first temperature above 40
let result=temperatures.find(t=>t>40)
console.log("first temp above 40:",result)
//5. findIndex() of temperature 28
let index=temperatures.findIndex(t=>t===28)
console.log("index of temperature 28:",index)