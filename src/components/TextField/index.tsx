import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react'
import InputSuccessMessage from '../SuccessMessage'
import InputErrorMessage from '../ErrorMessage'
import { Icon_Textfield_Base, Icon_Textfield_Icon_Base, Icon_Textfield_Input_Base, Input_Label_Base, Textfield_Base, Textfield_Input_Base } from "./TextField.styles";

export interface TextFieldTypes extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode,
  placeholder?: string,
  customStyles?: CSSProperties,
  fullWidth?: boolean,
  inputCustomStyles?: CSSProperties,
  label?: string | number,
  labelCustomStyles?: CSSProperties,
  icon?: boolean,
  iconCustomStyles?: CSSProperties,
  iconRight?: boolean,
  successMessage?: string,
  errorMessage?: string,
  type?: "button" | "checkField" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
}

const TextField = ({children, placeholder, customStyles, fullWidth, inputCustomStyles, label, labelCustomStyles, icon, iconCustomStyles, iconRight=false, successMessage, errorMessage,type="text", ...rest}: TextFieldTypes) =>{
  return (
    <Textfield_Base style={{width: `${fullWidth ?'100%' : ''}`, ...customStyles}}>
      {label && <Input_Label_Base htmlFor="field-content" style={labelCustomStyles}>{label}</Input_Label_Base>}
      {icon ?
        <Icon_Textfield_Base>
          <Icon_Textfield_Icon_Base style={{right: `${iconRight ? '0' : ''}`, left: `${iconRight ? '' : '0'}`, ...iconCustomStyles}}>
              {children}
          </Icon_Textfield_Icon_Base>
          <Icon_Textfield_Input_Base type={type} placeholder={placeholder} style={{paddingRight:`${iconRight ? '10' : ''}`, paddingLeft:`${iconRight ? '' : '10'}`, ...inputCustomStyles}} {...rest}/>
        </Icon_Textfield_Base>
        :
        <Textfield_Input_Base type={type} placeholder={placeholder} style={inputCustomStyles} {...rest} />
      }
      {successMessage && <InputSuccessMessage message={successMessage} />}
      {errorMessage && <InputErrorMessage message={errorMessage} />}
    </Textfield_Base>
  );
}

export default TextField;

