import React from 'react'

const payment = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
    <div className="bg-white rounded-lg p-8 shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="expirationDate">
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            className="w-full p-2 border rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="cvv">
            CVV
          </label>
          <input type="text" id="cvv" className="w-full p-2 border rounded" placeholder="123" />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Pay Now
        </button>
      </form>
    </div>
  </div>
  )
}

export default payment
