import React from 'react'
import './add.sass'

export default function AddComponent({increaseIncome}) {
  return <>
    <div className="add__wrapp add" onClick={increaseIncome}>
      <img src="plus.svg" alt="" />
    </div>
  </>
}