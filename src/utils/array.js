export function deleteDataInArray(oldArray, deleteItem) {
  let updatedArray = [...oldArray];
  if (oldArray.includes(deleteItem)) {
    updatedArray = oldArray.filter((storedItem) => deleteItem !== storedItem);
  }
  return updatedArray;
}

export function storeDataInArray(oldArray, newItem) {
  const updatedArray = [...oldArray];
  if (updatedArray.includes(newItem)) {
    updatedArray.push(newItem);
  }
  return updatedArray;
}
