import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  Login,
  SignUp,
  PostPage,
} from '@pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/create-post' element={<PostPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
