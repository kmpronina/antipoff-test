import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { setAuthData, setAuthEmail } from "#store/reducers/authReducer";
import { useAppDispatch } from "#store/store";
import { RouterLocationsEnum } from "#router/Router";
import useAuth from "#hooks/useAuth";
import { AuthRequestType, SingUpDataType } from "#models/authTypes";
import EyeIcon from "#components/eyeIcon";
import { signUpValidationSchema } from "./signUpValidationSchema";

const SignUpForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmedPasswordVisible, setIsConfirmedPasswordVisible] =
    useState<boolean>(false);
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [authError, setAuthError] = useState<string | undefined>(undefined);

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const { mockedAuth } = useAuth();

  const initialFormikValues: SingUpDataType = {
    email: "",
    name: "",
    password: "",
    confirmedPassword: "",
  };

  const handleSubmit = async (formikValues: AuthRequestType) => {
    const { isSuccess, error, dataFromResponse } = await mockedAuth({
      email: formikValues.email,
      password: formikValues.password,
    });
    if (error) {
      setAuthError(error);
      setTimeout(() => {
        setAuthError(undefined);
      }, 5000);
      formik.resetForm();
    }
    if (isSuccess) {
      localStorage.setItem("authData", JSON.stringify(dataFromResponse));
      dispatch(setAuthData(dataFromResponse));
      dispatch(setAuthEmail(dataFromResponse.email));
      navigation(RouterLocationsEnum.main);
      formik.resetForm();
    }
  };

  const handleDone = () => {
    if (formik.errors.name) {
      setFormError(formik.errors.name);
      setTimeout(() => {
        setFormError(undefined);
      }, 3000);
      formik.resetForm();
      return;
    }
    if (formik.errors.email) {
      setFormError(formik.errors.email);
      setTimeout(() => {
        setFormError(undefined);
      }, 3000);
      formik.resetForm();
      return;
    }
    if (formik.errors.password) {
      setFormError(formik.errors.password);
      setTimeout(() => {
        setFormError(undefined);
      }, 3000);
      formik.resetForm();
      return;
    }
    if (formik.errors.confirmedPassword) {
      setFormError(formik.errors.confirmedPassword);
      setTimeout(() => {
        setFormError(undefined);
      }, 3000);
      formik.resetForm();
      return;
    }
    formik.submitForm();
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: initialFormikValues,
    validationSchema: signUpValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex-center min-h-screen">
      <div className="flex w-[500px] flex-col justify-center gap-3 p-4 shadow-md">
        <span>Регистрация</span>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="text-2 rounded-lg bg-gray-100 px-4 py-2 leading-8 hover:bg-gray-200"
            placeholder="Артур"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Электронная почта</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="text-2 rounded-lg bg-gray-100 px-4 py-2 leading-8 hover:bg-gray-200 focus:border-violet"
            placeholder="example@mail.ru"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Пароль</label>
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="text-2 w-full rounded-lg bg-gray-100 py-2 pl-4 pr-12 leading-8 hover:bg-gray-200"
              placeholder="*****"
            />
            <EyeIcon
              isVisible={isPasswordVisible}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="name">Подтвердите пароль</label>
          <div className="relative w-full">
            <input
              type={isConfirmedPasswordVisible ? "text" : "password"}
              id="confirmedPassword"
              name="confirmedPassword"
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
              className="text-2 w-full rounded-lg bg-gray-100 py-2 pl-4 pr-12 leading-8 hover:bg-gray-200"
              placeholder="*****"
            />
            <EyeIcon
              isVisible={isConfirmedPasswordVisible}
              onClick={() =>
                setIsConfirmedPasswordVisible(!isConfirmedPasswordVisible)
              }
            />
          </div>
        </div>
        {formError && <p className="text-red-700">{formError}</p>}
        {authError && <p className="text-red-700">{authError}</p>}
        <button
          className="text-2 w-[100%] rounded-lg bg-violet py-2 leading-8 text-white hover:bg-violet-950 active:bg-violet-800"
          type="submit"
          onClick={handleDone}
        >
          Зарегестрироваться
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
