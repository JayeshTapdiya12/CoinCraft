import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import { useState } from 'react';
import Exchanges from './Compoments/Exchanges';
import Coindetails from './Compoments/Coindetails';
import Coins from './Compoments/Coins';
import Home from './OtherPages/Home/Home';
import Navbar from './Compoments/Navbar';
import Footer from './OtherPages/Footer/Footer';
import About from './OtherPages/About/About';
import Contact from './OtherPages/Contact/Contact';
import Service from './OtherPages/Service/Service';
import Team from './OtherPages/Team/Team';
// import Why from './OtherPages/Why';

import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Compoments/News/News';
import TopGainer from './Compoments/TopGainer';
import TopLoser from './Compoments/TopLoser';
// import Loader from './Compoments/Loader';
// import Loader1 from './OtherPages/Loader1';

function App() {

  // const location = useLoaction();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // console.log(location);
  // }, [location]);
  // const [loading, setLoading] = useState(true);

  // setTimeout(() => setLoading(false), 3100);
  // useEffect(() => { });

  return (<>
    {/* <div className='container'> */}

    {/* {loading ? (
      <Loader1 />
    ) : ( */}
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/team' element={<Team />} />
        {/* <Route path='/why' element={<Why />} /> */}
        <Route path='/exchange' element={<Exchanges />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coins/:id' element={<Coindetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/topgain" element={<TopGainer />} />
        <Route path="/toploss" element={<TopLoser />} />

      </Routes>
      <Footer />
      {/* </div> */}
    </>
    {/* )} */}
  </>
  );
}

export default App;
