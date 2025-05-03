import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RootLayout from "./pages/RootLayout";
import Reviews from "./pages/Reviews";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PricingPolicy from "./pages/PricingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path ="/reviews" element={<Reviews/>}/>
          <Route path ="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path ="/terms-of-services" element={<TermsOfService/>}/>
          <Route path ="/pricing-policy" element={<PricingPolicy/>}/>
          <Route path ="/refund-policy" element={<RefundPolicy/>}/>
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
