import ListOfUsers from "#containers/listOfUsers";
import MainPageHeader from "#containers/mainPageHeader";

const MainPage: React.FC = () => {
  return (
    <div>
      <MainPageHeader />
      <ListOfUsers />
    </div>
  );
};

export default MainPage;
