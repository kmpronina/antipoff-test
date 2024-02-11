import { useAppSelector } from "#store/store";
import ContactItem from "#components/contactItem";

const UserInfo: React.FC = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);

  return activeUser === null ? (
    <></>
  ) : (
    <div className="flex w-[100%] items-start justify-center">
      <div className="flex max-w-[90%] flex-col-reverse gap-8 py-12 md:w-[70%] md:flex-row md:flex-nowrap md:items-start md:justify-start md:gap-20">
        <div className="flex flex-col gap-5">
          {activeUser?.description.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.text}</p>
          ))}
        </div>

        <div className="flex w-[100%] flex-col items-start justify-start gap-5">
          <ContactItem contact="phone" value={activeUser?.phone} />
          <ContactItem contact="email" value={activeUser?.email} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
