"use client";

const years = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() + i + 1,
);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

export default function TimeSelect() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1">년도</label>
          <select name="year" className="w-full px-4 py-2 border rounded">
            <option value="2024">2024</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">월</label>
          <select name="month" className="w-full px-4 py-2 border rounded">
            <option value="">선택</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">일</label>
          <select name="day" className="w-full px-4 py-2 border rounded">
            <option value="">선택</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">시간</label>
          <select name="hour" className="w-full px-4 py-2 border rounded">
            <option value="">선택</option>
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">분</label>
          <select name="minute" className="w-full px-4 py-2 border rounded">
            <option value="">선택</option>
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
