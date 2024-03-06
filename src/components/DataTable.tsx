import { useState } from 'react';
import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, /*hide: true*/},
  { field: 'name', headerName:'Year' , flex: 1},
  { field: 'email', headerName: 'Make', flex: 1 },
  { field: 'phone_number', headerName: 'Model', flex: 1 },
  { field: 'address', headerName: "Who's Car?", flex: 2 }
]

function DataTable() {
  const [open, setOpen] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  //TODO: write useGetData hook and selection modal state change content

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection Model: ${selectionModel}`)
    setTimeout( () => {window.location.reload() }, 500)
  }

  return (
    <>
      <Modal 
        id={selectionModel[0]}
        open={open} 
        onClose={handleClose} 
      />
      <div className="flex flex-row bg-">
        <div>
          <button
            className="p-2 ml-10 bg-stone-500 text-white rounded-xl mt-28 m-4 place-content-center hover:bg-white hover:text-sky-600 hover:shadow-md shadow-white"
            onClick={() => handleOpen()}
          >
            Add Item
          </button>
        </div>
        <button onClick={() => handleClose()}></button>
        <button onClick={handleOpen} className="p-2 ml-10 bg-stone-500 text-white rounded-xl mt-28 m-4 hover:bg-white hover:text-sky-600 hover:shadow-md shadow-white">Update Item</button>
        <button onClick={deleteData} className="p-2 ml-10 bg-stone-500 text-white rounded-xl mt-28 m-4 hover:bg-white hover:text-sky-600 hover:shadow-md shadow-white">Delete Item</button>
      </div>
      <div className={ open ? "hidden" : "container mx-10 my-1 flex flex-col"} 
      style={{ height: 400, width: '100%' }}
      >
        <h2 className="p-3 bg-stone-500 text-white text-center my-2 text-lg font-semibold rounded shadow-lg">The Line-Up</h2>
        <DataGrid rows={contactData} columns={columns} //rowsPerPageOptions={[5, 10, 20]}
        className='bg-stone-500 shadow-lg'
        checkboxSelection={true} 
        onRowSelectionModelChange={ (item:any) => {
          setSelectionModel(item)
        }}
        />
      </div>
    </>
  );
}

export default DataTable;
