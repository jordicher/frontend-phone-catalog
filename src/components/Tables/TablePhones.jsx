import React from 'react'
import DataTable from 'react-data-table-component';

const TablePhones = ({ dbPhones, setDataToEdit, deleteData }) => {

  const columns = [
    { selector: 'name', name: 'Name', maxWidth: "200px", sortable: true, },
    { selector: 'manufacturer', name: 'Manufacturer', maxWidth: "100px", sortable: true, },
    { selector: 'description', name: 'Description', maxWidth: "300px", sortable: true, },
    { selector: 'color', name: 'Color', maxWidth: "100px", sortable: true, },
    { selector: 'imageFileName', name: 'Image', maxWidth: "200px", sortable: true, },
    { selector: 'price', name: 'Price', maxWidth: "100px", sortable: true, },
    { selector: 'processor', name: 'Processor', maxWidth: "200px", sortable: true, },
    { selector: 'ram', name: 'RAM', maxWidth: "100px", sortable: true, },
    {
      name: 'Options',
      sortable: false,
      cell: row => <div className="space-x-2">
        <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-green-400 to-green-600 transform hover:scale-110" onClick={() => { setDataToEdit(row) }}>Edit</button>
        <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110" onClick={() => deleteData(row.id)}>Delete</button>
      </div>
    }
  ]
  return (
    <>
    
      <div className="container mx-auto">

        <DataTable columns={columns} data={dbPhones} pagination={true}
          highlightOnHover />

      </div>

    </>
  );

}

export default TablePhones
