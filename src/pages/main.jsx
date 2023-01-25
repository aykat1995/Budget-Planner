import React, { useState, useContext } from 'react'
import ExpenseItem from '../components/expense/expense';
import AddComponent from '../components/add/add';
import './main.sass'

export default function MainPage() {

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [bankSum, setBankSum] = useState(0);

  return <>
    <div className="container">
      <h1 className="title main__title">Распределение бюжета на месяц</h1>
      <div className="income block">
        <h3 className="income__title title">Доход на месяц</h3>
        <input type="text" className="income__input" placeholder={income} onChange={setIncome}/>
        <AddComponent/>
      </div>   

      <div className="expenses block">
        <h3 className="expenses__title title">Расходы на месяц</h3>
        <div className="expenses__wrapp">
          <ExpenseItem title="Продукты"/>
          <ExpenseItem title="Бензин"/>
        </div>
      </div>

      <div className="bank block">
        <h3 className="bank__title title">В копилку:</h3>
        <span className="bank__sum">{bankSum + " ₽"}</span>
      </div>

      <button type="submit" className="saveData">Сохранить</button>
    </div>
    
  </>
}