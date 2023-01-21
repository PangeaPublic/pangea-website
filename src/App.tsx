import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

import "./App.css";

const App = () => (
  <div className="site">
    <SiteHeader />
    <main className="site-main">
      <div className="site-main-inner-wrapper">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolores laboriosam, esse dignissimos fugit architecto officiis in,
          porro ipsam, blanditiis labore ex aspernatur hic voluptatem nam
          reprehenderit commodi laudantium repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, expedita
          consequatur odit hic suscipit aut! Provident quisquam, cupiditate
          consequatur neque vero adipisci delectus cum cumque dolor laborum,
          nostrum fugiat sint!
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
