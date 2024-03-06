import Background from '../assets/car.jpg'

function Contact() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h1 className='p-10 bg-stone-600 bg-opacity-90 text-white rounded mb-11 text-center'>Justin Roberson - Software Engineer <br />Robersonj267@yahoo.com <br />904-728-3322</h1>
        </div>
    </div>
  )
}

export default Contact