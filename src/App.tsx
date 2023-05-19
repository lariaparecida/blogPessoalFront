import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import "./App.css";
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (

  <>
    <BrowserRouter> 
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastroUsuario" element={<CadastroUsuario />} />

          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  </>
  // <>
  //   <Router> -- atual BroswerRouter
  //     <Navbar />  -- mantém        
  //         <Switch> -- Novo Routes
  //           <div> -- a nova vem antes do Route/Switch
  //              <Route path='/home'>
  //                 <Home />
  //              </Route>
  //           </div>
  //         </Switch>
  //     <Footer />
  //   </Router>
  // </>
  );
}

export default App;