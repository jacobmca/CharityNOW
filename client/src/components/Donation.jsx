import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const Donation = ({ isOpen, hasCloseBtn = true, onClose }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const modalRef = useRef(null);

  // Open/Close Modal
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  // Close Modal when "Escape" is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  // Sync Modal Open/Close State
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  // Open/close modal element based on internal state
  // useEffect(() => {
  //   const modalElement = modalRef.current;

  //   if (modalElement) {
  //     if (isModalOpen) {
  //       modalElement.showModal();
  //     } else {
  //       modalElement.close();
  //     }
  //   }
  // }, [isModalOpen]);
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  // Open/close modal element based on internal state
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  //Handle Donation Submission Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    let amountToDonate =
      selectedAmount === "custom"
        ? parseFloat(customAmount)
        : parseFloat(selectedAmount);
    if (isNaN(amountToDonate) || amountToDonate <= 0) {
      alert("Please enter valid amount.");
      return;
    }
    console.log("Donating amount: ", amountToDonate);
    handleCloseModal();
  };

  return isModalOpen ? (
    <div className="modal-backdrop" onClick={handleCloseModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {hasCloseBtn && (
          <button className="modal-close-btn" onClick={handleCloseModal}>
            Close
          </button>
        )}
        <h2 className="text-xl font-bold mb-4">Donate to Charity</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Select Amount:</label>
            <div className="space-y-2">
              <label className="block">
                <input
                  type="radio"
                  name="donationAmount"
                  value="5"
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  checked={selectedAmount === "5"}
                />{" "}
                $5
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="donationAmount"
                  value="10"
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  checked={selectedAmount === "10"}
                />{" "}
                $10
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="donationAmount"
                  value="20"
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  checked={selectedAmount === "20"}
                />{" "}
                $20
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="donationAmount"
                  value="custom"
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  checked={selectedAmount === "custom"}
                />{" "}
                Custom Amount
              </label>
              {selectedAmount === "custom" && (
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Donation;


//   return (
//     <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
//       {hasCloseBtn && (
//         <button className="modal-close-btn" onClick={handleCloseModal}>
//           Close
//         </button>
//       )}
//       <h2 className="text-xl font-bold mb-4">Donate to Charity</h2>
//       <form>
//         <div className="mb-4">
//           <label className="block mb-2">Select Amount:</label>
//           <div className="space-y-2">
//             <label className="block">
//               <input
//                 type="radio"
//                 name="donationAmount"
//                 value="5"
//                 onChange={(e) => setSelectedAmount(e.target.value)}
//                 checked={selectedAmount === "5"}
//               />{" "}
//               $5
//             </label>
//             <label className="block">
//               <input
//                 type="radio"
//                 name="donationAmount"
//                 value="10"
//                 onChange={(e) => setSelectedAmount(e.target.value)}
//                 checked={selectedAmount === "10"}
//               />{" "}
//               $10
//             </label>
//             <label className="block">
//               <input
//                 type="radio"
//                 name="donationAmount"
//                 value="20"
//                 onChange={(e) => setSelectedAmount(e.target.value)}
//                 checked={selectedAmount === "20"}
//               />{" "}
//               $20
//             </label>
//             <label className="block">
//               <input
//                 type="radio"
//                 name="donationAmount"
//                 value="custom"
//                 onChange={(e) => setSelectedAmount(e.target.value)}
//                 checked={selectedAmount === "custom"}
//               />{" "}
//               Custom Amount
//             </label>
//             {selectedAmount === "custom" && (
//               <input
//                 type="number"
//                 min="1"
//                 step="0.01"
//                 placeholder="Enter custom amount"
//                 value={customAmount}
//                 onChange={(e) => setCustomAmount(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             )}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Donate
//         </button>
//       </form>
//     </dialog>
//   );
// };

// export default Donation;
