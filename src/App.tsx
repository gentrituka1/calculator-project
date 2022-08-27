import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="calculator-result">
        <div className="calculator-result-text">
          <span className="calculator-result-text-value">0</span>
        </div>
      </header>
      <main>
        <div className="calculator-keys">
          <div className="calculator-keys-row-1">
            <button className="calculator-key-clear">AC</button>
            <button className="calculator-key-parentheses">(</button>
            <button className="calculator-key-parentheses">)</button>
            <button className="calculator-key-divide">÷</button>
          </div>
          <div className="calculator-keys-row-2">
            <button className="calculator-key-7">7</button>
            <button className="calculator-key-8">8</button>
            <button className="calculator-key-9">9</button>
            <button className="calculator-key-multiply">x</button>
            </div>
          <div className="calculator-keys-row-3">
            <button className="calculator-key-4">4</button>
            <button className="calculator-key-5">5</button>
            <button className="calculator-key-6">6</button>
            <button className="calculator-key-subtract">-</button>
            </div>
          <div className="calculator-keys-row-4">
            <button className="calculator-key-1">1</button>
            <button className="calculator-key-2">2</button>
            <button className="calculator-key-3">3</button>
            <button className="calculator-key-add">+</button>
            </div>
          <div className="calculator-keys-row-5">
            <button className="calculator-key-0">0</button>
            <button className="calculator-key-decimal">.</button>
            <button className="calculator-key-equals">=</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
