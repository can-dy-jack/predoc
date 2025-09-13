import { useState } from 'react';
import { Routers } from './Routers';

import 'uno.css';

export function Layout() {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1 p="2" m="4">
        Unocss
      </h1>

      <div>{ state } - button</div>

      <button onClick={() => setState(state + 1)}>
        + 1
      </button>

      <Routers />
    </div>
  );
}