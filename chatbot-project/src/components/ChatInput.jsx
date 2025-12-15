import { useState} from 'react';
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';


export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const newChatMessages = [
      //  here we create a copy of the array of the chats
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]
    
    // set the chat messages.
    setChatMessages(
      [
        ...newChatMessages,
        {
          message: 'Loading...',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]
    );



    const response = await
    Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      sendMessage();
    }
    else if(event.key === 'Escape') {
      setInputText('');
    }
  }


  return (
    // when returning multiple element in React we use the fracments
    <div className="chat-input-container">
      <input 
        type="text" 
        placeholder="Send message to a chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}
