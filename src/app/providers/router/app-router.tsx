import { NotFoundPage } from '@/pages'
import { PATHS } from '@/shared'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <Route 
            path={PATHS.NOT_FOUND}
            element={<NotFoundPage />}
        />
    </Routes>
  )
}

export default AppRouter