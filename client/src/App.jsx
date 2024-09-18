import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Donation from './components/Donation';

import ContactPage from './pages/Contact';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Profile from './pages/Profile';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('id_token'));

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('id_token');
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <Router>
          <div className="former-body">
            <div className="navbar navbar-expand-sm bg-secondary bg-transparent">
              <div className="container-fluid">
                <Navigation />
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
