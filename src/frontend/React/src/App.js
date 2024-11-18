import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import BloodBank from './Components/Pages/BloodBank';
import Contact from './Components/Pages/Contact';
import FAQ from './Components/Pages/FAQ';
import WantDonate from './Components/Pages/WantDonate';
import WhereDonate from './Components/Pages/WhereDonate';
import Home from './Components/Pages/Home';
import HomeProfile from './Components/Pages/HomeProfile';
import Signin from './Components/Pages/Singin';
import Profile from './Components/Pages/Profile';
import Signup from './Components/Pages/Singup';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Private = ({ Item }) => {
  const signed = true; // Aqui, você pode usar seu hook de autenticação real
  return signed ? <Item /> : <Signin />;
};

function App() {
  return (
    <MainContainer>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WantDonate" element={<WantDonate />} />
        <Route path="/WhereDonate" element={<WhereDonate />} />
        <Route path="/BloodBank" element={<BloodBank />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Profile" element={<Private Item={HomeProfile} />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
      <Footer />
    </MainContainer>
  );
}

export default App;
