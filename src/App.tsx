import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <header className="calculator-result">
          <div className="calculator-result-text">
            <input type="number" id="action" placeholder="0"></input>
          </div>
        </header>
        <main>
          <div className="calculator-keys">
            <div className="calculator-keys-row-1 row">
              <button
                className="calculator-key-clear keys"
                onClick={() => {
                  action.value = "0";
                }}
              >
                AC
              </button>
              <button
                className="calculator-key-parentheses keys"
                onClick={() => {
                  action.value = action.value + "(";
                }}
              >
                (
              </button>
              <button
                className="calculator-key-parentheses keys"
                onClick={() => {
                  action.value = action.value + ")";
                }}
              >
                )
              </button>
              <button
                className="calculator-key-divide keys"
                onClick={() => {
                  action.value = action.value + "/";
                }}
              >
                ÷
              </button>
            </div>
            <div className="calculator-keys-row-2 row">
              <button
                className="calculator-key-7 keys"
                onClick={() => {
                  action.value = action.value + "7";
                }}
              >
                7
              </button>
              <button
                className="calculator-key-8 keys"
                onClick={() => {
                  action.value = action.value + "8";
                }}
              >
                8
              </button>
              <button
                className="calculator-key-9 keys"
                onClick={() => {
                  action.value = action.value + "9";
                }}
              >
                9
              </button>
              <button
                className="calculator-key-multiply keys"
                onClick={() => {
                  action.value = action.value + "*";
                }}
              >
                x
              </button>
            </div>
            <div className="calculator-keys-row-3 row">
              <button
                className="calculator-key-4 keys"
                onClick={() => {
                  action.value = action.value + "4";
                }}
              >
                4
              </button>
              <button
                className="calculator-key-5 keys"
                onClick={() => {
                  action.value = action.value + "5";
                }}
              >
                5
              </button>
              <button
                className="calculator-key-6 keys"
                onClick={() => {
                  action.value = action.value + "6";
                }}
              >
                6
              </button>
              <button
                className="calculator-key-subtract keys"
                onClick={() => {
                  action.value = action.value + "-";
                }}
              >
                -
              </button>
            </div>
            <div className="calculator-keys-row-4 row">
              <button
                className="calculator-key-1 keys"
                onClick={() => {
                  action.value = action.value + "1";
                }}
              >
                1
              </button>
              <button
                className="calculator-key-2 keys"
                onClick={() => {
                  action.value = action.value + "2";
                }}
              >
                2
              </button>
              <button
                className="calculator-key-3 keys"
                onClick={() => {
                  action.value = action.value + "3";
                }}
              >
                3
              </button>
              <button
                className="calculator-key-add keys"
                onClick={() => {
                  action.value = action.value + "+";
                }}
              >
                +
              </button>
            </div>
            <div className="calculator-keys-row-5 row">
              <button
                className="calculator-key-delete keys"
                onClick={() => {
                  action.value = action.value.slice(0, -1);
                }}
              >
                DELETE
              </button>
              <button
                className="calculator-key-0 keys"
                onClick={() => {
                  action.value = action.value + "0";
                }}
              >
                0
              </button>
              <button
                className="calculator-key-decimal keys"
                onClick={() => {
                  action.value = action.value + ".";
                }}
              >
                .
              </button>
              <button
                className="calculator-key-equals keys"
                onClick={() => {
                  action.value = eval(action.value);
                }}
              >
                =
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
