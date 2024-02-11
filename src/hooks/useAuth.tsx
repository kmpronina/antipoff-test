import { signUp } from "#api/authService/authService";
import { AuthRequestType } from "#models/authTypes";

export type AuthMethodsReturnType = {
  isSuccess: boolean;
  error?: string;
  dataFromResponse: {
    id: number;
    token: string;
    email: string;
  };
};

const useAuth = () => {
  const mockedAuth = async (
    data: AuthRequestType
  ): Promise<AuthMethodsReturnType> => {
    const responseData = await signUp(data);

    return {
      isSuccess: !(responseData.token === undefined),
      error: responseData.error ? responseData.error : undefined,
      dataFromResponse: {
        id: responseData.id,
        token: responseData.token,
        email: data.email,
      },
    };
  };
  return { mockedAuth };
};

export default useAuth;
