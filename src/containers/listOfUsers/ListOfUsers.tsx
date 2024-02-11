import { useEffect } from "react";
import { getDataAction } from "#store/reducers/userReducer/actions";
import { useAppDispatch, useAppSelector } from "#store/store";
import ShowMoreButton from "#components/showMoreButton";
import UserCard from "#containers/userCard";

const ListOfUsers: React.FC = () => {
  const { page, listOfUsers, total } = useAppSelector(
    (state) => state.userReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataAction(page));
  }, []);

  const handleShowMore = () => {
    dispatch(getDataAction(page + 1));
  };

  return (
    <div className="mb-12 flex flex-col items-center">
      <div className="flex flex-wrap justify-evenly px-4 py-6 sm:px-12">
        {listOfUsers.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
      {listOfUsers.length < total && (
        <ShowMoreButton onClick={handleShowMore} />
      )}
    </div>
  );
};

export default ListOfUsers;
