import SignOutButton from "#components/signOutButton";

const MainPageHeader: React.FC = () => {
  return (
    <header className="flex-center relative bg-violet py-12">
      <SignOutButton />
      <div className="max-w-[90%] md:max-w-[75%]">
        <h1>Наша команда</h1>
        <h2>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </h2>
      </div>
    </header>
  );
};

export default MainPageHeader;
