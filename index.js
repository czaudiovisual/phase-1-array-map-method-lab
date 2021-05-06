const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = tutorials.map(tutorial => tutorial.charAt(0).toUpperCase() + 
//   tutorial.substr(1).toLowerCase());

// console.log(titleCased);


const title = (tutorial) => {
  return tutorial.charAt(0).toUpperCase() + 
  tutorial.substr(1);
}


function titleCased() {
  const tutorialCased = tutorials.map(tutorial => {
    const tutorialWords = tutorial.split(" ");
    const tutorialWordCased = tutorialWords.map(word => title(word)).join(" ");
    return tutorialWordCased;
  });  
  return tutorialCased;
} 


