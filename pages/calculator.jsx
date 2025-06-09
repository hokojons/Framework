import { useState } from 'react'

export default function Calculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState(null)
  const [operation, setOperation] = useState(null)

  const calculate = (op) => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    if (isNaN(numA) || isNaN(numB)) {
      setResult('Invalid input')
      return
    }
    
    setOperation(op)
    let res
    switch (op) {
      case '+': res = numA + numB; break
      case '-': res = numA - numB; break
      case '*': res = numA * numB; break
      case '/': res = numB !== 0 ? numA / numB : '∞'; break
      default: res = 'Error'
    }
    setResult(res)
  }

  const reset = () => {
    setA('')
    setB('')
    setResult(null)
    setOperation(null)
  }

  return (
    <section className="calculator">
      <h2>Calculator</h2>
      <div className="inputs">
        <input 
          type="number" 
          value={a} 
          onChange={e => setA(e.target.value)} 
          placeholder="First number" 
        />
        <span className="operator">{operation || '?'}</span>
        <input 
          type="number" 
          value={b} 
          onChange={e => setB(e.target.value)} 
          placeholder="Second number" 
        />
      </div>
      
      <div className="buttons">
        {['+', '-', '*', '/'].map(op => (
          <button key={op} onClick={() => calculate(op)}>
            {op}
          </button>
        ))}
        <button className="reset" onClick={reset}>C</button>
      </div>
      
      {result !== null && (
        <div className="result">
          <p>= {result}</p>
        </div>
      )}
    </section>
  )
}