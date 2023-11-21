import { CSSProperties } from "react";
import styles from "./checkbox.module.css";

export type CheckboxTypes = {
    checked: boolean,
    onChange?: () => void,
    label?: string,
    labelCustomStyles?: CSSProperties,
    inputCustomStyles?: CSSProperties
}

const Checkbox = ({checked, onChange, label,labelCustomStyles, inputCustomStyles}: CheckboxTypes) =>{
    return (
      <label className={styles.checkbox_label} style={labelCustomStyles}>
        <input type="checkbox"
        className={styles.checkbox_input}
        style={inputCustomStyles}
        checked={checked}
        onChange={onChange} />
        <span className="ml-2">{label}</span>
      </label>
    );
  }
  
  export default Checkbox;