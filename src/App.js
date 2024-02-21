import './App.css';
import image from './Assets/image.avif';
import { IoIosSend } from "react-icons/io";

function App() {

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='content'>
          <div className='header'>

            <div className='img'>
              <img src={image} alt='' />
            </div>

            <div className='right'>
              <div className='name'>ChatBot with ChatGPT</div>
              <div className='status'>Active</div>
            </div>

          </div>
        <div className='main'>
          <div className='main_content'>
            <div className='messages'>
              <div className='bot-message' id='message1'></div>
              <div className='human-message' id='message2'></div>
            </div>
          </div>
        </div>

        <div className='bottom'>
          <div className='btm'>
            <div className='input'>
              <input type='text' id='input' placeholder='Enter your message...' />
              <div className='btn'>
                <button><span className='icon'><IoIosSend /></span><span className='send'>Send</span></button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  );

}

export default App;








