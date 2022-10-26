import './Button.css'

export const Button = ({text}) => {
  return (
    <button className="default-button">
      {text}
    </button>
  )
}