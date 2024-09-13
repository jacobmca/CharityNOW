import { useQuery } from "@apollo/client";
import { QUERY_DONATIONS } from "../utils/queries";
import Donation from "../components/Donation";
// our Home page
const Home = () => {
  const { loading, data } = useQuery(QUERY_DONATIONS);
  const donations = data?.donations || [];
  return (
    <div className="container mx-auto px-4">
      <div className="former-body">
        <h1 className="text-primary text-3xl font-bold my-4">Welcome!</h1>
        <h3 className="text-xl mb-4">
          Take a look at the most recent contributions!
        </h3>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Donations</h2>
            {donations.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {donations.map((donation) => (
                  <Donation key={donation._id} donation={donation} />
                ))}
              </div>
            ) : (
              <p>No donations yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
