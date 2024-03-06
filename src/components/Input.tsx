import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef((props: InputType, ref) => {
  return (
    <TextField
        variant='outlined'
        margin='normal'
        inputRef={ref}
        fullWidth
        type='text'
        {...props}  // 'spread operator'
        className='bg-sky-600 hover:bg-white rounded shadow-md bg-opacity-40'
    >

    </TextField>
  )
});

export default Input