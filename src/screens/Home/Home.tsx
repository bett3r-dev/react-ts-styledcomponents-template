import { VideoCameraIcon } from "@heroicons/react/24/solid"
import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"
import TextField from "../../components/TextField"
import { useState } from "react"
import CenterComponent from "../../hoc/CenterComponent"
import Spinner from "../../components/Spinner"
import Select from "../../components/Select"
import Container from "../../components/Container"

type Props = {}

export default function Home({}: Props) {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  return (
    <div>
      <Button label={'Click me!'} fullWidth />
      <Button label={'Click me!'} type={'secondary'} />
      <Button label={'Click me!'} type={'disabled'} />
      <Button type={'icon_primary'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </Button>
      <Button label={'Click me!'} type={'icon_primary'} customStyles={{borderRadius: "0.125rem" }}>
        <VideoCameraIcon/>
      </Button>
      <Button type={'icon_secondary'}>
        <VideoCameraIcon/>
      </Button>
      <CenterComponent>
      <Button label={'Click me!'} type={'icon_secondary'} customStyles={{borderRadius: "0.125rem" }}>
        <VideoCameraIcon/>
      </Button>
      </CenterComponent>
      <Button type={'icon_disabled'}>
        <VideoCameraIcon/>
      </Button>
      <Button label={'Click me!'} type={'icon_disabled'} customStyles={{borderRadius: "0.125rem" }}>
        <VideoCameraIcon/>
      </Button>
      <Checkbox
      checked={checked1}
      onChange={() => setChecked1(!checked1)}
      label={'label'}
      ></Checkbox>
      <Checkbox
      checked={checked2}
      onChange={() => setChecked2(!checked2)}
      ></Checkbox>
      <TextField
      label={'label'}
      ></TextField>
      <TextField
      fullWidth
      ></TextField>
      <Spinner/>
      <CenterComponent><Spinner/></CenterComponent>
      <Select options={['opcion 1', 'opcion2', 'opcion3']} />
      <Container
      >
         <TextField
      fullWidth
      />
      <Select options={['opcion 1', 'opcion2', 'opcion3']} />
      <Spinner/>
      </Container>
    </div>
  )
}