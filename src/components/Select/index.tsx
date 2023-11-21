import { CSSProperties, useState } from 'react';
import SuccessMessage from '../SuccessMessage'
import ErrorMessage from '../ErrorMessage'
import { useEffect } from 'react';
import styles from "./select.module.css";

export type SelectTypes = {
    options: any[],
    label?: string,
    placeholder?: string,
    preselected?: string,
    compoundOptionsLabelKey?: string | any, //es la key del objeto que queres que se vea en la opcion seleccionable
    multiSelect?: boolean,
    successMessage?: string,
    errorMessage?:string,
    selectedCallback?:(selectedOptions:any)=>void,
    customSelectedStyles?: CSSProperties,
    customUnselectedStyles?: CSSProperties,
    customListStyles?: CSSProperties,
    customStyles?: CSSProperties,
    customLabelStyles?:CSSProperties,
    width?: number
}

export default function Select({preselected, options=[], compoundOptionsLabelKey='', placeholder='Choose item...', label, multiSelect=false, successMessage, errorMessage, selectedCallback, customStyles,customLabelStyles, customSelectedStyles, customUnselectedStyles, customListStyles, width=100}:SelectTypes) {
  const [selected, setSelected] = useState(preselected ? [preselected] : []);
  const [displayOptions, setDisplayOptions] = useState(false);

  const handleSelectItem = (option:any) => {
    let selectedOptions = [...selected];
    if(multiSelect){
      if ( selected.includes(option) ) selectedOptions = selectedOptions.filter(selected => selected !== option)
      else selectedOptions.push(option)
    }else{
      selectedOptions = [option]
    }
    setSelected(selectedOptions)
    setDisplayOptions(false)
    selectedCallback && selectedCallback(selectedOptions)
  }
  useEffect(() =>{
    setSelected(preselected ? [preselected] : [])
  },[preselected])
  //TODO: ver lo del marginTop?
  return (
    <div style={{marginTop: '0.75rem', width: `${width}%`}}>
      <label id='label' className={styles.input_label} style={customLabelStyles}>
        {label}
      </label>
      <div style={{position: "relative", marginTop: "0.5rem"}}>
        <button onClick={() => setDisplayOptions(!displayOptions)} type='button' className={styles.select} > 
          <span style={{display: "flex", alignItems: "center"}}>
            { 
              compoundOptionsLabelKey.length ?
              <span style={{display: "block", marginLeft: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                {selected.length ?  selected.map(option => option[compoundOptionsLabelKey]).join(', ') : placeholder}
              </span>
              :
              <span style={{display: "block", marginLeft: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                {selected.length ?  selected.join(', ') : placeholder}
              </span>
            }
          </span>
          <span style={{display: "flex", position: "absolute", top: "0", bottom: "0", right: "0", paddingRight: "0.5rem", marginLeft: "0.75rem", alignItems: "center", pointerEvents: "none",}}> 
            <svg style={{color: "#9CA3AF", width: "1.25rem", height: "1.25rem" }} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fillRule='evenodd' d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </span>
        </button>
        {displayOptions && 
          <ul onMouseLeave={() => setDisplayOptions(false)} className={styles.display_option} style={customListStyles} >
            {options.map((option, index) => {
              if(compoundOptionsLabelKey){
                return(
                  <li onClick={(e) => { e.stopPropagation(); handleSelectItem(option);}} key={index} className={selected.includes(option) ? styles.select_selected : styles.select_unselected} style={selected.includes(option) ? customSelectedStyles : customUnselectedStyles} id={`listbox-option-${index}`}>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <span style={{display: "block", marginLeft: "0.75rem", fontWeight: "400", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",}}>
                        {option[compoundOptionsLabelKey]}
                      </span>
                    </div>
                  {selected.includes(option)  &&
                    <span style={{display: "flex", position: "absolute", top: "0", bottom: "0", right: "0", color: "#ffffff", alignItems: "center", }}>
                      <svg style={{width: "1.25rem", height: "1.25rem", }} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </span>
                    }
                  </li>
                  )
              }else{
              return( 
              <li onClick={(e) => { e.stopPropagation(); handleSelectItem(option);}} key={index} className={selected.includes(option) ? styles.select_selected : styles.select_unselected} style={selected.includes(option) ? customSelectedStyles : customUnselectedStyles} id={`listbox-option-${index}`}>
                <div style={{display: "flex", alignItems: "center",}}>
                  <span style={{display: "block", marginLeft: "0.75rem", fontWeight: "400", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",}}>
                    {option}
                  </span>
                </div>
              {selected.includes(option)  &&
                <span style={{display: "flex", position: "absolute", top: "0", bottom: "0", right: "0", paddingRight: "1rem", color: "#ffffff", alignItems: "center",}}>
                  <svg style={{width: "1.25rem", height: "1.25rem", }} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                </span>
                }
              </li>
              )
            }
            })}
          </ul>
      }
      </div>
      {successMessage && <SuccessMessage message={successMessage} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
