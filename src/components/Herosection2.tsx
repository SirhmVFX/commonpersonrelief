import Image from "next/image"
import Button from "./Button"

const Herosection2 = () => {
    return (
        <div className="h-screen relative">

            <Image src={"/images/whero.png"} width={10000} height={10000} alt="img" className="w-full h-full object-cover absolute" />
            <div className="absolute top-0 bottom left-0 right-0 h-full flex flex-col items-center pt-32 gap-4 ">

                <h1 className="text-white agr leading-[60px] text-[61px] text-center w-4/6">Empowering Vulnerable Communities Across Africa, One Step at a Time.</h1>
                <p className="text-white text-xl pop w-[40%] text-center">Creating Lasting Change Through Compassion, Equity, and Sustainable Development.</p>
                <div className="flex items-center gap-6">
                    <Button type="link" url="/who-we-are" title="Learn More" classname="bg-primarycolor text-white"/>
                    <Button type="link" url="/who-we-are" title="Donate Now" classname="bg-[#D6FF81] text-black"/>
                </div>

            </div>

            

        </div>
    )
}

export default Herosection2