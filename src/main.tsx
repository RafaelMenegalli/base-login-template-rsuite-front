import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import AppRoutes from './routes/index.tsx'
import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider theme="dark">
      <AppRoutes />
    </CustomProvider>
  </StrictMode>,
)
