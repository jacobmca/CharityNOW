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
      <div className="content">
        <h1 className="welcome-h1">Welcome to CharityNOW!</h1>
        <h3 className="welcome-h3">
          Your donation can make a difference in someone's life. Join us in
        </h3>
        <i className="hook">
          Support a brighter future with CharityNOW! Our user-friendly platform
          makes it easy to contribute to causes that matter. With every
          donation, you're making a real difference in the lives of those in
          need, helping to create a world where kindness and generosity change
          lives. Join our community of givers today and experience the joy of
          giving back, knowing your contributions are going directly to
          impactful, transparent initiatives.
        </i>
        <div className="content">
          <div className="image-container">
            <div className="image-row">
              <img
                className="homepage-image-1"
                src="../public/home-charity-1.jpg"
                alt="charity image"
              />
              <div className="discription-1">
                Make a difference with CharityNOW! Your donation helps transform
                lives and supports vital causes. Join us in spreading hope and
                positivity today!{" "}
              </div>
            </div>
            <div className="image-row">
              <img
                className="homepage-image-2"
                src="../public/home-charity-2.jpg"
                alt="charity image"
              />
              <div className="discription-1">
                By donating on CharityNOW, you're supporting meaningful,
                transparent causes with a direct impact. Every contribution
                brings hope and makes a real difference in the lives of those in
                need.
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          Made By: Charlie Hutchings, Jacob McAuliffe, Matt A., Mehrdod Rezvany,
          Stefan Wanigatunga, and William Lee.
        </p>
      </footer>
    </div>
  );
};
export default Home;
