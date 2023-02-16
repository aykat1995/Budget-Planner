import React from 'react'
import './expense.sass'

export default function ExpenseItem(props) {

  let {title, setExpenses, deleteExpense, id} = props;

  return <>
    <div className="c-expense__wrapp" onClick={(e) => deleteExpense(e, id)}>
      <span className="c-expense__title">{title}</span>
      <div>
        <input className="input c-expense__input" type="text" name="expenses-value" placeholder="Введите сумму" onChange={(e) => {setExpenses(Number(e.target.value));}}/>
        <img src="minus.svg" className="c-expense__minus" alt=""/>
      </div>      
    </div>
  </>
}