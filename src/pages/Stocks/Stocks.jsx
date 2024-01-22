import style from './Stocks.module.css';
import SearchStocks from '../../components/SearchStocks/SearchStocks';

const Stocks = () => {
  return (
    <div className={style.stocks}>
      <h1>Stocks</h1>

      <SearchStocks />
    </div>
  )
}

export default Stocks;