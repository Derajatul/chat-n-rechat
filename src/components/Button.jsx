const Button = ({size, color, children}) => {

  let buttonSize = ''
  if(size === "small") {
    buttonSize = "px-6 py-2.5"
  } else if(size === "large") {
    buttonSize = "px-11 py-4"
  }

  let buttonColor = ''
  if(color === "primary") {
    buttonColor = "bg-primary text-[#F4F7FF]"
  } else if(color === "secondary"){
    buttonColor = "bg-secondary text-primary"
  }

  const buttonClass = `${buttonSize} flex items-center justify-center ${buttonColor} rounded-md font-semibold`
  return(
    <button className={buttonClass}>{children}</button>
  )
}
export default Button