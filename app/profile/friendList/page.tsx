import ListCom from "./ListCom";

export default function friendList() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-md mt-10 p-4 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center border-b border-gray-200 p-6">
          내 친구
        </h1>
        <div className="flex justify-around items-center pt-4 border-b border-gray-200 pb-4">
          <span className="font-semibold">4 명의 친구들</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex justify-center items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M14.2857 6.85715L9.14287 6.85715L9.14287 1.71429L6.85715 1.71429L6.85715 6.85715L1.71429 6.85715L1.71429 9.14287L6.85715 9.14287L6.85715 14.2857L9.14287 14.2857L9.14287 9.14287L14.2857 9.14287L14.2857 6.85715Z"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
            친구 추가
          </button>
        </div>
        <div className="w-full  mt-6 pb-6 border-b border-gray-200">
          <button className="w-full p-2 bg-purple-600 text-white rounded-lg flex justify-center items-center">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M7.42856 9.07143C5.81485 9.07143 4.38342 9.436 3.44285 9.75314C2.74856 9.988 2.28571 10.6423 2.28571 11.3754L2.28571 13.6429L7.42856 13.6429"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
              />
              <path
                d="M7.42858 9.07142C5.85087 9.07142 4.57144 7.22057 4.57144 5.64285V5.07142C4.57144 3.49371 5.85087 2.21428 7.42858 2.21428C9.0063 2.21428 10.2857 3.49371 10.2857 5.07142V5.64285C10.2857 7.22057 9.0063 9.07142 7.42858 9.07142Z"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M9.21484 11.3571C9.46856 10.3714 10.3634 9.64285 11.4286 9.64285C12.2743 9.64285 13.0126 10.1023 13.408 10.7851"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
              />
              <path
                d="M14.4114 9.44229L14.1669 11.9286L11.7269 11.392L14.4114 9.44229Z"
                fill="white"
              />
              <path
                d="M13.6423 13.0714C13.3886 14.0571 12.4937 14.7857 11.4286 14.7857C10.5829 14.7857 9.84459 14.3263 9.44916 13.6434"
                stroke="white"
                stroke-width="1.37143"
                stroke-miterlimit="10"
              />
              <path
                d="M8.44571 14.9863L8.69028 12.5L11.1303 13.0366L8.44571 14.9863Z"
                fill="white"
              />
            </svg>
            받은 친구요청
          </button>
        </div>
        <div className="mt-4 ">
          <ListCom></ListCom>
        </div>
      </div>
    </div>
  );
}
