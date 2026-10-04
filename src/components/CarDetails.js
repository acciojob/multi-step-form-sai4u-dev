import React from "react";

function CarDetails({ car, setCar, nextStep, prevStep }) {
  function handleSubmit(e) {
    e.preventDefault();
    nextStep();
  }

  return (
    <form
      id="step2"  
      onSubmit={handleSubmit}
      className="w-[40vw] border-2 border-white h-[70vh] flex justify-center items-center flex-col"
    >
      <h2 className="text-xl mb-7">Car Details</h2>

      <label htmlFor="model" className="text-2xl">Model: </label>
      <input
        id="model"
        className="bg-gray-400 text-black border-2 border-black"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />

      <label htmlFor="price" className="text-2xl mt-4">Price: </label>
      <input
        id="price"
        className="bg-gray-400 text-black border-2 border-black"
        value={car.price}
        onChange={(e) => setCar({ ...car, price: e.target.value })}
      />

      <div className="mt-6 flex gap-4">
        <button type="button" onClick={prevStep} className="bg-red-500 px-6 py-2 rounded hover:bg-red-700">
          Back
        </button>
        <button type="submit" className="bg-green-500 px-6 py-2 rounded hover:bg-green-700">
          Next
        </button>
      </div>
    </form>
  );
}

export default CarDetails;
