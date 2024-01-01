import {
  useContext,
  useEffect,
  useId,
  useReducer,
  useRef,
  useState,
} from 'react';
import countReducer from './countReducer';
import ThemeContext from './context';

const Count = ({ initCount = 0, end = 10 }) => {
  const [count, dispatch] = useReducer(countReducer, initCount);
  const [stopped, setStopped] = useState(false);
  const inputId = useId();
  const context = useContext(ThemeContext);
  const refCounter = useRef(null);

  const onCta = () => {
    dispatch({ type: 'reset', initCount });
    setStopped(false);
  };

  useEffect(() => {
    const __poll = setInterval(() => {
      if (count >= end) {
        refCounter.current.classList.remove('focus');
        setStopped(true);
      } else {
        refCounter.current.classList.add('focus');
        dispatch({ type: 'add' });
      }
    }, 1000);
    return () => clearInterval(__poll);
  });

  return (
    <>
      <p>
        Count is &nbsp;
        <input
          id={context + '_' + inputId}
          type="text"
          readOnly
          value={count}
          ref={refCounter}
        />
      </p>
      <p>{stopped ? 'Stopped' : 'Running'}</p>
      <button onClick={onCta}>{stopped ? 'Start' : 'Stop'}</button>
    </>
  );
};

export default Count;
