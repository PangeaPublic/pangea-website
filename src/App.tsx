import { Routes, Route } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Press from "./Press";
import Article from "./Article";
import Resources from "./Resources";
import Resource from "./Resource";
import Events from "./Events";
import Event from "./Event";
import GetInvolved from "./GetInvolved";
import Footer from "./Footer";

import "./App.css";

const App = () => (
  <div className="site">
    <SiteHeader />
    <main className="site-main">
      <div className="site-main-inner-wrapper">
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press/:slug" element={<Article />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Resource />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<Event />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
