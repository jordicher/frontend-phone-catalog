import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom'

import CardPhone from './Cards/CardPhone'

const ListPhones = ({ phones }) => {
    const history = useHistory();


    const handleClickOpenMobile = (id) => {
        history.push(`/phone/${id}`)
    }

    return (
        <div className="container mx-auto flex items-end flex-wrap pt-4 pb-12">

            {
                phones.map(phone => <CardPhone key={uuidv4()} phone={phone} handleClickOpenMobile={handleClickOpenMobile} />)
            }

        </div>
    )
}

export default ListPhones
