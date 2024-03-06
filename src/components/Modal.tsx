// import React from 'react'
import ContactForm from './ContactForm';

type Props = { // could use interface instead of type
    id?: string;
    open?: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1
            justify-center align-middle bg-black bg-opacity-75'
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-stone-500 shadow-xl rounded'
                onClick={(e) =>{
                    e.stopPropagation()
                }}
            > 
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-white p-2 rounded-xl text-stone-500 hover:text-sky-600 shadow-md hover:shadow-lg"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <ContactForm id={ props.id } />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Modal