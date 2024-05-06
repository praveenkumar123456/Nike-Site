const ServiceCard = ({imgURL, label, subtext})=>{
    return(
        <div className="flex-1 sm:w-[350px]
        sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center
            bg-red-500 rounded-full">
                <img src={imgURL} alt={label}
                width={24} height={24}/>
            </div>
            <h3 className="mt-5 text-3xl leading-normal font-bold">{label}</h3>
            <p className="mt-3 break-words text-lg leading-normal text-gray-500">{subtext}</p>
        </div>
    )
}

export default ServiceCard;