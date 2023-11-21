import { ReactNode } from "react"
import { AlignXY } from "./CenterComponent.styles";

type CenterComponentTypes = {
  children: ReactNode
}

const CenterComponent = ({children}: CenterComponentTypes) => {
  return (
    <AlignXY>
      {children}
    </AlignXY>
  )
}

export default CenterComponent