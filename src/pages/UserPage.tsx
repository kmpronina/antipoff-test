import UserInfo from "#containers/userInfo";
import UserPageHeader from "#containers/userPageHeader";

const UserPage: React.FC = () => {
  return (
    <div>
      <UserPageHeader />
      <UserInfo />
    </div>
  );
};

export default UserPage;
