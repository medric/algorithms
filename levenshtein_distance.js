/** Minimum number of single-character edits (i.e. insertions, deletions or substitutions
 * Keep last + current rows in memory
 * sum of the costs of insertions, replacements, deletions,
  and null actions needed to change one string into the other
*/

function d() {
  console.log.apply(console, arguments);
}

function LevenshteinDistance(s, t) {

  if (s === t) return 0;
  if (s.length === 0) return t.length;
  if (t.length === 0) return s.length;

  v0 = []; // previous row of distance
  v1 = []; // current row of distance

  // max edit distance possible (lenght of the prefix)
  for (let i = 0; i < t.length + 1; i++) v0[i] = i;

  for (let i = 0; i < s.length; i++) {
      v1[0] = i + 1;

      for (let j = 0; j < t.length; j++) {
          let cost = (s[i] === t[j]) ? 0 : 1;
          v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
      }

      // copy v1 (current row) to v0 (previous row) for next iteration
      for (let j = 0; j < v0.Length; j++) v0[j] = v1[j];
  }

  return v1[t.length];
}

d(LevenshteinDistance('foobar', 'foobar'));
