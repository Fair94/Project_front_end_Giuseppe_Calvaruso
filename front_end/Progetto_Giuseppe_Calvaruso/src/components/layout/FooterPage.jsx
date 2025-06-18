import { Facebook, Instagram } from "lucide-react"

function Footer(){

    return(
        <>
        <div className="flex flex-col sm:flex-col md:font-mono font-bold md:flex-row bg-[#1c1c1c] text-[#fefefe] p-4
         pl-4 pr-4 justify-between ">
            <div className="border-4 border-white rounded-2xl p-4">

                <p className="lg:text-7xl">Unique,<br/> sustainable and <br/> crafted with love</p>

            </div>

            <div className=" lg:text-4xl m-4 p-4">

                <p className="text-justify "> Connect with us</p>
                <ul className="display flex justify-around pt-12"><Facebook size={40} /><Instagram size={40}/></ul>

            </div>

            <div className="lg:text-4xl m-4 p-4">
                <p>Our Contact</p>
                <ul className="p-1">
                    <li className="p-1">- shop@mail.com</li>
                    <li className="p-1">- 0039-123456789</li>
                    <li className="p-1">- Kansas Street 150</li>
                </ul>
            </div>

        </div>
        </>
    )
}


export default Footer