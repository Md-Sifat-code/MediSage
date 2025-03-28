import React, { useEffect, useState } from "react";
import {
  MdOutlineStar,
  MdSearch,
  MdNotifications,
  MdFavoriteBorder,
  MdSettings,
  MdOutlineSmartToy,
  MdEvent,
  MdAccessTime,
  MdRoom,
  MdLocationOn,
  MdChatBubbleOutline,
  MdMenuBook,
  MdQrCode,
  MdMessage,
  MdLocalHospital,
  MdMic,
  MdAttachFile,
  MdSend,
} from "react-icons/md";
import doctorImg from "/doctor.png"; // Sample doctor image

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = "MediSage || Dashboard"; // Set the title
  }, []);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "ai" }[]
  >([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false); // Keep loading if you want a "Typing..." effect

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = { text: inputText, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setLoading(true);

    try {
      // Fetch AI response
      const response = await fetch(
        `https://unisage.onrender.com/ai/ask/${encodeURIComponent(inputText)}`
      );
      const aiText = await response.text();

      // Add AI message
      const aiMessage = { text: aiText, sender: "ai" as const };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex plus flex-col gap-4 min-h-screen md:p-6 bg-gray-50">
      {/* FIRST SECTION - GREETING & ACTIONS */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center bg-white shadow-md rounded-lg p-2 md:p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Good Morning, Sajid
          </h1>
          <MdOutlineStar className="text-yellow-500 text-2xl" />
        </div>

        <div className="flex flex-col p-2 md:p-0 md:flex-row items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-64 pl-10"
            />
            <MdSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
          </div>
          <MdNotifications className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <MdFavoriteBorder className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <MdSettings className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
            Consult AI Assistant
            <MdOutlineSmartToy className="text-xl" />
          </button>
        </div>
      </div>

      {/* SECOND SECTION - APPOINTMENT DETAILS */}
      <div className="flex flex-col md:flex-row justify-between items-center bgdash shadow-md rounded-lg p-4">
        <div className="flex items-center gap-4">
          <img
            src={doctorImg}
            alt="Doctor"
            className="w-[50px] h-[50px] rounded-full shadow"
          />
          <div>
            <h2 className="text-lg font-semibold text-white">
              Dr. James Carter
            </h2>
            <p className="text-sm text-white">Cardiologist</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mt-4 md:mt-0 md:items-center p-2 bg-[#183188] rounded-xl gap-6 text-white">
          <div className="flex items-center gap-2">
            <MdEvent className="text-4xl rounded-lg px-2 py-1 bg-blue-700" />
            <span>Thu, 12 April, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime className="text-4xl rounded-lg px-2 py-1 bg-blue-700" />
            <span>Time: 11:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <MdRoom className="text-4xl rounded-lg px-2 py-1 bg-blue-700" />
            <span>Cabin No: 512</span>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-4xl rounded-lg px-2 py-1 bg-blue-700" />
            <span>United Hospital, Dhaka</span>
          </div>
        </div>

        <MdChatBubbleOutline className="text-5xl mt-4 md:mt-0 text-black p-3 rounded-full bg-white cursor-pointer hover:text-blue-800" />
      </div>

      {/* THIRD SECTION - FEATURED CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-start bg-[#F9F5FF] shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdMenuBook className="text-4xl text-blue-600" />
          <p className="text-lg font-semibold mt-2">Book an Appointment</p>
          <p className="text-gray-500 text-sm">Find a Doctor</p>
        </div>
        <div className="flex flex-col items-start bg-[#EDFCF2] shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdQrCode className="text-4xl text-green-600" />
          <p className="text-lg font-semibold mt-2">Appointment with QR</p>
          <p className="text-gray-500 text-sm">Queuing without the hassle</p>
        </div>
        <div className="flex flex-col items-start bg-[#FEF6EE] shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdMessage className="text-4xl text-[#F8B294]" />
          <p className="text-lg font-semibold mt-2">Request Consultation</p>
          <p className="text-gray-500 text-sm">Talk to a Specialist</p>
        </div>
        <div className="flex flex-col items-start bg-[#FEF3F2] shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdLocalHospital className="text-4xl text-red-300" />
          <p className="text-lg font-semibold mt-2">Emergency Ambulance</p>
          <p className="text-gray-500 text-sm">Call Nearby Ambulance</p>
        </div>
      </div>

      {/* FOURTH SECTION - AI CHAT SYSTEM */}
      <div className="bg-gray-100 p-6 min-h-[60vh] shadow-md rounded-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2">
          <MdOutlineStar className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-gray-800">
            Wellness Assistant
          </h1>
          <span className="px-3 py-1 font-bold bg-blue-200 text-blue-600 rounded">
            AI
          </span>
        </div>

        {/* Messages */}
        <div className="flex flex-col flex-grow mt-4 space-y-2 overflow-y-auto max-h-[40vh]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat ${
                msg.sender === "user" ? "chat-end" : "chat-start"
              }`}
            >
              <div
                className={`chat-bubble ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="chat chat-start">
              <div className="chat-bubble bg-white text-black">Typing...</div>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-2 mt-12">
          <MdMic className="text-2xl text-gray-600 cursor-pointer" />
          <input
            type="text"
            className="input input-bordered flex-grow"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <MdAttachFile className="text-2xl text-gray-600 cursor-pointer" />
          <MdSend
            className="text-4xl text-blue-600 cursor-pointer"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
//okay
