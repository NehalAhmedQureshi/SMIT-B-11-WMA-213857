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
  const [allChats, setAllChat] = useState([
    //      {
    //      sendername: 'nehal',
    //      message: 'Hi',
    //      time: "12:10 pm",
    //      recieverName: "username",
    // },{
    //      sendername: 'username',
    //      message: 'kia kr rh ho',
    //      time: "01:10 pm",
    //      recieverName: "nehal",
    // },
    // {
    //      sendername: 'nehal',
    //      message: 'hello',
    //      time: "01:10 pm",
    //      recieverName: "username",
    // },{
    //      sendername: 'username',
    //      message: '.....?',
    //      time: "01:10 pm",
    //      recieverName: "nehal",
    // },
  ]);
  const deleteMsgHandler = async (data) => {
    const messageContent = data.parentElement.parentElement.children[1].innerHTML;
    // console.log(messageContent, 'delete msg');

    // Filter out the message to be deleted
    const updatedChats = allChats.filter(chat => chat.message !== messageContent);

    // Update the state with the filtered chats
    setAllChat(updatedChats);
    await firestoreDatabase(updatedChats)

    // Update localStorage as well
    localStorage.setItem('chats', JSON.stringify(updatedChats));

    // console.log("🚀 ~ deleteMsgHandler ~ updatedChats:", updatedChats);
};

  const messageHandler = async () => {
    // console.log('m chala')
    await gettingData();
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
      await firestoreDatabase([...allChats, message]);
      // console.log('After setting chat and updating database:', message);
      // console.log('message handler wala function hu')
      setChat("");
      // console.log("🚀 ~ messageHandler ~ message:", message)
      await gettingData();
    }
  };
  const fakeMsgHandler = async () => {
    await gettingData();
    date();
    const fakeMsg = {
      message: chat,
      time: time,
      sendername: "username",
      recieverName: user,
    };
    if (chat !== "") {
      localStorage.setItem("chats", JSON.stringify([...allChats, fakeMsg]));
      await firestoreDatabase([...allChats, fakeMsg]);
      // console.log('fake msg wala function hu')
      setChat("");
      await gettingData();
    }
  };
  const firestoreDatabase = async (chat) => {
    // console.log("🚀 ~ firestoreDatabase ~ chat:", chat)
    // console.log('data base update kr rh hu')
    try {
      const docRef = await setDoc(doc(db, "chats", `${user}-${sender}`), {
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
  const gettingData = async () => {
    try {
      //     console.log('Fetching data from the database...');
      const result = await getDoc(doc(db, "chats", `${user}-${sender}`));

      //     console.log('After result retrieval');
      // Ensure `result` exists and `message` field is retrieved properly
      const messages = result?.data()?.message || [];

      //     console.log("🚀 ~ gettingData ~ messages:", messages);
      //     console.log('Saving data to localStorage...');
      localStorage.setItem("chats", JSON.stringify(messages));

      setAllChat(messages); // Update state
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
    gettingData();
    const savedChats = JSON.parse(localStorage.getItem("chats"));
    setAllChat(savedChats);
  }, []);
  useEffect(() => {
    date();
    gettingData();
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
      <div className="messages flex flex-col flex-grow bg-slate-600 border-3 overflow-y-auto overflow-x-hidden relative p-3">
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
                  <i class="bx bx-chevron-down p-0 m-0 " onClick={(e)=>{deleteMsgHandler(e.target)}}></i>
                </div>
                <div className="rm-inner-msg text-sm flex flex-grow justify-start ">
                  {data.message}
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
                  <i class="bx bx-chevron-down p-0 m-0 " onClick={(e)=>{deleteMsgHandler(e.target)}}></i>
                </div>
                <div className="rm-inner-msg text-sm flex justify-start">
                  {data.message}
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
          <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"><i class='bx bx-smile'></i></div>
          <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
          <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
          <input
            type="text"
            className="w-5/6 text-sm text-slate-600 font-serif active: outline-none bg-slate-300 rounded-full pl-4"
            placeholder="Enter your message..."
            value={chat}
            onChange={(e) => {
              setChat(e.target.value);
            }}
          />
          <div
            className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"
            onClick={fakeMsgHandler}
          ></div>
          <div
            className="sender px-2 rounded-full bg-slate-300 cursor-pointer flex justify-center items-center"
            onClick={messageHandler}
          ><i class='bx bxs-send w-full'></i></div>
        </div>
      </div>
    </div>
  );
}
