/* eslint-disable default-case */
import { useState, useEffect } from 'react';
import './App.css';
import db from '../../db/mongoDB';
import sortDB from '../../db/sortDB';
import filterDB from '../../utilits/filrerDB';
import randomID from '../../utilits/randomID';

import TableData from '../TableData';

const initialForm = {
  columnsF: '',
  valueF: '',
};

function App() {

  const [dataBase, setDataBase] = useState(db);
  const [count, setCount] = useState(0);

  const [valueForm, setValueForm] = useState(initialForm);
  const [valueInput, setValueInput] = useState('');

  const sortCol = (event) => {
    const nameColumn = event.target.attributes.name.value;
    setDataBase(sortDB(dataBase, nameColumn));
    setCount(count + 1);
  };
  
  const onChangeForm = (event) => {
    event.preventDefault();
    const valueFilter = event.target.value;
    const idFilter = event.target.id;
    
    switch(idFilter) {
      case 'selectCol':
        setValueForm((prev) => ({...prev, columnsF: valueFilter }));
        break;
        
      case 'selectValue':
        setValueForm((prev) => ({...prev, valueF: valueFilter }));
        if (!valueForm.columnsF) {
          setValueForm(initialForm);
        };
        break;
    }
  };
        
  const onChangeInput = (event) => {
    event.preventDefault();
    setValueInput(event.target.value);
    setDataBase(() => filterDB(db, valueForm, valueInput));
  };
  
  useEffect(() => {
    setDataBase(() => filterDB(db, valueForm, valueInput));
  }, [valueInput])

  if (!dataBase) {
    return (
      <h3>Data loading...</h3>
    )
  }

  return (
    <>
      <table>
        <caption>Таблица</caption>
        <thead>
          <tr key={randomID}>
            <th key={randomID + '23'} name='date' onClick={sortCol}>Дата</th>
            <th key={randomID + '32'} name='name' onClick={sortCol}>Название</th>
            <th key={randomID + '42'} name='amount' onClick={sortCol}>Количество</th>
            <th key={randomID + '24'} name='distance' onClick={sortCol}>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {dataBase.map((data) => (
            <TableData data={data}/>
          ))}
        </tbody>
      </table>
      <form onChange={onChangeForm}>
        <div>
          <div>
            <select key={randomID + '233sdf223'} id="selectCol">
              <option key={randomID + '2sfw323'} value=''>Нет фильтрации</option>
              <option key={randomID + '2323'} value='date'>Дата</option>
              <option key={randomID + '2243'} value='name'>Название</option>
              <option key={randomID + '2523'} value='amount'>Количество</option>
              <option key={randomID + '2573'} value='distance'>Расстояние</option>
            </select>
          </div>
          <div>
            <select key={randomID + '233sg223'} id="selectValue">
              <option key={randomID + '233sdf223'} value=''>нет фильтрации</option>
              <option key={randomID + '233223'} value='equals'>равно</option>
              <option key={randomID + '231423'} value='contains'>содержит</option>
              <option key={randomID + '235623'} value='more'>больше (для колонок 'Количество' и 'Расстояние')</option>
              <option key={randomID + '232623'} value='smaller'>меньше (для колонок 'Количество' и 'Расстояние')</option>
            </select>
          </div>
        </div>
      </form>
      <div>
        <input id='inputValue' type="text" value={valueInput} onChange={onChangeInput} />
      </div>
    </>
  );
}

export default App;
