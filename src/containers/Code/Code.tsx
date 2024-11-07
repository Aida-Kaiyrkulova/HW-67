import { useDispatch } from 'react-redux';
import { addNumber, removeNumber, codeCheck } from './codeSlice.ts';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;



const Code = () => {
  const dispatch = useDispatch();

  const handleClick = (value: string) => {
    if (value === '<'){
dispatch(removeNumber());
     } else if (value === 'E'){
      dispatch(codeCheck());
    }
    else {
      dispatch(addNumber(value));
    }
  }
  const passwordHider = () =>{
    return '*'.repeat(input.length);
  };

  return (
    <div className="app" >
      <div className="input-container">
      <input type="text" value={passwordHider()}/>
      </div>

      <div className="keyboard">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'E'].map((key) => (
          <button key={key} onClick={() => handleClick(key)}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Code;