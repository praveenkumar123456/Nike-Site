const ShowCard = (props)=>{
    const handleClick = () =>{
        props.changeBigShoeImg(props.imgUrl.bigShoe)
    }
    return(
        <div className={`border-2 rounded-xl
        ${props.bigShoeImg === props.imgUrl.bigShoe 
        ? `border-red-500`:``}
        cursor-pointer max-sm:flex-1`}
        onClick={handleClick}>
            <div className="flex justify-center items-center
            bg-[#DDA0DD] bg-center bg-cover sm:w-40
            sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={props.imgUrl.thumbnail}
                />
            </div>
        </div>
    )
}

export default ShowCard;