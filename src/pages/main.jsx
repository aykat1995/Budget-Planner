import React, { useState, useEffect } from 'react'
import ExpenseItem from '../components/expense/expense';
import AddComponent from '../components/add/add';
import './main.sass'

export default function MainPage() {

  let [income, setIncome] = useState('');
  let expenses = 0, 
      bank = 0;
  // const regIncome = (value) => value(/\d{1,3}(?=(\d{3})+(?!\d))/g, value.replace(/\D/g, ""), "*");

  function sumOfExpenses(value) {
    expenses += +value;
    console.log(expenses)
  }
  

  return <>
    <div className="container">
      
      <h1 className="title main__title">Распределение бюжета на месяц</h1>
     
      <div className="income block">
        <div className="month-wrapp">
          <h3 className="income__title title">Доход на месяц</h3>
          <input type="month" name="month" id="month" value="2023-01" className="month__input" autoComplete="true"/>
        </div>
        <div className="income__sum">
          <input type="text" defaultValue={income} className="income__input" onChange={(e) => setIncome(e.target.value)}/>
          <AddComponent/>
        </div>        
      </div>   

      <div className="expenses block">
        <div className="month-wrapp">
          <h3 className="expenses__title title">Расходы на месяц</h3>
          <AddComponent/>
        </div>        
        <div className="expenses__wrapp">
          <ExpenseItem sumOfExpenses={sumOfExpenses} title="Аренда квартиры"/>
          <ExpenseItem sumOfExpenses={sumOfExpenses} title="Продукты"/>
          <ExpenseItem sumOfExpenses={sumOfExpenses} title="Бензин"/>
          <ExpenseItem sumOfExpenses={sumOfExpenses} title="Карманные деньги"/>
          <ExpenseItem sumOfExpenses={sumOfExpenses} title="Коммунальные"/>
          <ExpenseItem sumOfExpenses={sumOfExpenses} title="Интернет + связь"/>
        </div>
      </div>

      <div className="block result__block">
        <div className="bank">
          <h3 className="bank__title title">В копилку:</h3>
          <span className="bank__sum">{0 + " ₽"}</span>
        </div>

        <button className="btn saveData">Сохранить</button>
      </div>
    </div>
      
    
  </>
}