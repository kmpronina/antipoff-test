interface Props {
  isVisible: boolean;
  onClick: () => void;
}
const EyeIcon: React.FC<Props> = (props) => {
  const { isVisible, onClick } = props;

  return isVisible ? (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 top-[50%] h-[24px] w-[24px] translate-y-[-50%] cursor-pointer"
      onClick={onClick}
    >
      <path
        d="M9.73017 1.07319C10.1448 1.02485 10.5684 1 10.9999 1C15.6639 1 19.3998 3.90264 20.9999 8C20.6053 9.01041 20.0809 9.94816 19.4446 10.7877M5.51956 2.51944C3.47949 3.76406 1.90105 5.69259 0.999939 8C2.60008 12.0974 6.33597 15 10.9999 15C13.0375 15 14.8979 14.446 16.4805 13.4804M8.87871 5.87859C8.33576 6.42149 7.99994 7.17153 7.99994 8C7.99994 9.65685 9.34308 11 10.9999 11C11.8284 11 12.5785 10.6642 13.1214 10.1212"
        stroke="#808185"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 top-[50%] h-[24px] w-[24px] translate-y-[-50%] cursor-pointer"
      onClick={onClick}
    >
      <path
        d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
        stroke="#808185"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4L20 20"
        stroke="#808185"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default EyeIcon;
