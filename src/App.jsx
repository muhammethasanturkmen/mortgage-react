import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="container">
      <div className="calculator">
        <div className="header">
          <h3>Mortgage Calculator</h3>
          <button>Clear All</button>
        </div>
        <div className="mortgage-input">
          <label>
            <p>Mortgage Amount
              <input type="Text" /></p>
          </label>
          <div className="year">
            <label>
              <p>Mortgage Term
                <input type="text" /></p>
            </label>
            <label>
              <p>Interest Rate
                <input type="text" /></p>
            </label>
          </div>
        </div>
        <div className="type">
          <p>Mortgage Type</p>
          <label>
            <p>
              <input className='typeradio' type="radio" /> Repayment
            </p>
          </label>
          <label>
            <p>
            <input className='typeradio' type="radio" /> Interest Only
            </p>
          </label>
        </div>
        <button className='calc'><img src="/Vector.png" alt="" /> Calculate Repayments</button>
      </div>
      <div className="result">
        <div className="paragraf">
          <h3>Your results</h3>
          <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        </div>
        <div className="sonuc">
          <div className="month">
            <p>Your monthly repayments</p>
            <h1>£1,797.74</h1>
          </div>
          <div className="total">
            <p>Total you'll repay over the term</p>
            <h3>£539,322.94</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
