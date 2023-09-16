const ReasonCard = ({icon, title, body}) => {
  return(
    <div className="flex gap-[25px] justify-center items-start">
      <div className="p-[14px] bg-darkextralight rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="mb-[10px] text-lg font-semibold">{title}</h3>
        <p className="text-darklight">{body}</p>
      </div>
    </div>
  )
}
export default ReasonCard