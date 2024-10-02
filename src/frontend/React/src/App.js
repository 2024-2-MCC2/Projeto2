import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BloodBank from "./Components/Pages/BloodBank"
import Contact from "./Components/Pages/Contact"
import FAQ from "./Components/Pages/FAQ"
import WantDonate from "./Components/Pages/WantDonate"
import WhereDonate from "./Components/Pages/WhereDonate"
import Home from "./Components/Pages/Home"
// import Container from "./Components/Layout/Container"
import NavBar from "./Components/Layout/NavBar"
import Footer from "./Components/Layout/Footer"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
// const Content = styled.div`
//   flex: 1;
// `;

function App() {
  return (
    <Router>
      <MainContainer>
        <NavBar />
          {/* <Container> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/WantDonate" element={<WantDonate />} />
              <Route path="/WhereDonate" element={<WhereDonate />} />
              <Route path="/BloodBank" element={<BloodBank />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/FAQ" element={<FAQ />} />
            </Routes>
          {/* </Container> */}
        <Footer />
      </MainContainer>
    </Router>
  );
}
export default App
