import aboutImg from '../../assets/About.png'



function About(){

    return(
    <div className=" p-4 m-4 lg:flex justify-around">
        <div className="bg-[#f7f1ec] lg:m-10 lg:rounded-4xl lg:shadow-2xl " >
            <p className="text-2xl pt-10 pl-10 text-[#4c6342]">How it Started</p>
            <p className="lg:text-8xl p-10">Our Dream is <br/>Global Learning <br/>Transformation</p>
            <p className="p-10 font-semibold">Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus ex sapien vitae pellentesque <br/> sem placerat in. 
               Cursus mi pretium tellus duis convallis tempus leo. Aenean sed diam urna<br/> tempor pulvinar vivamus fringilla. 
               Nec metus bibendum egestas iaculis massa nisl malesuada. <br/> Integer nunc posuere ut hendrerit semper vel class.
               Taciti sociosqu ad litora torquent per conubia <br/>nostra. Himenaeos orci varius natoque penatibus et magnis dis. 
               Montes nascetur ridiculus mus<br/> donec rhoncus eros lobortis.</p>
        </div>
        <div className="bg-[#f7f1ec] m-10 rounded-4xl shadow-2xl ">
            <div><img src={aboutImg} alt="" width={600} className=' rounded-4xl' /></div>
            <div className=' lg:grid grid-cols-2 gap-10'>
                <div className='rounded-4xl shadow-2xl p-4 m-4 bg-[#4c6342]'><p className='text-4xl'>3.5</p><p>Years Experience</p></div>
                <div className='rounded-4xl shadow-2xl p-4 m-4 bg-[#4c6342]'><p className='text-4xl'>23</p><p>Project Challenge</p></div>
                <div className='rounded-4xl shadow-2xl p-4 m-4 bg-[#4c6342]'><p className='text-4xl'>830+</p><p>Positive Reviews</p></div>
                <div className='rounded-4xl shadow-2xl p-4 m-4 bg-[#4c6342]'><p className='text-4xl'>100k</p><p>Trusted Products</p></div>

            </div>

        </div>



    </div>
    )
}


export default About