import "./App.css";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Charity from "components/Charity";
import Donation from "components/Donation";
import LoginForm from "components/LoginForm";
import Navigation from "components/Navigation";
import SignupForm from "components/SignupForm";

import Contact from "./components/pages/Contact.jsx";
import Donate from "./components/pages/Donate.jsx";
import Home from "./components/pages/Home.jsx";
import Profile from "./components/pages/Profile.jsx";

import "./index.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="navbar navbar-expand-sm bg-secondary bg-transparent">
          <div className="container-fluid">
            <Navigation />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
