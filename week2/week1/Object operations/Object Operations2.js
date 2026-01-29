const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
  }
  //Calculate total marks
  let total=0
  for(let subject in marks){
    total=total+marks[subject]
  }
  console.log(total)
//Calculate average marks
let avg=total/Object.keys(marks).length
console.log(avg)
//Find the highest scoring subject
let highestSubject
let highestmarks=0
for(let subject in marks){
    if(marks[subject]>highestmarks){
        highestmarks=marks[subject]
        highestSubject=subject
    }
}
console.log(highestSubject)
//Add a new subject computer: 90
marks.computer=90
console.log(marks)