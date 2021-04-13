import React from 'react'

import IndexNavbar from '../components/Navbars/IndexNavbar'
import Footer from '../components/Footers/Footer'
import ListPhones from '../components/ListPhones'
import Spinner from '../components/Spinner'


const Catalog = ({ dbPhones }) => {

    return (
        <div>
            <IndexNavbar />
            {
                !dbPhones ?
                    <Spinner />
                    :
                    dbPhones.length !== 0 ? <ListPhones phones={dbPhones} /> :

                        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
                            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                                    <div className="border-t border-gray-200 text-center pt-8">
                                        <h1 className="text-6xl font-medium py-8">oops! No data</h1>
                                        <p className="text-2xl pb-8 px-12 font-medium">There is no data.Use the admin form to add some data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            }

            <Footer />

        </div>
    )
}

export default Catalog
