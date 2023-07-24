import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incNum,decNum } from './redux/actions';
import ChangeTheNumber from './redux/reducers/Updown';
function App() {
  const myState=useSelector((state)=>state.ChangeTheNumber);
  const dispatch=useDispatch();
  return (
    
    <div >
      <h1>Increment/Decrement</h1>
      <h4>Redux makes life easy!</h4>
      <div className="quantity">
        <a className='quantity-minus' title='decrement'onClick={()=>dispatch(decNum())}><span> - </span></a>
        <input name='quantity' type='text' className='quantity-input' value={myState}  />
        <a className='quantity-plus' title='increment' onClick={()=>dispatch(incNum(10))}>
          <span> + </span></a>


      </div>
    </div>
  );
}

export default App;
