// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  let FullName = [];
  
  for(i = 0; i < instructors.length; i++) {
    FullName[i] = instructors[i].first + ' ' + instructors[i].last
    // console.log(FullName[i])
    } 
    FullName.sort(function(a,b) { return b.length - a.length });
    return FullName[0];
    
};

console.log(LongestName([
  {first: "Samuel", last: "Sanderson"},
  {first: "Jeremiah", last: "Web"},
  {first: "Ophilia", last: "Rich"},
  {first: "Donald", last: "kant"}
]));
console.log(LongestName([
  {first: "Matthew", last: "Ebert"},
  {first: "David", last: "John"},
  {first: "Domascus", last: "Anderson"}
]));