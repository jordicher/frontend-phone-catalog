import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import phoneService, { URLIMG }  from '../../services/phones'

import Spinner from '../Spinner'

const FullCardPhone = () => {
    const [phone, setPhone] = useState()

    const { id } = useParams()

    useEffect(() => {
      
        phoneService.getOne(id)
            .then(response =>
            {  if (response.data) {
                  setPhone(response.data)
              }}
            )
    }, [id])

    return (

        <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://picsum.photos/1000?grayscale')" }}>

            {
                phone
                    ?
                    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto">                        

                        < div className="w-full lg:w-7/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-80 mx-6 lg:mx-0 my-2" >

                            <div className="p-4 md:p-12 text-center lg:text-left">

                             
                                <img className="block lg:hidden mx-auto h-48 w-48 bg-cover bg-center" src={URLIMG + phone.imageFileName} alt={"The front and back of the mobile " + phone.name}/>
                                


                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{phone.name}</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>



                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" />
                                    </svg>
                                    {phone.color}
                                </p>

                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M18.342 0l-2.469 2.47 2.121 2.121-.707.707-2.121-2.121-1.414 1.414 1.414 1.414-.707.707-1.414-1.414-1.414 1.414 1.414 1.414-.707.707-1.414-1.414-1.414 1.414 2.121 2.122-.707.707-2.121-2.121-1.414 1.414 1.414 1.414-.708.707-1.414-1.414-1.414 1.414 1.414 1.414-.708.709-1.414-1.414-1.414 1.413 2.121 2.121-.706.706-2.122-2.121-2.438 2.439 5.656 5.657 18.344-18.343z" />
                                    </svg>
                                    {phone.screen}
                                </p>

                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 2h-2v-2h2v2zm-8 6h-2v2h2v-2zm0-5c0-.551.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3v4h2v-4zm0 8h-2v2h2v-2zm14-11h-2v2h2v-2zm-3 0h-2v2h2v-2zm-11 14h-2v2h2v-2zm18-2.042h-2.277l-2.36 5.386-2.883-7.93-2.442 5.78-2.071-4.14-1.129 1.966h-2.838v6.98h16v-8.042zm-16 .063h2.259l1.768-3.081 1.935 3.866 2.589-6.126 2.899 7.976 1.62-3.697h2.93v-6.959h-16v8.021zm10 11.979h2v-2h-2v2zm8-11h2v-2h-2v2zm-20 8v-4h-2v4c0 1.657 1.343 3 3 3h4v-2h-4c-.552 0-1-.449-1-1zm20 0c0 .551-.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3v-4h-2v4zm0-11h2v-2h-2v2zm0 6h2v-2h-2v2zm2-13c0-1.657-1.343-3-3-3h-4v2h4c.552 0 1 .449 1 1v4h2v-4zm-16 21h2v-2h-2v2zm3 0h2v-2h-2v2z" /></svg> {phone.processor}</p>

                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M13 7H7v6h6V7z" />
                                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" />
                                    </svg>
                                    {phone.ram} GB RAM</p>


                                <p className='pt-8 text-base font-bold'> {phone.description}</p>


                                <div className="pt-12 pb-8">
                                    <div className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full text-center">
                                        {phone.price} €
</div>
                                </div>

                            </div>

                        </div >


                        <div className="w-full lg:w-5/12">

                            <img className="rounded-none lg:rounded-lg hidden lg:block" src={URLIMG + phone.imageFileName} alt={"The front and back of the mobile " + phone.name}
                            />



                        </div>

                    </div >
                    : 
                    <Spinner/>
                    }




        </div >

    )
}

export default FullCardPhone
