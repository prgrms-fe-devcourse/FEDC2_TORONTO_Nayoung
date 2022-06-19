import UserItem from '@/components/molecules/UserItem';

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </>
  );
};

export default UserList;
