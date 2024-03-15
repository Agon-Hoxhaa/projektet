// let numri1=15;
// let numri2=40;
// if(numri1 > numri2){
// alert("Numri ipare eshte me i madhe")
// }
// else if (numri2 > numri1){
//     alert("Numri i dyte eshte me i vogel");
// }
// else if (numri1 === numri2)
// {
// alert("Numrat jane te barabarte")
// }
// Shkruaj nje kod i cili ne baze te pikave tregon se qfare note KeyboardEvent(5,4,3,2,1) pastaj
// permes nje alerti te njofton per note.
// Perdore kete kriter: 0-50(1); 50-60(2); 61-70(3); 71-85(4); 86-100(5)

function calculateScore(keyCode) {
  const criteria = [
    { min: 0, max: 50, grade: 1 },
    { min: 50, max: 60, grade: 2 },
    { min: 61, max: 70, grade: 3 },
    { min: 71, max: 85, grade: 4 },
    { min: 86, max: 100, grade: 5 }
  ];

  for (let i = 0; i < criteria.length; i++) {
    if (keyCode >= criteria[i].min && keyCode <= criteria[i].max) {
      return criteria[i].grade;
    }
  }

  return 0;
}

const event = new KeyboardEvent('keydown', { keyCode: 95 });
const score = calculateScore(event.keyCode);
alert(` Nota juaj eshte  : ${score}`);