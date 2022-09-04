export default function main() {
  // /pattern/modifier(s);

  //PATTERNS
  //Brackets
  // [abc]	Find any character between the brackets
  // [^abc]	Find any character NOT between the brackets
  // [0-9]	Find any character between the brackets (any digit)
  // [^0-9]	Find any character NOT between the brackets (any non-digit)
  // (x|y)	Find any of the alternatives specified

  //Metacharacters
  // .	Find a single character, except newline or line terminator
  // \w	Find a word character
  // \W	Find a non-word character
  // \d	Find a digit
  // \D	Find a non-digit character
  // \s	Find a whitespace character
  // \S	Find a non-whitespace character
  // \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
  // \B	Find a match, but not at the beginning/end of a word
  // \0	Find a NULL character
  // \n	Find a new line character
  // \f	Find a form feed character
  // \r	Find a carriage return character
  // \t	Find a tab character
  // \v	Find a vertical tab character
  // \xxx	Find the character specified by an octal number xxx
  // \xdd	Find the character specified by a hexadecimal number dd
  //\ udddd	Find the Unicode character specified by a hexadecimal number dddd

  //Quantifiers
  // n+	Matches any string that contains at least one n
  // n*	Matches any string that contains zero or more occurrences of n
  // n?	Matches any string that contains zero or one occurrences of n
  // n{X}	Matches any string that contains a sequence of X n's
  // n{X,Y}	Matches any string that contains a sequence of X to Y n's
  // n{X,}	Matches any string that contains a sequence of at least X n's
  // n$	Matches any string with n at the end of it
  // ^n	Matches any string with n at the beginning of it
  // ?=n	Matches any string that is followed by a specific string n

  //Modifiers
  // g	Perform a global match
  // i	Perform case-insensitive matching
  // m	Perform multiline matching

  //Methods
  // exec()	Tests for a match in a string. Returns the first match
  // test()	Tests for a match in a string. Returns true or false
  // toString()	Returns the string value of the regular expression

  console.log(/ARE/.test('The best things in life are free')); //false
  console.log(/ARE/i.test('The best things in life are free')); //true

  console.log(/ARE/.exec('The best things in life are free')); //null
  console.log(/ARE/i.exec('The best things in life are free')); //['are']

  console.log(/TH.NGS/i.exec('The best things in life are free')); //['things']
  console.log(/TH./gi.exec('The best things in life are free')); //['The']
  console.log(/TH[IOEU]/gi.exec('The best things in life are free')); //['The']
  console.log(/TH[(IO|EU)]/gi.exec('The best things in life are free')); //['The']
  console.log(/(THE|BES)/gi.exec('The best things in life are free')); //['The']

  console.log(/\d/i.exec('The best things in life are free')); //null
  console.log(/\D/i.exec('The best things in life are free')); //['T']
  console.log(/\S/i.exec('The best things in life are free')); //['T']
}
