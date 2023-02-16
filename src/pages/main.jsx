import React, { useState, useEffect } from 'react'
import ExpenseItem from '../components/expense/expense';
import AddComponent from '../components/add/add';
import './main.sass';

export default function MainPage() {

  let [income, setIncome] = useState(0); // доходы
  let [expenses, setExpenses] = useState(0); //расходы

  let [expensesList, setExpensesList] = useState([
    {
      id: 1, name: 'Аренда квартиры'
    },
    {
      id: 2, name: 'Продукты'
    },
    {
      id: 3, name: 'Бензин'
    }
  ])


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
  },[expenses, expensesList])

// Добавление дохода
  function increaseIncome() {
    let newIncome = income;
    let incomeInput = document.querySelector('.income__input');
    newIncome += Number(incomeInput.value);
    setIncome(newIncome);
    incomeInput.value = '';
  }

    function toToggleExpensesModal() {
      let modal = document.querySelector('.expenses__modal');
      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
      } else {
        modal.classList.add('active');
      }
      
    }

  // Добавление расхода    

  function addExpenses() {
    let name = document.getElementById('expenses-name').value;
    setExpensesList([
      ...expensesList,
      {id: expensesList.length + 1, name: `${name}`}
    ])
  }

  function deleteExpense(e, id) {
    if (e.target.tagName === 'IMG') {
      setExpensesList(expensesList.filter(exp => exp.id !== id));
    }
    else return;
  }

  return <>
    <div className="container">
      <h1 className="title main__title">Распределение бюжета на месяц</h1>
     
      <div className="income block">
        <div className="month-wrapp">
          <h3 className="income__title title">Доход на месяц</h3>
          <input type="month" name="month" id="month" className="month__input" autoComplete="true"/>
        </div>
        <div className="income__sum">
          <input type="text" defaultValue="" className="income__input" placeholder="Введите сумму"/>
          <AddComponent increaseIncome={increaseIncome}/>
        </div> 
        <div className="income__total">{income} ₽</div>
      </div>   

      <div className="expenses block">
        <div className="month-wrapp">
          <h3 className="expenses__title title">Расходы на месяц</h3>
          <span className="expenses__add" onClick={toToggleExpensesModal}>Добавить</span>
        </div>        
        <div className="expenses__wrapp">
          {
             expensesList.map((item) => (
              <ExpenseItem setExpenses={setExpenses} deleteExpense={deleteExpense} key={item.id} id={item.id} title={item.name}/>
            ))
          }
        </div>
        <div className="expenses__modal">
          <img src="cross.svg" alt="" className='expenses__modal__close' onClick={toToggleExpensesModal}/>
          <label htmlFor="name" className='expenses__modal__label'>Введите название расхода:</label>
          <input id="expenses-name" name="name" type="text" className='expenses__modal__input input' required/>
          <button className='btn expenses__modal__btn' onClick={addExpenses}>Добавить</button>
        </div>
      </div>

      <div className="block result__block">
        <div className="bank">
          <h3 className="bank__title title">В копилку:</h3>
          <span className="bank__sum"><img className="bank__icon" src="checkmark.svg"></img>{income - expenses} ₽</span>
        </div>

        <button className="btn saveData">Сохранить</button>
      </div>
    </div>
      
    
  </>
}