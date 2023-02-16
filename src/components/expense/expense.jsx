import React, { useState, useContext } from 'react'
import './expense.sass'

export default function ExpenseItem(props) {

  let {title, setExpenses, deleteExpense} = props;

  return <>
    <div className="c-expense__wrapp" onClick={(e) => deleteExpense(e)}>
      <span className="c-expense__title">{title}</span>
      <span className="c-expense__title">{key}</span>
      <div>
        <input className="input c-expense__input" type="text" name="expenses-value" placeholder="Введите сумму" onChange={(e) => {setExpenses(Number(e.target.value));}}/>
        <img src="minus.svg" className="c-expense__minus" alt=""/>
      </div>      
    </div>
  </>
}