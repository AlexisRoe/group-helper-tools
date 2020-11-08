// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://bost.ocks.org/mike/shuffle/
export default function random(group) {
  const mixedGroup = group;
  for (let i = group.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixedGroup[i], mixedGroup[j]] = [mixedGroup[j], mixedGroup[i]];
  }
}
