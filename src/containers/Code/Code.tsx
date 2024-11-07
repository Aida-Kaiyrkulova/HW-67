import { useDispatch, useSelector } from "react-redux";
import { addNumber, removeNumber, codeCheck, resetCode } from "./codeSlice.ts";
import { RootState } from "../../app/store.ts";

const Code = () => {
  const dispatch = useDispatch();
  const { input, status, color } = useSelector(
    (state: RootState) => state.code,
  );
  const handleClick = (value: string) => {
    if (value === "<") {
      dispatch(removeNumber());
    } else if (value === "E") {
      dispatch(codeCheck());
    } else if (value === "C") {
      dispatch(resetCode());
    } else {
      dispatch(addNumber(value));
    }
  };
  const passwordHider = () => {
    if (status) {
      return status;
    }
    return "*".repeat(input.length);
  };

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          value={passwordHider()}
          placeholder="Enter PIN"
          style={{
            backgroundColor: color,
            color: color === "green" ? "white" : "black",
          }}
          readOnly
        />
      </div>
      <div className="keyboard">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "<", "0", "E", "C"].map(
          (key) => (
            <button key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default Code;
