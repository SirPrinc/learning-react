import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatMessage.css';


export function ChatMessage({message, sender}) {
  return (
    <div className={
      sender === "user" 
        ? 'chat-message-user' 
        : 'chat-message-robot'
      }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} alt="User Profile" className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message === 'Loading...' ? 
          <img src={LoadingSpinner} alt="Loading Spinner" className="laoding-spinner" /> : message
        }
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} alt="User Profile" className="chat-message-profile"/>
      )}
    </div>
  );
  
}