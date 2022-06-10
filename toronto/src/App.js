import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { HomePage, AboutPage, NotFoundPage, SignUp } from '@pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
