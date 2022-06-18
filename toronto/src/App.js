import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  Login,
  SignUp,
  PostPage,
  UserProfilePage,
  EditProfilePage,
  Controversy,
} from '@pages';
import UsersProvider from './contexts/UserContext';
import UserListPage from './pages/UserListPage';

function App() {
  return (
    <UsersProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/create-post' element={<PostPage />} />
          <Route path='/:userId' element={<UserProfilePage />} />
          <Route path='/:userId/edit' element={<EditProfilePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/controversy/:postId' element={<Controversy />} />
          <Route path='/user/list' element={<UserListPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </UsersProvider>
  );
}

export default App;
