import  { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './HomeIndex';
import BookTable from './Pages/BookTable/BookTable';
import ConfirmOrder from './Pages/BookTable/ConfirmOrder';
import Kitchen from './Pages/Admin/Kitchen';
import Header from './Pages/Header';
import MainMenu from './Pages/BookTable/MainMenu';
function App() {
    return (
      <>
       <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Header />
          <Routes>
            <Route path="/" element={<HomeIndex />} /> {/* Use HomeIndex component for the root path */}
            <Route path="booktable" element={<BookTable />} /> {/* Use BookTable component for the /booktable path */}
            <Route path="*" element={<p>Design Not found!</p>} /> {/* Render "Design Not found!" for any other paths */}
            <Route path="/booktable/:tableNumber/menu-order" element={<MainMenu />} />
            <Route path="/confirmorder" element={<ConfirmOrder />} />
            <Route path="/kitchen" element={<Kitchen />} />

            {/* <Route path="/booktable/menu-order" element={<MainMenu   />} /> */}

          </Routes>
        </Suspense>
      </Router>
      </>
    );
}

export default App;
