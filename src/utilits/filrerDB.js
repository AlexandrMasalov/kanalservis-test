/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
export default function filterDB (dataBase, values, text) {
  if(!text) {
    return dataBase;
  };

  let res;
  switch(values.valueF) {

    case 'equals':
      res = dataBase.filter((data) => data[values.columnsF] === text);
      return res;
      
    case 'contains':
      res = dataBase.filter((data) => data[values.columnsF].includes(text));
      return res;
        
    case 'more':
      if (values.columnsF === 'amount' || values.columnsF === 'distance') {
        res = dataBase.filter((data) => data[values.columnsF] > Number(text));
        return res;
      };
      return dataBase;
      
    case 'smaller':
      if (values.columnsF === 'amount' || values.columnsF === 'distance') {
        res = dataBase.filter((data) => data[values.columnsF] < Number(text));
        return res;
      };
      return dataBase;
    }
};
