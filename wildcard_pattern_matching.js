/**
  Wildcard pattern matching

  Insights

  * The matching should cover the entire text (not partial text).

  * The wildcard pattern can include the characters ‘?’ and ‘*’
  ‘?’ – matches any single character
  ‘*’ – Matches any sequence of characters (including the empty sequence)
**/
const wildcards = '?*';

function match(str, pattern) {
  // i : characters of the string , j : characters of the pattern
  let i = 0, j = 0;
  let similiraty = [];

  similiraty[i][j] = true;
}

const text = 'foobarfoo';
const pattern = '*o?ar*';
