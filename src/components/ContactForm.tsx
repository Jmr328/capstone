// import { useSubmit } from "react-router-dom"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseEmail, chooseAddress, choosePhone } from "../redux/slices/RootSlice"; 

// interfaces

interface ContactFormProps {
    id?: string
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id) {
        server_calls.update(props.id, data)
        console.log(`Updated: ${ data.name } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset()
    } else {
        //use dispatch to update the state of the store
        dispatch(chooseName(data.name));
        dispatch(chooseEmail(data.email));
        dispatch(choosePhone(data.phone_number));
        dispatch(chooseAddress(data.address));

        server_calls.create(store.getState())
        setTimeout(() => {window.location.reload()}, 1000);
    }

  }

  return (

    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name" className="text-white">Year</label>
                {/* add input component here */}
                <Input {...register('name')} name="name" placeholder="What Year is the Vehicle?"/>
            </div>
            <div>
                <label htmlFor="email" className="text-white">Make</label>
                <Input {...register('email')} name="email" placeholder="What Make is the Vehicle?"/>
            </div>
            <div>
                <label htmlFor="phone_number" className="text-white">Model</label>
                <Input {...register('phone_number')} name="phone_number" placeholder="What Model is the Vehicle?"/>
            </div>
            <div>
                <label htmlFor="address" className="text-white">Owner</label>
                <Input {...register('address')} name="address" placeholder="Who owns the Vehicle?"/>
            </div>
            <div className="flex p-1">
                <button 
                className="flex justify-start m-3 bg-white p-2 rounded-xl text-sonte-500 hover:text-sky-600 shadow-md hover:shadow-lg"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm