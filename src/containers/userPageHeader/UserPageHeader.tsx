import { useAppSelector } from "#store/store";
import GoBackButton from "#components/goBackButton";
import SignOutButton from "#components/signOutButton";

const UserPageHeader: React.FC = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);

  return activeUser === null ? (
    <h3>Извините, пользователь не найден</h3>
  ) : (
    <header className="flex-center relative bg-violet">
      <GoBackButton />
      <SignOutButton />
      <div className="flex-center flex-col-reverse gap-4 py-12 sm:max-w-[90%] sm:flex-row sm:items-center sm:justify-start md:w-[70%] xl:gap-8">
        <div className="h-[187px] w-[187px]">
          <img
            className="h-[100%] w-[100%] rounded-full object-cover"
            src={`${activeUser?.avatar}`}
            alt={`${activeUser?.first_name} ${activeUser?.last_name}'s photo`}
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:items-start">
          <h1 className="">{`${activeUser?.first_name} ${activeUser?.last_name}`}</h1>
          <h3 className="text-[20px] font-normal capitalize leading-[23.44px] text-white md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[37.5px]">{`${activeUser.role}`}</h3>
        </div>
      </div>
    </header>
  );
};

export default UserPageHeader;
