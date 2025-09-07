import { useState } from 'react';

export function Layout() {
  const [state, setState] = useState(0);

  return (
    <div>
      <div>{ state } - button</div>

      <button onClick={() => setState(state + 1)}>
        + 1
      </button>
    </div>
  );
}