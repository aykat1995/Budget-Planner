import React, { useState, useEffect } from 'react'
import ExpenseItem from '../components/expense/expense';
import AddComponent from '../components/add/add';
import './main.sass'

export default function MainPage() {

  let [income, setIncome] = useState(0); // доходы
  let [expenses, setExpenses] = useState(0); //расходы

// Вычисление суммы расходов
  useEffect(() => {
    let expensesSum = 0;
    let expensesInputs = document.querySelectorAll('.c-expense__input');
    expensesInputs.forEach((input) => {
      if (input.value === undefined) {
        input.value = 0
      } else
        expensesSum += Number(input.value);
        setExpenses(expensesSum);
    });
  },[expenses])

  function increaseIncome() {
    console.log('hello')
    let newIncome = income;
    let incomeInput = document.querySelector('.income__input');
    newIncome += Number(incomeInput.value);
    setIncome(newIncome);
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
          <input type="text" defaultValue="" className="income__input" />
          <AddComponent increaseIncome={increaseIncome}/>
        </div> 
        <div className="income__total">{income} ₽</div>
      </div>   

      <div className="expenses block">
        <div className="month-wrapp">
          <h3 className="expenses__title title">Расходы на месяц</h3>
          <AddComponent/>
        </div>        
        <div className="expenses__wrapp">
          <ExpenseItem setExpenses={setExpenses} title="Аренда квартиры"/>
          <ExpenseItem setExpenses={setExpenses} title="Продукты"/>
          <ExpenseItem setExpenses={setExpenses} title="Бензин"/>
          <ExpenseItem setExpenses={setExpenses} title="Карманные деньги"/>
          <ExpenseItem setExpenses={setExpenses} title="Коммунальные"/>
          <ExpenseItem setExpenses={setExpenses} title="Интернет + связь"/>
        </div>
      </div>

      <div className="block result__block">
        <div className="bank">
          <h3 className="bank__title title">В копилку:</h3>
          <span className="bank__sum">{income - expenses} ₽</span>
        </div>

        <button className="btn saveData">Сохранить</button>
      </div>
    </div>
      
    
  </>
}