import { useEffect } from "react";
import { useState } from "react";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import "../../App.css";
import { db } from "../../utils/firebase";

export default function ChatMessage() {
  const user = "nehal";
  const sender = "username";

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
  const [allChats, setAllChat] = useState([]);
  const [allDeleteChats , setDeleteChat] = useState([])
  const deleteMsgHandler = async (data) => {
    const messageContent = data.parentElement.parentElement.children[1].innerHTML;
    const dateContent = data.parentElement.parentElement.children[2].innerHTML;
    console.log("🚀 ~ deleteMsgHandler ~ dateContent:", dateContent);
  
    // Create a copy of allChats to modify
    const updatedChats = [];
  
    // Loop through all chats to find and mark the message to delete
    for (const chat of allChats) {
      if (chat.message === messageContent && chat.time === dateContent) {
        // Mark the specific message as deleted
        const deletedChat = { ...chat, isDelete: true };
  
        // Update Firestore database for this specific message
        await firestoreDatabase([deletedChat], 'deleteMsg');
  
        // Store the deleted message temporarily in localStorage
        localStorage.setItem('deleteMsg', JSON.stringify(deletedChat));
  
        updatedChats.push(deletedChat);
      } else {
        updatedChats.push(chat);
      }
    }
  
    // Update the state with the modified chats
    setAllChat(updatedChats);
  
    // Update the Firestore database with the entire updated chat list
    await firestoreDatabase(updatedChats, 'chats');
  
    // Persist the updated chats to localStorage
    localStorage.setItem('chats', JSON.stringify(updatedChats));
  
    console.log("🚀 ~ deleteMsgHandler ~ updatedChats:", updatedChats);
  };
  
  

  const messageHandler = async () => {
    // console.log('m chala')
    await gettingData('chats');
    if (chat !== "") {
      date();
      // console.log(chat, 'chat =.>>>')
      const message = {
        message: chat,
        time: time,
        sendername: user,
        recieverName: "username",
      };
      localStorage.setItem("chats", JSON.stringify([...allChats, message]));
      await firestoreDatabase([...allChats, message],'chats');
      // console.log('After setting chat and updating database:', message);
      // console.log('message handler wala function hu')
      setChat("");
      // console.log("🚀 ~ messageHandler ~ message:", message)
      await gettingData('chats');
    }
  };
  const fakeMsgHandler = async () => {
    await gettingData('chats');
    date();
    const fakeMsg = {
      message: chat,
      time: time,
      sendername: "username",
      recieverName: user,
    };
    if (chat !== "") {
      localStorage.setItem("chats", JSON.stringify([...allChats, fakeMsg]));
      await firestoreDatabase([...allChats, fakeMsg],'chats');
      // console.log('fake msg wala function hu')
      setChat("");
      await gettingData('chats');
    }
  };
  const firestoreDatabase = async (chat,docName) => {
    console.log("🚀 ~ firestoreDatabase ~ docName:", docName)
    // console.log("🚀 ~ firestoreDatabase ~ chat:", chat)
    // console.log('data base update kr rh hu')
    try {
      const docRef = await setDoc(doc(db, docName, `${user}-${sender}`), {
        message: [...chat],
        info: {
          username: user,
          sendername: sender,
        },
      });
      // console.log("Document written with ID: ", docRef);
      // window.localStorage.setItem('id',docRef)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const gettingData = async (docName) => {
    try {
      //     console.log('Fetching data from the database...');
      const result = await getDoc(doc(db, docName, `${user}-${sender}`));

      //     console.log('After result retrieval');
      // Ensure `result` exists and `message` field is retrieved properly
      if(docName === 'chats'){
        const messages = result?.data()?.message || [];

      //     console.log("🚀 ~ gettingData ~ messages:", messages);
      //     console.log('Saving data to localStorage...');
      localStorage.setItem("chats", JSON.stringify(messages));

      setAllChat(messages); // Update state
      }else{
        const messages = result?.data()?.message || [];
        localStorage.setItem(docName ,  JSON.stringify(messages) )
        setDeleteChat(messages)
      }
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  // To verify `allChats` after updating it
  useEffect(() => {
    // console.log(allChats, 'Updated allChats');
  }, [allChats]);

  useEffect(() => {
    // console.log('useEffect k ander hu data laun ga data base ss pir local storage s laun ga')
    // console.log('data base s data la k ab local storage s la rh hu')
    gettingData('chats');
    gettingData('deleteMsg');
    const savedChats = JSON.parse(localStorage.getItem("chats"));
    setAllChat(savedChats);
  }, []);
  useEffect(() => {
    date();
    gettingData('chats');
    gettingData('deleteMsg');
  }, [chat, messageHandler, fakeMsgHandler]);
  // update firestore database
  // useEffect(()=>{
  //      console.log('useEffect k ander hu data base update kru ga')
  //      firestoreDatabase()
  // },[allChats])
  // getting chats from localStorage or database

  return (
    <div className="main bg-slate-700 flex flex-col flex-grow h-screen">
      {/* //* top header  */}
      <div className="navbar bg-slate-500 w-full h-12 flex justify-between items-center py-1 px-2">
        <div className="profile flex gap-2">
          <div className="img w-10 h-10 bg-slate-100 rounded-full"></div>
          <div className="content h-full flex flex-col justify-evenly">
            <div className="name text-slate-100 text-sm">user name</div>
            <div className="status text-gray-300 text-xs">
              last seen today at...
            </div>
          </div>
        </div>
      </div>
      {/*  //* chats  */}
      <div className="messages flex flex-col flex-grow bg-slate-600 overflow-y-auto overflow-x-hidden relative p-3">
        {/* //* recieved msg */}
        {/* <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">Hi</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
        {/* //* send message */}
        {/* <div className="right-msg flex justify-end">
                         <div className="send-msg inline-block bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">ti</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
        {/* //* recieved msg */}
        {/* <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">Kha ho,kia kr ri ho</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
        {/* //* send message */}
        {/* <div className="right-msg flex justify-end">
                         <div className="send-msg inline-block bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">kch ni</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
        {/* //* recieved msg */}
        {/* <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">kesa ho , kia kr rh hoo</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
        {allChats.map((data, index) =>
          data.sendername == "nehal" ? (
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
          ) : data.sendername == "username" ? (
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
          )
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
            onClick={fakeMsgHandler}
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
