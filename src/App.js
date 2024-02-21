import './App.css';
import image from './Assets/image.avif';
import { IoIosSend } from "react-icons/io";
import { useState, useRef  } from 'react';

function App() {

  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      isActive = false;
    }

    const status = document.querySelector(".status");

    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        getBotMessage.innerHTML = "Please do not use bad words"; // display the message
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Hello There how are you doing today?"; 
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Bye, have a nice day";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not active";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "You are welcome";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am fine, thank you";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "😁";
        document.querySelector("#input").value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "That is good";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "My name is Bot";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "The owner of this bot is Treasure";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML =
          "Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am 1 year old";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    userMessage.innerText = document.querySelector("#input").value = ""; // display the message
  };

  return (
    <div className='App' onLoad={checkStatus}>
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
            </div>
            <div className='btn'>
                <button onClick={handleInput}><span className='icon'><IoIosSend /></span><span className='send'>Send</span></button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  );

}

export default App;








