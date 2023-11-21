import styles from "./button.module.css";
import { ReactNode, CSSProperties } from 'react';

export type ButtonTypes = {
    children?: ReactNode,
    label?: string,
    type?: 'plain' | 'primary' | 'secondary' | 'disabled' | 'icon_primary' | 'icon_secondary' | 'icon_disabled', //add here your button classes
    customStyles?: CSSProperties,
    onClick?:() => void,
    iconSize?: string,
    fullWidth?: boolean
}

const Button = ({ children, label, type='primary', customStyles, onClick, iconSize='1', fullWidth }: ButtonTypes) => {
    return (
      <button
        onClick={onClick}
        style={{width: `${fullWidth ?'100%' : ''}`, ...customStyles}}
        className={styles[type]}>
        {type.includes('icon') &&
          <span style={{height: `${iconSize}rem`, width: `${iconSize}rem`, marginRight: `${label ? '0.5rem' : ''}`}}> 
            {children}
          </span>
        }
        {label &&
          <span>
              {label}
          </span>
        }
      </button>
    );
  }
          
  export default Button;