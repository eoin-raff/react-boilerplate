import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count > 10 && (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}
export default hot(module)(App);
