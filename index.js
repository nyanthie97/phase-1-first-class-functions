
function Monday() {
  console.log('Go for a five-mile run')
  console.log('Pump iron')
}
function Tuesday() {
  console.log('Go for a five-mile run')
  console.log('Swim 40 laps')
}
function runFiveMiles() {
  console.log('Go for a five-mile run')
}
function liftWeights() {
  console.log('Pump iron')
}
function swimFortyLaps() {
  console.log('Swim 40 laps')
}
function Monday() {
  runFiveMiles()
  liftWeights()
}
function exerciseRoutine(postRunActivity) {
  runFiveMiles()
  postRunActivity()
}
function Monday() {
  exerciseRoutine(liftWeights);
}
console.log(Monday()); 

function receivesAFunction(Gako) {
    Gako();
    return "ran Gako";
  }
  
  function returnsANamedFunction() {
    return function aNamedFunction() {
      return "a named function";
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      return "anonymous function";
    };
  }