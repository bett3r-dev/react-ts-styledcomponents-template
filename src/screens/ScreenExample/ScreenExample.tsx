import { useEffect, useState } from "react";
import useBackend, { BackendContextType } from "../../hooks/useBackend"
import UiExample1 from "../../ui/UiExample1/UiExample1"
import UiExample2 from "../../ui/UiExample2/UiExample2"

type Props = {}

export default function ScreenExample({}: Props) {
    // const { backend } = useBackend() as BackendContextType;
    const [data, setData] = useState<string|null>();
    useEffect(() => {
        //backend fetch
        setData('HelloWorld')
    },[])
  return (
    <div>
        <UiExample1 setData={setData}/>
        <UiExample2 data={data}/>
    </div>
  )
}