import React,{useState, useEffect} from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([
    {name:"Alan", message:"message1"},
    {name:"Bob", message:"message2"},
    {name:"Carol", message:"message3"},
    {name:"Dean", message:"message4"},
    {name:"Elin", message:"message5"}
  ]);
  const [msg, setMsg] = useState("");

  const sendChat = () => {

    const chat = [...chats];
    chat.push({name, message:msg});
    setChats(chat);
    setMsg('');
  }
  return (
<div className="chat">
{name ? null :<div>
    <input
    type="text"
    placeholder="Enter name to Start"
    onBlur={(e) => setName(e.target.value)}
     />
  </div>}

  {name ? <div>
  <h3>User:{name}</h3>
  <div className="chat-container">
    {chats.map((c)=><div className={`container ${c.name === name ? 'me' : '' }`}>
    <p className="chatbox">
    <strong>{c.name}:</strong>
    <span>{c.message}</span>
   </p>
    </div>)}
  </div>

<div className="bottom">
  <input 
   type="text"
   placeholder="Enter your message"
   value={msg}
   onInput={(e) => setMsg(e.target.value)}>
   </input>
  <button onClick={(e)=> sendChat()}>Send</button>
</div>
  </div> : null }

</div>
  );
}

export default App;
