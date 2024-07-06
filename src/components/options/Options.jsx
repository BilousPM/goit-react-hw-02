import { useState } from 'react';

import s from './Options.module.css';

function Options({ onClick, value }) {
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
        <li>
          <button
            onClick={() => {
              onClick(777);
            }}
          >
            Reset
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Options;
