import React from "react";

function CardDetails({ card, setCard, prevStep }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      id="step3"
      onSubmit={handleSubmit}
      className="w-[40vw] border-2 border-white h-[70vh] flex justify-center items-center flex-col"
    >
      <h2 className="text-xl mb-7">Card Details</h2>

      <label htmlFor="info" className="text-2xl">Card Info: </label>
      <input
        id="info"
        className="bg-gray-400 text-black border-2 border-black"
        value={card.info}
        onChange={(e) => setCard({ ...card, info: e.target.value })}
      />

      <label htmlFor="expiry" className="text-2xl mt-4">Expiry: </label>
      <input
        id="expiry"
        className="bg-gray-400 text-black border-2 border-black"
        value={card.expiry}
        onChange={(e) => setCard({ ...card, expiry: e.target.value })}
      />

      <div className="mt-6 flex gap-4">
        <button type="button" onClick={prevStep} className="bg-red-500 px-6 py-2 rounded hover:bg-red-700">
          Back
        </button>
        <button type="submit" className="bg-green-500 px-6 py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CardDetails;
