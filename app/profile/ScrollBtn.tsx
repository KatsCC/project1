"use client";

export default function ScrollBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤되도록 설정
    });
  };
  return (
    <>
      <button
        className="fixed bottom-24 right-2 transform 
                  w-10 h-10 bg-gray-400 text-white rounded-full shadow-lg
                  flex items-center justify-center text-xl cursor-pointer
                  "
        onClick={scrollToTop}
        aria-label="페이지 맨 위로"
      >
        <div className="w-3 h-3 border-t-2 border-l-2 border-white transform rotate-45 bg-transparent translate-y-1/4"></div>
      </button>
    </>
  );
}
