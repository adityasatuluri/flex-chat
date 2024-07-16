import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";
import { GrAttachment } from 'react-icons/gr';
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";
import { bgThemes } from "@/lib/utils";

const MessageBar = () => {

  const [message, setMessage] = useState("");
  const emojiRef = useRef();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if(emojiRef.current && !emojiRef.current.contains(event.target)){
        setEmojiPickerOpen(false);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[emojiRef])

  const handleSendMessage = async() => {

  }

  const handleAddEmoji = (emoji) => {
    setMessage((msg) => msg+emoji.emoji);
  }


  return (
    <div className={`h-[10vh] ${bgThemes[2]} flex justify-center items-center px-8 mb-6 gap-6`}>
      <div className="flex-1 flex bg-[#272727] rounded-md items-center gap-5 pr-5">
        <input 
          type="text" 
          className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none"
          placeholder="Enter Message..."
          value = {message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'>
          <GrAttachment className="text-2xl" />
        </button>
        <div className="relative">
          <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'
            onClick={() => setEmojiPickerOpen(true)}>
            <RiEmojiStickerLine className="text-2xl" />
          </button>
          <div className="absolute bottom-16 right-0 " ref={emojiRef}>
            <EmojiPicker 
              theme="dark"
              open={emojiPickerOpen}
              onEmojiClick={handleAddEmoji}
              autoFocusSearch={false}
            />
          </div>
        </div>
      </div>
        <button className={`${bgThemes[0]} rounded-md flex items-center justify-center p-5 focus:border-none  hover:bg-[#097c26] focus:bg-[#097c26] focus:outline-none focus:text-white duration-300 transition-all`}
          onClick={handleSendMessage}>
          <IoSend className="text-2xl" />
        </button>
    </div>
  )
}

export default MessageBar