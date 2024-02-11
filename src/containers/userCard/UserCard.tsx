import { SyntheticEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { setActiveUserId, setUsers } from "#store/reducers/userReducer";
import { getSelectedUserDataAction } from "#store/reducers/userReducer/actions";
import { useAppDispatch, useAppSelector } from "#store/store";
import { UserType } from "#models/userTypes";
import LikeIcon from "#components/likeIcon/LikeIcon";

interface Props {
  user: UserType;
}

const UserCard: React.FC<Props> = (props) => {
  const { user } = props;

  const { listOfUsers } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const navigation: NavigateFunction = useNavigate();

  const toggleLikedStatus = (event: SyntheticEvent) => {
    event.stopPropagation();

    const updatedListOfUsers: UserType[] = structuredClone(
      listOfUsers.map((updatedUser: UserType) =>
        updatedUser.id === user.id
          ? { ...updatedUser, isLiked: !updatedUser.isLiked }
          : updatedUser,
      ),
    );

    dispatch(setUsers(updatedListOfUsers));
    localStorage.setItem("users", JSON.stringify(updatedListOfUsers));
  };

  const handleGoToUserPage = () => {
    setActiveUserId(user.id);
    dispatch(getSelectedUserDataAction(user.id));
    navigation(`/user/${user.id}`);
  };

  return (
    <div
      className="flex-center mb-12 w-[305px] cursor-pointer flex-col  flex-wrap rounded border p-5 shadow-md hover:border-black"
      onClick={handleGoToUserPage}
    >
      <div className="mb-3 h-[124px] w-[124px]">
        <img
          className="rounded-full object-contain"
          src={`${user.avatar}`}
          alt={`${user.first_name} ${user.last_name}'s photo`}
        />
      </div>
      <span className="mb-3 text-center text-[20px] text-black">{`${user.first_name} ${user.last_name}`}</span>
      <button
        className="flex-center h-[29px] w-[30px] self-end rounded bg-gray-100 p-0.5 hover:bg-gray-200"
        onClick={(event) => toggleLikedStatus(event)}
      >
        <LikeIcon isLiked={user.isLiked} />
      </button>
    </div>
  );
};

export default UserCard;
