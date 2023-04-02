import { useSelector } from "react-redux";
import CartCard from "./cartCard.jsx";


import { useState } from "react";

const Checkout=() =>{
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    payment: "",
  });

  const handleFormChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", formValues);
    // TODO: Submit form data to the server
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="flex space-x-4 mb-4">
          <div className={`flex-1 text-center ${step >= 1 ? "text-green-500" : ""}`}>
            <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center ${step >= 1 ? "border-green-500 bg-green-500 text-white" : ""}`}>
              <span>1</span>
            </div>
            <p className="mt-2 font-medium">Contact Info</p>
          </div>
          <div className={`flex-1 text-center ${step >= 2 ? "text-green-500" : ""}`}>
            <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center ${step >= 2 ? "border-green-500 bg-green-500 text-white" : ""}`}>
              <span>2</span>
            </div>
            <p className="mt-2 font-medium">Delivery Address</p>
          </div>
          <div className={`flex-1 text-center ${step >= 3 ? "text-green-500" : ""}`}>
            <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center ${step >= 3 ? "border-green-500 bg-green-500 text-white" : ""}`}>
              <span>3</span>
            </div>
            <p className="mt-2 font-medium">Payment</p>
          </div>
        </div>
        {step === 1 && (
          <form onSubmit={handleNextStep}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" value={formValues.name} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" value={formValues.email} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500           focus:ring-green-500 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-2">Phone</label>
          <input type="tel" id="phone" name="phone" value={formValues.phone} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Next</button>
      </form>
    )}
    {step === 2 && (
      <form onSubmit={handleNextStep}>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-2">Address</label>
          <textarea id="address" name="address" value={formValues.address} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="landmark" className="block font-medium mb-2">Landmark</label>
          <input type="text" id="landmark" name="landmark" value={formValues.landmark} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-4">
            <label htmlFor="city" className="block font-medium mb-2">City</label>
            <input type="text" id="city" name="city" value={formValues.city} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className="block font-medium mb-2">State</label>
            <input type="text" id="state" name="state" value={formValues.state} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="pincode" className="block font-medium mb-2">Pincode</label>
          <input type="text" id="pincode" name="pincode" value={formValues.pincode} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={handlePreviousStep} className="bg-gray-200 text-gray-600 py-2 px-4 rounded hover:bg-gray-300">Previous</button>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Next</button>
        </div>
      </form>
    )}
    {step === 3 && (
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
        <label htmlFor="payment-method" className="block font-medium mb-2">Payment Method</label>
          <select id="payment-method" name="paymentMethod" value={formValues.paymentMethod} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required>
            <option value="">-- Select Payment Method --</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>
        {formValues.paymentMethod === 'credit-card' && (
          <div>
            <h2 className="text-xl font-medium mb-2">Credit Card Details</h2>
            <div className="mb-4">
              <label htmlFor="card-number" className="block font-medium mb-2">Card Number</label>
              <input type="text" id="card-number" name="cardNumber" value={formValues.cardNumber} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="expiry" className="block font-medium mb-2">Expiry Date</label>
              <div className="flex">
                <input type="text" id="expiry" name="expiry" value={formValues.expiry} onChange={handleFormChange} placeholder="MM / YY" className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mr-4" required />
                <input type="text" id="cvv" name="cvv" value={formValues.cvv} onChange={handleFormChange} placeholder="CVV" className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
              </div>
            </div>
          </div>
        )}
        {formValues.paymentMethod === 'debit-card' && (
          <>
            <h2 className="text-xl font-medium mb-2">Debit Card Details</h2>
            <div className="mb-4">
              <label htmlFor="card-number" className="block font-medium mb-2">Card Number</label>
              <input type="text" id="card-number" name="cardNumber" value={formValues.cardNumber} onChange={handleFormChange} className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
            </div>
            <div className="mb-4">
              <label htmlFor="expiry" className="block font-medium mb-2">Expiry Date</label>
              <div className="flex">
                <input type="text" id="expiry" name="expiry" value={formValues.expiry} onChange={handleFormChange} placeholder="MM / YY" className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mr-4" required />
                <input type="text" id="cvv" name="cvv" value={formValues.cvv} onChange={handleFormChange} placeholder="CVV" className="w-full rounded border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring" required />
                <input type="hidden" name="_next" value="/" />
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">Place Order</button>
              </div>
            </div>
          </>)}
          </form>
        )}
      </div>
    </div>)};









const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <Checkout />
  );
};
export default Cart;
