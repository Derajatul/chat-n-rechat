const CardCount = ({title, count, icon}) => {
  return(
    <div className="flex gap-x-[34px]">
      <div className="w-[24px] h-[24px]">
        {icon}
      </div>
      <div>
        <h3 className="font-xs uppercase text-darklight mb-2">{title}</h3>
        <h2 className="text-dark text-2xl font-semibold">{count}</h2>
      </div>
    </div>
  )
}
export default CardCount