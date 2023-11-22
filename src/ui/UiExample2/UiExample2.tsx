
type Props = {
    data: string|undefined|null
}

export default function UiExample2({data}: Props) {
  return (
    <div>
    {
        <div>{data}1</div>
    }
    {
        <div>{data}2</div>
    }
      <button>Reload</button>
    </div>
  )
}