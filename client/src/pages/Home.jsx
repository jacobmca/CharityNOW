import { useQuery } from "@apollo/client";
// import { QUERY_DONATIONS } from "../utils/queries";
// import Donation from "../components/Donation";
// our Home page
const Home = () => {
  // const { loading, data } = useQuery(QUERY_DONATIONS);
  // const donations = data?.donations || [];
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Charitable donations</title>
      <div className="navbar">
        <h1 className="welcome-h1">Welcome to CharityNow</h1>
        <div className="right-buttons">
          <a href="#login">Log In</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="content">
        <h1 className="welcome-h1">
          Welcome to CharityNow, a place to help others.
        </h1>
        <div className="image-container">
          <a>
            <img
              className="homepage-image-1"
              src="../public/home-charity-1.jpg"
              alt="charity image"
            />
          </a>
          <a>
            <img
              className="homepage-image-2"
              src="../public/home-charity-2.jpg"
              alt="charity image"
            />
          </a>
        </div>
        <h2 className="discription-1" />
      </div>
      <footer className="footer">
        <p>
          Made By: Charlie Hutchings, Jacob McAuliffe, Matt A., Mehrdod Rezvany,
          Stefan Wanigatunga, and William Lee.
        </p>
      </footer>
    </div>

    // <div className="container mx-auto px-4">
    //   <div className="former-body">
    //     <h1 className="text-primary text-3xl font-bold my-4">Welcome!</h1>
    //     <h3 className="text-xl mb-4">
    //       Take a look at the most recent contributions!
    //     </h3>
    //     {loading ? (
    //       <div>Loading...</div>
    //     ) : (
    //       <div>
    //         <h2 className="text-2xl font-semibold mb-4">Recent Donations</h2>
    //         {donations.length ? (
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //             {donations.map((donation) => (
    //               <Donation key={donation._id} donation={donation} />
    //             ))}
    //           </div>
    //         ) : (
    //           <p>No donations yet.</p>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};
export default Home;
