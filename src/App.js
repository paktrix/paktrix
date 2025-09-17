import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/HomePage/Home';
import Aboutus from './Component/AboutusPage/Aboutus';
import Blog from './Component/BlogPage/Blog';
import Aos from 'aos';
import { useEffect } from 'react';
import ScrollToTop from './Component/ScrollToTop';
import SustainablePackagingBlog from './Component/BlogPage/SustainablePackagingBlog';
import PlasticPlagueBlog from './Component/BlogPage/PlasticPlagueBlog';
import Error404 from './Component/Error404';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/SustainablePackagingBlog' element={<SustainablePackagingBlog />} />
          <Route path='/PlasticPlagueBlog' element={<PlasticPlagueBlog />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App