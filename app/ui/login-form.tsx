"use client";

import { authenticate } from "@/app/lib/action";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-1 pt-8">
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              e-mail
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:outline-none focus:border-customPurple"
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해 주세요"
                required
              />
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform -translate-y-7 translate-x-3"
              >
                <path
                  d="M2.56512 3.17599L8.49998 8.57142L14.4343 3.17657"
                  stroke="#171A1F"
                  stroke-width="1.37143"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.6429 2.85715L3.35715 2.85715C2.72597 2.85715 2.21429 3.36882 2.21429 4L2.21429 12C2.21429 12.6312 2.72597 13.1429 3.35715 13.1429L13.6429 13.1429C14.274 13.1429 14.7857 12.6312 14.7857 12L14.7857 4C14.7857 3.36882 14.274 2.85715 13.6429 2.85715Z"
                  stroke="#171A1F"
                  stroke-width="1.37143"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
              </svg>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:outline-none focus:border-customPurple"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  required
                />
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -translate-y-7 translate-x-3"
                >
                  <path
                    d="M12.5 7.42857L4.49997 7.42857C3.86879 7.42857 3.35712 7.94025 3.35712 8.57143L3.35712 13.1429C3.35712 13.774 3.86879 14.2857 4.49997 14.2857L12.5 14.2857C13.1312 14.2857 13.6428 13.774 13.6428 13.1429L13.6428 8.57143C13.6428 7.94025 13.1312 7.42857 12.5 7.42857Z"
                    stroke="#171A1F"
                    stroke-width="1.37143"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <path
                    d="M8.49997 12C9.13116 12 9.64283 11.4883 9.64283 10.8571C9.64283 10.226 9.13116 9.71428 8.49997 9.71428C7.86879 9.71428 7.35712 10.226 7.35712 10.8571C7.35712 11.4883 7.86879 12 8.49997 12Z"
                    stroke="#171A1F"
                    stroke-width="1.37143"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <path
                    d="M11.3572 5.14285V4.57143C11.3646 3.82127 11.0739 3.09887 10.5488 2.56308C10.0237 2.02728 9.30732 1.72197 8.55717 1.71428H8.50003C7.74988 1.70682 7.02747 1.9976 6.49168 2.52267C5.95589 3.04775 5.65057 3.76413 5.64288 4.51428V5.14285"
                    stroke="#171A1F"
                    stroke-width="1.37143"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            className="mt-4 w-full bg-purple-600 flex justify-center items-center text-white rounded hover:bg-purple-500 p-1"
            aria-disabled={isPending}
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.21423 8L10.7857 8"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
              />
              <path
                d="M7.92859 5.14286L10.7857 8L7.92859 10.8571"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M7.35718 1.71429L13.0715 1.71429C13.3746 1.71429 13.6653 1.83469 13.8796 2.04902C14.0939 2.26335 14.2143 2.55404 14.2143 2.85714L14.2143 13.1429C14.2143 13.446 14.0939 13.7367 13.8796 13.951C13.6653 14.1653 13.3746 14.2857 13.0715 14.2857L7.35718 14.2857"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
            로그인
          </button>
          <div className="flex h-8 items-end space-x-1">
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">
                  이메일 또는 비밀번호를 확인해 주세요.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
