const Button = (props)=>{
    return(
        <button className={`flex justify-center items-center gap-2
        px-7 py-4 border font-cursive text-lg leading-none
        ${props.backgroundColor ? 
        `${props.backgroundColor} ${props.textColor} ${props.borderColor} rounded-full`: 
        `bg-red-500 text-white
        rounded-full border-red-500`}${props.fullWidth? "w-full": ""}`}>
            {props.label}
           {props.iconURL?<img src={props.iconURL}
            className="ml-2 rounded-full w-5 h-5"/>
            :<></>}
        </button>
    )
}

export default Button;
