const ar1 = [];
const ar2 = [];
var ans = 0;

//Find intersection of h1 and h2
function findSum() {
  const hashset = new Set();
  for (let i = 0; i < ar1.length; i++) {
    var curr = ar1[i];
    hashset.add(curr);
    ans += curr;
  }
  //
  for (let i = 0; i < ar2.length; i++) {
    var curr = ar2[i];
    if (hashset.has(curr)) ans -= curr;
    else {
      ans += curr;
    }
  }
  return ans;
}

// MAIN

function main() {
  const arr1 = document.getElementById("arr1").value;
  const arr2 = document.getElementById("arr2").value;
  // arr1
  for (let i = 0; i < arr1.length; i++) {
    var curr = arr1[i];
    var nextToCurr = arr1[i + 1];
    if (
      curr != "," &&
      curr != " " &&
      (nextToCurr == "," || nextToCurr == " ")
    ) {
      ar1.push(parseInt(curr));
    } else if (
      curr != "," &&
      curr != " " &&
      (nextToCurr != "," || nextToCurr != " ")
    ) {
      curr = curr * 10 + parseInt(nextToCurr);
      i++;
      ar1.push(parseInt(curr));
    }
  }
  for (let i = 0; i < ar1.length; i++) {
    console.log(ar1[i]);
  }
  // arr2

  for (let i = 0; i < arr2.length; i++) {
    var curr = arr2[i];
    var nextToCurr = arr2[i + 1];
    if (
      curr != "," &&
      curr != " " &&
      (nextToCurr == "," || nextToCurr == " ")
    ) {
      ar2.push(parseInt(curr));
    } else if (
      curr != "," &&
      curr != " " &&
      (nextToCurr != "," || nextToCurr != " ")
    ) {
      curr = curr * 10 + parseInt(nextToCurr);
      i++;
      ar2.push(parseInt(curr));
    }
  }

  for (let i = 0; i < ar2.length; i++) {
    console.log(ar2[i]);
  }
  // Function call
  var output = findSum();
  document.getElementById("output").innerHTML="Non overlapping sum is "
  document.getElementById("output").innerHTML += output;
}
