import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Blog from './page/blog/Blog';
import Service from './page/service/Service';
import Home from './page/home/Home';
import Hotels from './page/hotels/Hotels';
import { ListHotel } from './page/ListHotel/ListHotel';
import Account from './page/account/Account';
import Login from './page/account/login/Login';
import Single from './page/blog_single/Single';
import Write from './page/blog_single/Write';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/single" element={<Single/>}/>
        <Route path="/blog/write" element={<Write/>}/>

        
        <Route path="/signup" element={<Account/>}/>
        <Route path="/service/hotels" element={<ListHotel/>}/>
        <Route path="/service/hotels/:id" element={<Hotels/>}/>
       
      </Routes>
    </div>
   
   
  );
}

export default App;
