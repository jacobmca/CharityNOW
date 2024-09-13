import React, { useState, useQuery } from "react";
import Charity from "../components/charity";
import Donation from "../components/Donation";

function Donate() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const projects = [
    {
      name: "Charity",
      image: "",
      description: "This is a description of the charity",
      donate: <button onClick={toggleModal}>Donate</button>,
    },
    {
      name: "Charity 2",
      image: "",
      description: "This is a description of the charity",
      donate: <button onClick={toggleModal}>Donate</button>,
    },
    {
      name: "Charity 3",
      image: "",
      description: "This is a description of the charity",
      donate: <button onClick={toggleModal}>Donate</button>,
    },
    {
      name: "Charity 4",
      image: "",
      description: "This is a description of the charity",
      donate: <button onClick={toggleModal}>Donate</button>,
    },
    {
      name: "Charity 5",
      image: "",
      description: "This is a description of the charity",
      donate: <button onClick={toggleModal}>Donate</button>,
    },
    {
      name: "Charity 6",
      image: "",
      description: "This is a description of the charity",
      donate: <button onClick={toggleModal}>Donate</button>,
    },
  ];

  return (
    <section className="container">
      <h1 className="pick-charity text-center mt-3 mb-5">Pick A Charity</h1>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div
            className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
            key={index}
          >
            <Charity
              name={project.name}
              image={project.image}
              description={project.description}
              donate={project.donate}
            />
          </div>
        ))}
      </div>
      {showModal && <Donation onClose={toggleModal} />}
    </section>
  );
}

export default Donate;

// const Donate = () => {
//   const [selectedOrg, setSelectedOrg] = useState("");
//   const [amount, setAmount] = useState("");
//   const [message, setMessage] = useState("");
//   const { loading, data } = useQuery(QUERY_ORGANIZATIONS);
//   const [addDonation] = useMutation(ADD_DONATION);
//   const organizations = data?.organizations || [];
//   const handleDonationSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await addDonation({
//         variables: {
//           organizationId: selectedOrg,
//           amount: parseFloat(amount),
//           message,
//         },
//       });
//       setSelectedOrg("");
//       setAmount("");
//       setMessage("");
//       console.log("Donation successful:", data.addDonation);
//     } catch (err) {
//       console.error("Error submitting donation:", err);
//     }
//   };
//   if (loading) return <div>Loading...</div>;
//   if (!Auth.loggedIn()) {
//     return (
//       <h4>
//         You need to be logged in to make a donation. Please log in and try
//         again.
//       </h4>
//     );
//   }
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold my-4">Make a Donation</h1>
//       <form onSubmit={handleDonationSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="organization" className="block mb-2">
//             Select Organization:
//           </label>
//           <select
//             id="organization"
//             value={selectedOrg}
//             onChange={(e) => setSelectedOrg(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">Select an organization</option>
//             {organizations.map((org) => (
//               <option key={org._id} value={org._id}>
//                 {org.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="amount" className="block mb-2">
//             Donation Amount ($):
//           </label>
//           <input
//             type="number"
//             id="amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//             min="1"
//             step="0.01"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block mb-2">
//             Message (optional):
//           </label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full p-2 border rounded"
//             rows="3"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit Donation
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Donate;
