/**
   Approximate string matching (fuzzy search)

  Insights

  @see https://en.wikipedia.org/wiki/Approximate_string_matching

  * Finding strings that match a pattern approximately (rather than exactly)
  * Closeness of a match is measured in terms of the number of primitive
    operations necessary to convert the string into an exact match
    => Levenshtein distance

  * Operations = insertion / deletion / substitution
    => generalized as forms of substitution by adding a NULL character
      / wildcard *
    + transposition = swap letters
  * Find a substring in string that has the smallest edit distance to the pattern P.
  * Process =  for each position j in the text T and each position i in the pattern P,
    compute the minimum edit distance between the i first characters of the pattern,
    and any substring of T that ends at position j
**/

function d() {
  console.log.apply(console, arguments);
}

function strToBinary(str) {
  const padding = '00000000';
  let i = -1, output = '';

  while(++i < str.length) {
    let binary = str.charCodeAt(i).toString(2);
    output += binary.substring(0, padding.length - binary.length) + binary;
  }

  return output;
}

const str1 = 'aaa';
const str2 = 'aaa';
const pattern = '*o?ar*';
hammingDistance(str1, str2);
