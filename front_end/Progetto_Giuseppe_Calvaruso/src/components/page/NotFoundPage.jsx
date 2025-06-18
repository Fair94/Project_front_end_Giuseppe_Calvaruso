import chowchowImg from '../../assets/chowchow.jpg'

function NotFound(){
    return(
    
        <div className=' flex flex-col items-center border-8 m-10 border-[#d7e5d3] bg-[#d5d0c6] rounded-4xl'>
        <p className="lg:text-6xl text-center p-4 m-4  bg-[#f7f1ec] rounded-4xl "> OOPS.... SOMETHING GOES WRONG</p>
        <p className="text-4xl text-center p-4 m-4 bg-[#f7f1ec] rounded-4xl">I've searched everything, but I didn't find what you're searching for</p>
        <img src={chowchowImg} alt="My awesome chowchow" width={200} />
        <p className="text-4xl text-center p-4 m-4  bg-[#f7f1ec] rounded-4xl">"I'm very sorry, It's my first day and I'm just a Chow" </p>
        </div>)

}


export default NotFound