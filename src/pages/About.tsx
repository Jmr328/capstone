import Background from '../assets/car.jpg'

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-10 bg-stone-600 bg-opacity-90 text-white rounded mb-11 text-center ml-48 mr-48'>Hello. My name is Justin Roberson, I am a Full Stack Software Engineer graduate from 
          Coding Temple. Born and raised in Jacksonville, FL I spent most of my childhood playing sports and continued to do so throughout college. After the company I started 
          right out of college fell apart due to Covid-19, I began my search for a more recession proof and rewarding career. After long consideration I decided to become a 
          software engineer, not only because practically every luxory we enjoy today has some software integrated, but also, the more I learn, the more interesting it all becomes.
          I know I have only scratched the surface of what is possible, and that's all the motivation I need!
          <br />
          <br />
          <br />
          Please feel free to navigate this template I have prepared for a literacy demonstration
          </h3>
        </div>
    </div>
  )
}

export default About