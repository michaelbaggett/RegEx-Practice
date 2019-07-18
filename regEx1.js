let waldoIsHiding = "Somewhere Waldo is hiding";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result);

//matching for multiple words
let petString = "Geoff has a pet whale";
let petRegex = /dog|cat|fish|snake/;
let petResult = petRegex.test(petString);

console.log(petResult);

//case sensitive matching:: adding i after the last flag will match all case sensitive items

let text = "thisIsSomeShit";
let caseRegex = /thisissomeshit/i;
let caseResult = caseRegex.test(text);

console.log(caseResult);

//extracting out of a string
let extractStr = "Extract the word 'coding' out of this string";
let codingRegex = /coding/;
let extractResult = extractStr.match(codingRegex);
console.log(extractResult);

//finding multiple instances of a word/phrase/letter
let multStr = "Testing, Testing, Testing";
let multRegex = /Testing/g;
console.log(multStr.match(multRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let twinkleResult = twinkleStar.match(starRegex);
console.log(twinkleResult);

//matching instances of similar words
let runStr = "I'll run tomorrow";
let rumStr = "I'll have rum instead";
let ruRegex = /ru./;
console.log(runStr.match(ruRegex), rumStr.match(ruRegex));

//matching for single letters
let bgRegex = /b[aiu]g/;
let quote = "Beware of bugs in the above code. I suck";
console.log(quote.match(bgRegex));

//match a range of letters
/[a - z]/;
//match range of numbers:: CAN ALSO INCLUDE RANGE OF LETTERS
/[2-6]/;
/[2-6h-s]/;

//
