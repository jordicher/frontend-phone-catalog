import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white relative pt-1 border-b-2 border-blue-700">

            <div className="container mx-auto">
                <div className="mt-8 border-t-2 border-blue-300 grid grid-cols-1 sm:grid-cols-3 items-center">
                    <div className="text-center py-6 col-span-1 sm:col-span-2">
                        <p className="text-sm font-bold mb-2">
                            Jordi Armengol Cherto
                    </p>
                    </div>

                    <div className="text-center py-6 flex justify-between items-center">

                        <a className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 "
                            href="https://www.linkedin.com/in/cherto" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"> <svg className="h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg></a>


                        <a className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 " href="https://github.com/jordicher" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><svg className="h-6" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

                        
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer