import React from "react";
import { default as Auth } from '../utils/auth';
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Donation from "../components/Donation";
// our Profile page
const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  const user = data?.me || {};
  if (!Auth.loggedIn()) {
    return (
      <h1 className="text-3xl font-bold text-center">You are not logged in!</h1>
    );
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
      <p className="mb-4">Email: {user.email}</p>
      <h3 className="text-xl font-semibold mb-3">Your Recent Donations</h3>
      {user.donations && user.donations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.donations.map((donation) => (
            <Donation key={donation._id} donation={donation} />
          ))}
        </div>
      ) : (
        <p>You haven't made any donations yet.</p>
      )}
    </div>
  );
};
export default Profile;
