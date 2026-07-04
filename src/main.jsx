import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './componentes/cabeçario/main.jsx'
import Formulario from './componentes/formulario/main.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Formulario />
  </StrictMode>,
)
