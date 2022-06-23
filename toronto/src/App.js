import { Routes, Route } from 'react-router-dom';
import Layout from '@layout/Layout';
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  Login,
  SignUp,
  NotificationsPage,
  PostPage,
  UserProfilePage,
  EditProfilePage,
  ResultPage,
  Controversy,
} from '@pages';
import UsersProvider from './contexts/UserContext';
import UserListPage from './pages/UserListPage';
import '@/App.css';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '@/constants/';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <UsersProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/create-post' element={<PostPage />} />
            <Route path='/users/:userId' element={<UserProfilePage />} />
            <Route path='/users/:userId/edit' element={<EditProfilePage />} />
            <Route path='/notifications' element={<NotificationsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route
              path='/controversy/result/:postId'
              element={<ResultPage />}
            />
            <Route path='/controversy/:postId' element={<Controversy />} />
            <Route path='/user/list' element={<UserListPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
