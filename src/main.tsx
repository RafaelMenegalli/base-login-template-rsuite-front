import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import AppRoutes from './routes/index.tsx'
import './styles/index.scss'
import { ptBR } from 'rsuite/esm/locales/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider theme="dark" locale={ptBR}>
      <AppRoutes />
    </CustomProvider>
  </StrictMode>,
)
