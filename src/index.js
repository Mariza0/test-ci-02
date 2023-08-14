export default function sortData(input) {
  input.sort((a, b) => b.health - a.health);
  return input;
}
