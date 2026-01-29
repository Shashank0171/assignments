let price=1299
let label

if(price<500) label="Budget Course"
else if(price>=500 && price<1000) label="Standard Course"
else label="Premium Course"
console.log(label)