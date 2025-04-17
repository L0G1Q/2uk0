let user = "Alice";
let score = 87;
console.log("User:", user);
console.log("Score:", score);
console.log(Debug → user=${user}, score=${score});

let threshold = 90;
if (score < threshold) {
  console.warn(
    Warning: score (${score}) is below the recommended threshold of ${threshold}.
  );
}

function processScore(n) {
  if (typeof n !== "number") {
    console.error(
      Error: invalid argument. Expected a number but received type "${typeof n}".
    );
    return;
  }
  console.log("Processing score:", n);
}

processScore(score);    
processScore("eighty"); 