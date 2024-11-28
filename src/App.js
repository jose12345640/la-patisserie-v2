import Header from './components/header/header'
import Footer from './components/footer/footer'

import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
