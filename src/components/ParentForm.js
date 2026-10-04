import React, { useState } from 'react'
import CarDetails from './CarDetails'
import CardDetails from './CardDetails'
import Error from './Error'

function ParentForm() {
    const [step, setStep] = useState(1)
    const [user, setUser] = useState({ firstName: "", lastName: "" })
    const [car, setCar] = useState({ model: "", price: "" })
    const [card, setCard] = useState({ info: "", expiry: "" })

    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)

    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)

    function handleUserSubmit(e) {
        e.preventDefault();
        nextStep(); 
    }

    return (
        <div className='h-[100vh] w-[100vw] bg-gray-900 text-white flex justify-center items-center'>
            {step === 1 && (
                <form
                    id="step1"
                    onSubmit={handleUserSubmit}
                    className='w-[40vw] border-2 border-white h-[70vh] flex justify-center items-center flex-col'
                >
                    <h2 className='text-xl mb-7'>User Details</h2>

                    <label htmlFor="first_name" className='text-2xl'>First Name: </label>
                    <input
                        id="first_name"
                        className='bg-gray-400 text-black border-2 border-black'
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    />
                    {firstNameError && <Error type="First Name" />}

                    <label htmlFor="last_name" className='text-2xl mt-4'>Last Name: </label>
                    <input
                        id="last_name"
                        className='bg-gray-400 text-black border-2 border-black'
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    />
                    {lastNameError && <Error type="Last Name" />}

                    <button type='submit' className='mt-6 bg-green-500 px-6 py-2 rounded hover:bg-green-700'>
                        Next
                    </button>
                </form>
            )}

            {step === 2 && (
                <CarDetails
                    car={car}
                    setCar={setCar}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {step === 3 && (
                <CardDetails
                    card={card}
                    setCard={setCard}
                    prevStep={prevStep}
                />
            )}
        </div>
    )
}

export default ParentForm
