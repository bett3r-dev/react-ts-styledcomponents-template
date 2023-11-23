import { CSSProperties } from "react";

import styles from "./spinner.module.css";
import { Spinner_Circle, Spinner_Path, Spinner_Svg } from "./Spinner.styles";

export type SpinnerTypes = {
  customStyles?: CSSProperties;
};

function Spinner({ customStyles }: SpinnerTypes) {
  return (
    <Spinner_Svg
      style={customStyles}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Spinner_Circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></Spinner_Circle>
      <Spinner_Path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></Spinner_Path>
    </Spinner_Svg>
  );
}

export default Spinner;
