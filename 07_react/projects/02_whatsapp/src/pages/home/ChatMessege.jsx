import { useContext, useEffect } from "react";
import { useState } from "react";
import { collection, addDoc, setDoc, doc, getDoc, getDocs } from "firebase/firestore";
import "../../App.css";
import { db } from "../../utils/firebase";
import { ProfileContext } from "../../context/profileContext";
import { UserContext } from "../../context/userContext";

export default function ChatMessage() {
  const { user } = useContext(UserContext)
  const { profileState , profileDispatch } = useContext(ProfileContext)
  console.log("🚀 ~ ChatMessage ~ profileState:", profileState)
  const username = user.uid;
  const sender = profileState.messageData.uid;
  const mergeUid = [username, sender]
  const [chat, setChat] = useState("");
  const [time, setTime] = useState("");
  const date = () => {
    const getDate = new Date();
    const hours =
      getDate.getHours() < 10
        ? `0${getDate.getHours()}`
        : getDate.getHours() > 12
          ? getDate.getHours() - 12
          : getDate.getHours();
    const minutes =
      getDate.getMinutes() < 10
        ? `0${getDate.getMinutes()}`
        : getDate.getMinutes();
    const amPm = getDate.getHours() > 12 ? "PM" : "AM";
    setTime(`${hours}:${minutes} ${amPm}`);
  };
  const [allchats, setAllChat] = useState([]);
  const messageHandler = async () => {
    await gettingData('chats');
    if (chat !== "") {
      date();
      const message = {
        message: chat,
        time: time,
        sender: username,
        recieverName: sender,
      };
      localStorage.setItem(mergeUid.sort().join('-'), JSON.stringify([...allchats, message]));
      await firestoreDatabase([...allchats, message], "chats");
      setChat("");
      await gettingData("chats");
    }
  };
  const firestoreDatabase = async (chat, docName) => {
    console.log("🚀 ~ firestoreDatabase ~ docName:", docName)
    try {
      const docRef = await setDoc(doc(db, docName, mergeUid.sort().join('-')), {
        message: [...chat],
        info: {
          username: username,
          sender: sender,
        },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const gettingData = async (docName) => {
    try {
      const result = await getDoc(doc(db, docName, mergeUid.sort().join('-')));
      if (docName === "chats") {
        const messages = result?.data()?.message || [];
        localStorage.setItem(mergeUid.sort().join('-'), JSON.stringify(messages));
        setAllChat(messages); // Update state
      } else {
        const messages = result?.data()?.message || [];
        localStorage.setItem(docName, JSON.stringify(messages))
        // setDeleteChat(messages)
      }
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  useEffect(() => {
    gettingData("chats");
    // gettingData('deleteMsg');
    const savedchats = JSON.parse(localStorage.getItem(mergeUid.sort().join('-'))) || [];
    setAllChat(savedchats);
  }, []);
  useEffect(() => {
    date();
    gettingData("chats");
    // gettingData('deleteMsg');
  }, [chat, messageHandler]);
  return (
    <div className="main bg-slate-700 flex flex-col flex-grow h-screen">
      {/* //* top header  */}
      <div className="navbar bg-slate-500 w-full h-12 flex justify-between items-center py-1 px-2">
        <div className="profile flex gap-2">
          <div className="img w-10 h-10 bg-slate-100 rounded-full flex justify-center items-center text-xl">{profileState.messageData.username.slice(0, 2)}</div>
          <div className="content h-full flex flex-col justify-evenly">
            <div className="name text-slate-100 text-sm">{profileState.messageData.username}</div>
            <div className="status text-gray-300 text-xs">
              last seen today at...
            </div>
          </div>
        </div>
      </div>
      {/*  //* mergeUid.sort().join('-')  */}
      <div className="messages flex flex-col flex-grow bg-slate-600 overflow-y-auto overflow-x-hidden relative p-3">
        {allchats.map((data, index) =>
        (data.sender === username ? (
          <div key={index} className=" right-msg flex justify-end mb-1">
            <div className="send-msg relative inline-block max-w-[50%] bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
              <div className="hoverIcon absolute left-[-25px] top-[25%] rounded-full hidden justify-center items-center bg-slate-300 p-0 m-0 transition-opacity cursor-pointer">
                <i class="bx bx-chevron-down p-0 m-0 " onClick={(e) => { deleteMsgHandler(e.target) }}></i>
              </div>
              <div className="rm-inner-msg text-sm flex flex-grow justify-start ">
                {data?.isDelete ? 'This message was deleted by sender' : data.message}
              </div>
              <div className="timestamp text-[8px] flex justify-end">
                {data.time}
              </div>
            </div>
          </div>
        ) : data.sender == sender ? (
          <div key={index} className="left-msg mb-1">
            <div className=" recieved-msg relative inline-block max-w-[50%] bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg ">
              <div className="hoverIcon absolute right-[-25px] top-[25%] rounded-full hidden justify-center items-center bg-slate-300 p-0 m-0 transition-opacity cursor-pointer">
                <i class="bx bx-chevron-down p-0 m-0 " onClick={(e) => { deleteMsgHandler(e.target) }}></i>
              </div>
              <div className="rm-inner-msg text-sm flex justify-start">
                {data?.isDelete ? 'This message was deleted by sender' : data.message}
              </div>
              <div className="timestamp text-[8px] flex justify-end">
                {data.time}
              </div>
            </div>
          </div>
        ) : (
          ""
        ))
        )}
      </div>
      {/*  //* bottom */}
      <div className="footer bg-slate-700 w-full py-2">
        <div className="wrap flex gap-2 mx-3">
          <div className="emoji px-1 rounded-full text-slate-300 hover:bg-slate-500 transition-opacity cursor-pointer flex justify-center items-center">
            <i class='bx bx-smile text-xl'></i></div>
          <div className="emoji px-1 rounded-full text-slate-300 hover:bg-slate-500 transition-opacity cursor-pointer flex justify-center items-center">
            <i class="fa-solid fa-paperclip text-xl"></i></div>
          {/* <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div> */}
          <input
            type="text"
            className="w-5/6 text-sm text-slate-600 font-serif active: outline-none bg-slate-300 rounded-full pl-4 flex-grow"
            placeholder="Enter your message..."
            value={chat}
            onChange={(e) => {
              setChat(e.target.value);
            }}
          />
          <div
            className="emoji px-1 rounded-full text-slate-300 hover:bg-slate-500 transition-opacity cursor-pointer flex justify-center items-center"
          ><i class='bx bxs-microphone text-xl'></i></div>
          <div
            className="sender px-1 rounded-full text-slate-300 hover:bg-slate-500 transition-opacity cursor-pointer flex justify-center items-center"
            onClick={messageHandler}
          ><i class='bx bxs-send text-xl'></i></div>
        </div>
      </div>
    </div>
  );
}
