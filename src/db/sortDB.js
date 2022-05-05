export default function sortDB (dataBase, nameColumn) {

  if (nameColumn === 'name') {
    dataBase.sort((a, b) => {

      if (a[nameColumn] > b[nameColumn]) {
        return 1;
      };
      if (a[nameColumn] < b[nameColumn]) {
        return -1;
      };
      return 0;

    })
  };

  return dataBase = dataBase.sort((a, b) => a[nameColumn] - b[nameColumn]);
};
