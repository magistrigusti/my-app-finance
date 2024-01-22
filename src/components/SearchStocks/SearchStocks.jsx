import style from './SearchStocks.module.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
import stocksApi from '../../api/stocksApi';

const SearchStocks = () => {
  const {data} = useQuery('getStocks', () => stocksApi['getStocks']());

  const [value, setValue] = useState();

  console.log(data);
  return (
    <div className={style.searchBlock}>
      <input value={value} onChange={(event) => setValue(event.target.value)} className={style.input} type='text' />
    </div>
  )
}
export default SearchStocks;