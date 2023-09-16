const CardFeature = ({img, title, body}) => {
  return(
    <div className="w-[321px]">
      <img src={img}  alt="" className="mb-[40px] mx-auto h-[170px] w-auto" />
      <h3 className="text-lg mb-[10px] text-center">{title}</h3>
      <p className="text-darklight text-center">{body}</p>
    </div>
  )
}
export default CardFeature