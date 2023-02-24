import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Events from './pages/events';
import FaQs from './pages/faq';
import News from './pages/news';
import Admin from './admin/admin';
import Error from './pages/error';
import AdminPanel from './admin/adminPanel';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import { f09a } from "@fortawesome/free-solid-svg-icons";
/*
library.add(f09a);*/
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/faqs" element={<FaQs/>} />
        <Route path="/news" element={<News/>} />

        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/dashboard' element={<AdminPanel/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </>
  );
}

export default App;
