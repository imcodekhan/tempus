import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const timeOptions = [
  { label: "5 min", value: 60 },
  { label: "1 hr", value: 3600 },
  { label: "1 day", value: 86400 },
  { label: "1 week", value: 604800 },
  { label: "1 month", value: 2592000 },
];

const TimeChips = (props) => {
  const { setSelectedTime, selectedTime, customDate, setCustomDate } = props;

  const handleCustomTimeChange = (date) => {
    setCustomDate(date.getTime());
    setSelectedTime("custom");
  };

  return (
    <div>
      <div className="flex space-x-4 p-20">
        {timeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedTime(option.value)}
            className={`px-6 py-3 flex flex-wrap rounded-full text-white text-4xl transform transition-transform duration-200 ease-in-out ${
              selectedTime === option.value
                ? "bg-blue-500 shadow-lg"
                : "bg-gray-500 shadow-md"
            } ${
              selectedTime === option.value
                ? "hover:scale-105"
                : "hover:scale-100"
            }`}
          >
            {option.label}
          </button>
        ))}
        <DatePicker
          selected={customDate}
          onChange={handleCustomTimeChange}
          customInput={
            <button
              className={`px-6 py-3 rounded-full text-white text-4xl transform transition-transform duration-200 ease-in-out ${
                selectedTime === "custom"
                  ? "bg-blue-500 shadow-lg"
                  : "bg-gray-500 shadow-md"
              } ${
                selectedTime === "custom"
                  ? "hover:scale-105"
                  : "hover:scale-100"
              }`}
            >
              {customDate ? customDate.toLocaleString() : "Custom"}
            </button>
          }
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
    </div>
  );
};

export default TimeChips;
