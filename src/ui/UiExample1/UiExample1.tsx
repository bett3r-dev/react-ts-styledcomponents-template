import { useState } from "react"
import TextField from "../../components/TextField"

type Props = {
  setData: (data: string|null|undefined) => void
}

export default function UiExample1({setData}: Props) {
  const [textFieldData, setTextFieldData] = useState<string|null>()
  return (
    <div>
      <TextField
            autoFocus
            onChange={(e) => setTextFieldData(e.target.value)}
          />
      <button onClick={()=> setData(textFieldData)}>Submit</button>
    </div>
  )
}