import React, { useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit}) => {
    
    const { register, formState: { errors }, handleSubmit, reset} = useForm();

    const [requiredFile, setRequiredFile] = useState(false)
    
    const onSubmit = (dataForm, e) => {                
        
        if (dataToEdit === null) {  
            createData(dataForm)         
        }else{          
            updateData(dataForm.id, dataForm)
        }

        e.target.reset();   
        setRequiredFile(false)     
        setDataToEdit(null)        
    }
     
    useEffect(()=>{
        if (dataToEdit) {
          return reset(dataToEdit)     
        }
    },[dataToEdit, reset])

    return (
        <>
            <div>                
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-gray-500 text-lg mt-3 mb-6 uppercase font-extrabold">{dataToEdit ? "Edit" : "Create"} Phone</h4>


                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name

                                        <input
                                                type="text"
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                placeholder="Xiaomi Redmi Note 10"
                                                {...register('name', { 
                                                    required: { value : true, message: "Required"}, 
                                                    minLength:{ value : 3, message: "Min length is 3"}, 
                                                    maxLength: { value : 50, message: "Max length is 50"}})} />

                                                {errors.name && <span role="alert" className="text-red-600">{errors.name.message}</span>}
                                                 </label>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="manufacturer"
                                        >
                                            Manufacturer

                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Xiaomi"
                                            {...register('manufacturer', { 
                                                required: { value : true, message: "Required"}, 
                                                minLength:{ value : 2, message: "Min length is 2"}, 
                                                maxLength: { value : 50, message: "Max length is 50"}})} />

                                            {errors.manufacturer && <span role="alert" className="text-red-600">{errors.manufacturer.message}</span>}
                                            </label>
                                        
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="price"
                                        >
                                            Price
                 
                                        <input
                                            type="number"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="0"
                                            {...register('price', { 
                                                required: { value : true, message: "Required"},                                                 
                                                maxLength: { value : 30, message: "Max length is 30"}})} />
                                            {errors.price && <span role="alert" className="text-red-600">{errors.price.message}</span>}
                                            </label>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="ram"
                                        >
                                            RAM
                 
                                        <input
                                            type="number"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="0"
                                            {...register('ram', {                                                 
                                                required: { value : true, message: "Required"},                                                 
                                                maxLength: { value : 10, message: "Max length is 10"}
                                                })}
                                               />
                                            {errors.ram && <span role="alert" className="text-red-600">{errors.ram.message}</span>}
                                            </label>
                                    </div>
                                </div>



                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="color"
                                        >
                                            Color
                 
                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Black" 
                                            {...register('color', { 
                                                required: { value : true, message: "Required"}, 
                                                minLength:{ value : 2, message: "Min length is 2"}, 
                                                maxLength: { value : 60, message: "Max length is 60"}})} />

                                            {errors.color && <span role="alert" className="text-red-600">{errors.color.message}</span>}
                                            </label>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="screen"
                                        >
                                            Screen
                 
                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="6.43 inch FHD+"
                                            {...register('screen', { 
                                                required: { value : true, message: "Required"}, 
                                                minLength:{ value : 2, message: "Min length is 2"}, 
                                                maxLength: { value : 60, message: "Max length is 60"}})} />

                                            {errors.screen && <span role="alert" className="text-red-600">{errors.screen.message}</span>}
                                            </label>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="processor"
                                        >
                                            Processor
              
                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Qualcomm Snapdragon 678"
                                            {...register('processor', { 
                                                required: { value : true, message: "Required"}, 
                                                minLength:{ value : 2, message: "Min length is 2"}, 
                                                maxLength: { value : 60, message: "Max length is 60"}})} />

                                            {errors.processor && <span role="alert" className="text-red-600">{errors.processor.message}</span>}
                                            </label>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-gray-400" />

                            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                Description 
                            </h6>
           
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="description"
                                        >                                            
                                   
                                        <textarea
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Finding the best price for the Apple iPhone 11 is no easy task. Here you will find where to buy the Apple iPhone 11 at the best price. Prices are continuously tracked in over 140 stores so that you can find a reputable dealer with the best price"
                                            rows="4"
                                            
                                            {...register('description', { 
                                                required: { value : true, message: "Required"}, 
                                                minLength:{ value : 50, message: "Min length is 50"}, 
                                                maxLength: { value : 400, message: "Max length is 400"}})} />

                                            {errors.description && <span role="alert" className="text-red-600">{errors.description.message}</span>}
                                            </label>
                                    </div>
                                </div>
                            </div>

                            {dataToEdit ? null :<>
                            <hr className="mt-6 border-b-1 border-gray-400" />                            

                            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                Image 
                            </h6>

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">

                                      <input type="checkbox" name="checkFile" onChange={(e) => setRequiredFile(e.target.checked)}/> Do you want to upload an image
                            
                                        {requiredFile ? 
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="fileImgPhone"
                                        >         
                                                                    
                                        <input
                                            type="file"                                            
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            accept=".png"
                                            {...register('fileImgPhone', { 
                                                required: { value : true, message: "Required"}})} /> 
                                          </label>
                                         : null
                                        }
                                    </div>
                                </div>
                            </div>
                            </>
                                    }
                            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CrudForm

