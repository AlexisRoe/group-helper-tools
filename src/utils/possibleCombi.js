// https://www.studimup.de/abitur/algebra/binomialkoeffizient/
// https://gist.github.com/ferreiro/84148bb8c7a4a7c0af7b
function fact(number) {
  return number === 0 ? 1 : number * fact(number - 1);
}

export default function possibleCombi(countMember, groupSize) {
  return fact(fact(countMember) - groupSize) * fact(groupSize);
}
