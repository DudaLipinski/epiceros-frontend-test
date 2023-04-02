import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import { REGISTER } from './routeSpecs'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={REGISTER} element={<Register />} />
      <Route path="*" element={<Register />} />
    </Routes>
  )
}
