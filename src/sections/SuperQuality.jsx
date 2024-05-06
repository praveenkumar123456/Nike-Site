import Button from "../components/Button";
import {shoe8} from '../assets/images';
const SuperQuality = ()=>{
    return(
        <section
            id="about-us"
            className="flex justify-between
            items-center max-lg:flex-col
            gap-10 w-full max-container"
        ><div className="flex flex-1
            flex-col">
                <h2 className="mt-10 font-palanquin text-4xl 
                capitalize font-bold lg:max-w-lg">
                    We Provide You
                    <br/>
                    <span className="text-red-500 inline-block">Super Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium comfort and style, our
                    meticulously crafted footwear is designed to
                    elevate your experience, providing you with 
                    unmatched quality, innovation, and a touch of
                    elegance.
                </p>
                <p className="mt-6 mb-2 lg:max-w-lg info-text">Our dedication to detail and excellence
                ensures your satisfaction</p>
                <div className="mt-6">
                    <Button label="View Details"/>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            
            </div>
        </section>
    )
}

export default SuperQuality;