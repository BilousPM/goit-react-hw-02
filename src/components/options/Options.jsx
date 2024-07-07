import { useState } from 'react';

import s from './Options.module.css';

function Options({ onClick, reset, total }) {
  return (
    <section>
      <ul>
        <li>
          <button
            onClick={() => {
              onClick('good');
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClick('neutral');
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClick('bad');
            }}
          >
            Bad
          </button>
        </li>
        {total > 0 && (
          <li>
            <button onClick={reset}>Reset</button>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Options;
