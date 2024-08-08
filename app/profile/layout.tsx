"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <>
      {children}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pt-2 pb-2">
        <div className="flex justify-around">
          <Link href={"/profile"}>
            <button
              className={`flex flex-col items-center p-2 text-sm font-bold text-gray-600 ${
                pathName === "/profile" ? "text-purple-700" : ""
              }`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6607 5.64287V3.07144"
                  stroke={pathName === "/profile" ? "#6D31ED" : "#565D6D"}
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M8.08929 5.64287V3.07144"
                  stroke={pathName === "/profile" ? "#6D31ED" : "#565D6D"}
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M2.94644 9.07144L21.8036 9.07144"
                  stroke={pathName === "/profile" ? "#6D31ED" : "#565D6D"}
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                />
                <path
                  d="M21.8036 5.64285L2.94644 5.64285L2.94644 21.0714L21.8036 21.0714L21.8036 5.64285Z"
                  stroke={pathName === "/profile" ? "#6D31ED" : "#565D6D"}
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
              예정된 약속
            </button>
          </Link>
          <Link href={"/profile/friendList"}>
            <button
              className={`flex flex-col items-center p-2 text-sm font-bold text-gray-600 ${
                pathName === "/profile/friendList" ? "text-purple-700" : ""
              }`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4107 20.0737C10.4107 19.556 10.1836 19.0631 9.77816 18.7417C9.15844 18.2497 8.08358 17.6429 6.55358 17.6429C5.02358 17.6429 3.94873 18.2497 3.32901 18.7417C2.92358 19.0631 2.69644 19.556 2.69644 20.0737L2.69644 21.0714H10.4107V20.0737Z"
                  stroke={
                    pathName === "/profile/friendList" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M6.55356 15.0714C7.73703 15.0714 8.69642 14.112 8.69642 12.9286C8.69642 11.7451 7.73703 10.7857 6.55356 10.7857C5.3701 10.7857 4.41071 11.7451 4.41071 12.9286C4.41071 14.112 5.3701 15.0714 6.55356 15.0714Z"
                  stroke={
                    pathName === "/profile/friendList" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M21.5536 20.0737C21.5536 19.556 21.3264 19.0631 20.921 18.7417C20.3013 18.2497 19.2264 17.6429 17.6964 17.6429C16.1664 17.6429 15.0916 18.2497 14.4719 18.7417C14.0664 19.0631 13.8393 19.556 13.8393 20.0737V21.0714H21.5536V20.0737Z"
                  stroke={
                    pathName === "/profile/friendList" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M17.6964 15.0714C18.8799 15.0714 19.8393 14.112 19.8393 12.9286C19.8393 11.7451 18.8799 10.7857 17.6964 10.7857C16.5129 10.7857 15.5536 11.7451 15.5536 12.9286C15.5536 14.112 16.5129 15.0714 17.6964 15.0714Z"
                  stroke={
                    pathName === "/profile/friendList" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M12.125 3.92856L12.125 9.07142"
                  stroke={
                    pathName === "/profile/friendList" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M9.55356 6.5L14.6964 6.5"
                  stroke={
                    pathName === "/profile/friendList" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
              친구 목록
            </button>
          </Link>
          <Link href={"/profile/publicPlan"}>
            <button
              className={`flex flex-col items-center p-2 text-sm font-bold text-gray-600 ${
                pathName === "/profile/publicPlan" ? "text-purple-700" : ""
              }`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.01787 7.35713C6.96465 7.35713 7.73216 6.58962 7.73216 5.64284C7.73216 4.69607 6.96465 3.92856 6.01787 3.92856C5.0711 3.92856 4.30359 4.69607 4.30359 5.64284C4.30359 6.58962 5.0711 7.35713 6.01787 7.35713Z"
                  stroke={
                    pathName === "/profile/publicPlan" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M6.01787 14.2143C6.96465 14.2143 7.73216 13.4468 7.73216 12.5C7.73216 11.5532 6.96465 10.7857 6.01787 10.7857C5.0711 10.7857 4.30359 11.5532 4.30359 12.5C4.30359 13.4468 5.0711 14.2143 6.01787 14.2143Z"
                  stroke={
                    pathName === "/profile/publicPlan" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M6.01787 21.0714C6.96465 21.0714 7.73216 20.3039 7.73216 19.3571C7.73216 18.4104 6.96465 17.6429 6.01787 17.6429C5.0711 17.6429 4.30359 18.4104 4.30359 19.3571C4.30359 20.3039 5.0711 21.0714 6.01787 21.0714Z"
                  stroke={
                    pathName === "/profile/publicPlan" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M11.1607 5.64285L21.4464 5.64285"
                  stroke={
                    pathName === "/profile/publicPlan" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M11.1607 12.5L21.4464 12.5"
                  stroke={
                    pathName === "/profile/publicPlan" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M11.1607 19.3571L21.4464 19.3571"
                  stroke={
                    pathName === "/profile/publicPlan" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
              모두의 약속
            </button>
          </Link>
          <Link href={"/profile/myProfile"}>
            <button
              className={`flex flex-col items-center p-2 text-sm font-bold text-gray-600 ${
                pathName === "/profile/myProfile" ? "text-purple-700" : ""
              }`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1964 15.0714H10.0536C7.21299 15.0714 4.91071 17.3737 4.91071 20.2143L4.91071 21.0714C4.91071 21.0714 7.58928 21.9286 12.625 21.9286C17.6607 21.9286 20.3393 21.0714 20.3393 21.0714V20.2143C20.3393 17.3737 18.037 15.0714 15.1964 15.0714Z"
                  stroke={
                    pathName === "/profile/myProfile" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M8.33929 7.35716C8.33929 4.99058 10.2584 3.07144 12.625 3.07144C14.9916 3.07144 16.9107 4.99058 16.9107 7.35716C16.9107 9.72373 14.9916 12.5 12.625 12.5C10.2584 12.5 8.33929 9.72373 8.33929 7.35716Z"
                  stroke={
                    pathName === "/profile/myProfile" ? "#6D31ED" : "#565D6D"
                  }
                  strokeWidth="2.05714"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
              내 정보
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
