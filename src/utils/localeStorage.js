export function getData(dataField) {
  let storageData;
  try {
    storageData = JSON.parse(localStorage.getItem(dataField)) || [];
  } catch (error) {
    // console.error(error);
  }
  return storageData;
}

export function storeData(dataField, data) {
  localStorage.setItem(dataField, JSON.stringify(data));
  return data;
}

export function additinalData(dataField, data) {
  const oldData = getData(dataField);
  const updatedData = [...oldData, data];
  storeData(dataField, updatedData);
  return updatedData;
}

export function deleteData(dataField) {
  storeData(dataField, '');
  return true;
}

//  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
// function storageAvailable(type) {
//     let storage;
//     try {
//         storage = window[type];
//         let x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     } catch (e) {
//         return (
//             e instanceof DOMException &&
//             // everything except Firefox
//             (e.code === 22 ||
//                 // Firefox
//                 e.code === 1014 ||
//                 // test name field too, because code might not be present
//                 // everything except Firefox
//                 e.name === 'QuotaExceededError' ||
//                 // Firefox
//                 e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             storage &&
//             storage.length !== 0
//         );
//     }
// }
