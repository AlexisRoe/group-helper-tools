// const process.env.REACT_APP_HOST

export async function getLists() {
  const response = await fetch(`${process.env.REACT_APP_HOST}`);
  const lists = await response.json();
  return lists;
}

export async function getListsByID(id) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/${id}`);
  const lists = await response.json();
  return lists;
}

export async function deleteListbyID(id) {
  await fetch(`${process.env.REACT_APP_HOST}/${id}`, {
    method: 'DELETE',
  });
}

export async function addNewList(payload) {
  const response = await fetch(`${process.env.REACT_APP_HOST}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });
  const newList = await response.json();
  return newList;
}
