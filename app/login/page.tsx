import Image from "next/image";
import LoginForm from "../ui/login-form";
import Link from "next/link";

export default async function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          로그인
        </h2>

        <LoginForm></LoginForm>
        <div className="flex justify-center border-t border-gray-200 pt-8">
          <button className="w-24 bg-purple-600 text-white p-2 rounded-lg flex items-center justify-center pl-1 hover:bg-purple-500">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M14.2532 6.9092L8.52599 6.9092V9.3636H11.772C11.252 11 9.97199 11.5456 8.49999 11.5456C7.92969 11.5463 7.36762 11.4095 6.86147 11.1467C6.35533 10.8839 5.92005 10.5029 5.59256 10.036C5.26508 9.56911 5.05505 9.0301 4.9803 8.46472C4.90555 7.89933 4.96829 7.32427 5.16319 6.7883C5.35809 6.25234 5.6794 5.77129 6.09986 5.38599C6.52031 5.00068 7.02751 4.72249 7.57841 4.57501C8.12932 4.42753 8.70766 4.41511 9.26439 4.53882C9.82111 4.66252 10.3398 4.91869 10.7764 5.2856L12.56 3.5868C11.8417 2.92523 10.9729 2.44897 10.0288 2.19935C9.08478 1.94973 8.09407 1.9343 7.1427 2.15439C6.19133 2.37449 5.30806 2.82346 4.56955 3.46233C3.83105 4.10121 3.25964 4.91067 2.90492 5.82046C2.5502 6.73025 2.4229 7.71287 2.53406 8.68302C2.64522 9.65317 2.99149 10.5815 3.5428 11.3875C4.09412 12.1935 4.83381 12.8527 5.69769 13.308C6.56156 13.7633 7.52349 14.0008 8.49999 14C11.8084 14 14.7988 11.818 14.2532 6.9092Z"
                fill="white"
              />
            </svg>
            Google
          </button>
          <button className="w-24 bg-purple-600 text-white p-2 rounded-lg ml-3 mr-3 flex items-center justify-center pl-1 hover:bg-purple-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M13.1429 11.0989C12.8618 11.7217 12.7275 11.9994 12.3652 12.5503C11.8606 13.3189 11.1486 14.276 10.2663 14.284C9.48234 14.2914 9.2812 13.7743 8.2172 13.78C7.15377 13.7857 6.93149 14.2931 6.14749 14.2857C5.2652 14.2777 4.59149 13.4137 4.08577 12.6446C2.67434 10.4949 2.52692 7.97257 3.39777 6.632C4.01663 5.67886 4.9932 5.12171 5.91149 5.12171C6.84635 5.12171 7.43377 5.63429 8.20692 5.63429C8.95663 5.63429 9.41377 5.12114 10.4943 5.12114C11.3115 5.12114 12.1766 5.56571 12.7938 6.33429C10.7732 7.44171 11.1012 10.3269 13.1429 11.0989Z"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M9.77147 3.11429C10.1429 2.63771 10.4246 1.96514 10.3223 1.27771C9.71547 1.31943 9.0069 1.70514 8.59261 2.208C8.21661 2.66457 7.90632 3.34114 8.0269 3.99943C8.68861 4.02 9.37375 3.62457 9.77147 3.11429Z"
                fill="white"
              />
            </svg>
            Apple
          </button>
          <button className=" bg-purple-600 text-white p-2 rounded-lg flex items-center hover:bg-purple-500">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M14.9 8C14.8998 6.77697 14.5492 5.57961 13.8896 4.54966C13.2301 3.51971 12.2892 2.7003 11.1784 2.18845C10.0677 1.6766 8.8335 1.49374 7.62203 1.66151C6.41056 1.82929 5.27253 2.34067 4.34267 3.13513C3.41281 3.92958 2.73005 4.97384 2.37523 6.14426C2.02041 7.31469 2.00838 8.56228 2.34057 9.73933C2.67276 10.9164 3.33526 11.9736 4.24964 12.7858C5.16401 13.5981 6.29197 14.1313 7.49998 14.3224L7.49998 9.85H5.87518V8L7.49998 8L7.49998 6.59C7.49998 4.986 8.45558 4.1 9.91718 4.1C10.3972 4.10666 10.8761 4.14837 11.35 4.2248V5.8H10.5428C10.4052 5.78173 10.2653 5.79465 10.1334 5.8378C10.0016 5.88095 9.88108 5.95322 9.78093 6.04926C9.68078 6.14531 9.60352 6.26265 9.55489 6.39261C9.50625 6.52257 9.48748 6.66181 9.49998 6.8V8H11.2752L10.9912 9.85H9.49998L9.49998 14.3224C11.0055 14.0842 12.3766 13.3166 13.3665 12.1575C14.3564 10.9985 14.9002 9.52424 14.9 8Z"
                fill="white"
              />
            </svg>
            Facebook
          </button>
        </div>
        <div className="mt-8 mb-8 border-t border-gray-200">
          <p className="flex justify-center text text-gray-700 text-sm m-2">
            아직 회원이 아니신가요?
          </p>
          <Link href={"/signup"}>
            <button className="flex mx-auto bg-purple-600 hover:bg-purple-500 text-white items-center w-48 justify-center p-1 rounded-lg">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  d="M2.28577 8L13.7143 8"
                  stroke="white"
                  stroke-width="1.37143"
                  stroke-miterlimit="10"
                />
                <path
                  d="M9.71423 4L13.7142 8L9.71423 12"
                  stroke="white"
                  stroke-width="1.37143"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
              </svg>
              회원가입하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
