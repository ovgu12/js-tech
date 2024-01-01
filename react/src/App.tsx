import { FC, useState } from 'react';
import Count from './Count';
import ThemeContext from './context';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Hello {name}!</h1>
        <label>
          Dark theme
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={({ target }) =>
              target.checked ? setTheme('dark') : setTheme('light')
            }
          />
        </label>
        <Count initCount={5} />
      </div>
    </ThemeContext.Provider>
  );
};
