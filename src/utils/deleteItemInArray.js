export default function deleteDataInArray(array, deleteItem) {
  let updatedArray = array;
  if (array.includes(deleteItem)) {
    updatedArray = array.filter((storedItem) => deleteItem !== storedItem);
  }
  return updatedArray;
}
