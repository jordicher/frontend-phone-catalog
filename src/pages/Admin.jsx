import React, { useState } from 'react'

import phoneService from '../services/phones'

import CrudForm from '../components/Forms/CrudForm'
import IndexNavbar from '../components/Navbars/IndexNavbar'
import Footer from '../components/Footers/Footer'
import Spinner from '../components/Spinner'
import TablePhones from '../components/Tables/TablePhones'



const Admin = ({ dbPhones, setdbPhones }) => {


    const [dataToEdit, setDataToEdit] = useState(null)


    const sendFile = (dataPhone) => {

        const formImg = new FormData()
        formImg.append("fileImg", dataPhone.fileImgPhone[0])

        return phoneService.createImg(formImg).then(response => response.data.filename + ".png").catch(error => console.error(error))
    }

    const createData = async (dataPhone) => {

        if (dataPhone.hasOwnProperty('fileImgPhone')) {
            const url = await sendFile(dataPhone)
            dataPhone.imageFileName = url
        }

        const response = await phoneService.create(dataPhone)
        return setdbPhones(dbPhones.concat(response.data))
    }

    const updateData = (id, dataPhone) => {

        phoneService.edit(id, dataPhone).then(response => {
            if (!response.error) {
                let newData = dbPhones.map((element) => (element.id === id ? dataPhone : element))
                setdbPhones(newData)
            }
        }
        )
    }

    const deleteData = (id) => {

        phoneService.remove(id).then(response => {
            if (!response.error) {
                let newData = dbPhones.filter((phone) => phone.id !== id)
                setdbPhones(newData)
            }
        }
        )
    }


    return (
        <div>
            <IndexNavbar />
            <CrudForm
                createData={createData}
                updateData={updateData}
                setDataToEdit={setDataToEdit}
                dataToEdit={dataToEdit}
            />

            {!dbPhones ?
                <Spinner />
                :
                <TablePhones dbPhones={dbPhones}
                    deleteData={deleteData}
                    setDataToEdit={setDataToEdit} />

            }

            <Footer/>

        </div>
    )
}

export default Admin
