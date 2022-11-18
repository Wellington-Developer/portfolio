import './Button.css'

export const Button = ({text, link}) => {
  return (
    <a href={link} className="default-button">
      {text}
    </a>
  )
}