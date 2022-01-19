import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './navbar';
import Carousel from './carousel';
import Recmoviescard from './recmoviescard';
import Movcardinfo from './movcardinfo';
import Booktickets from './booktickets';
import Amincreate from './amincreate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />}></Route>
        </Routes>


        <div className='container'>
          <Routes>
            <Route path="/" element={<Recmoviescard />}></Route>
            <Route path="/book-ticket" element={<Booktickets />}></Route>
          </Routes>
        </div>

        <div className='container-fluid'>
          <Routes>
            <Route path="/movie-info/:id" element={<Movcardinfo />}></Route>
          </Routes>
        </div>

        <div className='container'>
          <Routes>
            <Route path='/admin-create' element={<Amincreate />} ></Route>

          </Routes>
        </div>


      </BrowserRouter>
    </>
  );
}

export default App;
