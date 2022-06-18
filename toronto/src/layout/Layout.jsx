import { Outlet } from 'react-router-dom';
import { Loader } from '@components/atoms/';
import { useUsersState } from '../contexts/UserContext.js';
import NavigationBar from '@/components/organisms/NavigationBar/index.js';

const Layout = () => {
  const state = useUsersState();
  const { data: user, loading, error } = state.user;

  if (loading) return <Loader type='spinner' />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) {
    return (
      <div>
        <nav>
          <NavigationBar user={user} />
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <NavigationBar user={user} />
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
