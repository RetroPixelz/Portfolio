import "./App.css";

import back from "./Images/back3.jpg";
import {
  FaReact,
  FaAngular,
  FaWordpress,
  FaGithub,
  FaNodeJs,
  FaSwift,
} from "react-icons/fa";

import wowcraft from "./Images/WowCraft.png";
import feelfine from "./Images/FeelFine.png";
import Skins from "./Images/CounterSkins.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper" id="home">
        <header className="header">
          <img src={back} className="background" />
          <div className="info">
            <div className="textSection">
              <div className="profileImage"></div>
              <h2 className="name">JUSTIN KOSTER</h2>

              <h6 data-text="Junior&nbsp;developer">Junior developer</h6>
            </div>
          </div>
        </header>

        <div className="CvLayout">
          <div className="AboutMe">
            <h1 className="smalltext">About me</h1>

            <p className="paragraph">
              I am a young Junior developer with a passion for frontend aswell
              as mobile frameworks to create unique and appealing applications
            </p>
            <br />
            <br />

            <h1 className="smalltext">Download cv</h1>
            <a className="button" href="/cv.pdf" download>
              download cv
            </a>

            <div className="MyInfo">
              {/* <div className="copy">
                <p className="title">Name </p>
                <p className="titleCopy">Justin</p>
              </div>
              <div className="copy">
                <p className="title">Age </p>
                <p className="titleCopy">24</p>
              </div>
              <div className="copy">
                <p className="title">Phone </p>
                <p className="titleCopy">0736117003</p>
              </div>
              <div className="copy">
                <p className="title">Email </p>
                <p className="titleCopy"> 200100@virtualwindow.co.za</p>
              </div>
              <div className="copy">
                <p className="title">Github </p>
                <p className="titleCopy"> 200100@virtualwindow.co.za</p>
              </div> */}
            </div>
          </div>
          <div className="MySkills">
            <h1 className="smalltext">My SKills</h1>
            <div className="skills">
              <p className="skill">HTML</p>
              <p className="skill">CSS</p>
              <p className="skill">React</p>
              <p className="skill">React-native</p>
              <p className="skill">SwiftUI</p>
              <p className="skill">Node.js</p>
              <p className="skill">DotNet</p>
              <p className="skill">MongoDB</p>
            </div>
          </div>
        </div>

        <div className="Projects" id="section1">
          <h2 className="project-heading">PROJECTS</h2>

          <div className="Project">
            <div className="image">
              <img
                className="img"
                src={wowcraft}
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div className="SideSection">
              <div className="titlesection">
                <h1 className="WorkTitle">wow craft</h1>
              </div>
              <p className="ShortDescription">
                An application made with Angular and Node.js where users can
                manage stock leels of igredients aswell as craft items based on
                the available ingredients.
              </p>
              <a
                className="button"
                href="https://github.com/RetroPixelz/WowCraft"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="Project">
            <div className="image">
              <img
                className="img"
                src={feelfine}
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div className="SideSection">
              <div className="titlesection">
                <h1 className="WorkTitle">Feel Fine</h1>
              </div>
              <p className="ShortDescription">
                A mental health application that I made with React-Native, I
                also made use of IBM wattson natural language mdoel to perform
                emotion recognition.
              </p>
              <a
                className="button"
                href="https://github.com/RetroPixelz/FeelFine"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="Project">
            <div className="image">
              <img className="img" src={Skins} alt="Image 1" loading="lazy" />
            </div>
            <div className="SideSection">
              <div className="titlesection">
                <h1 className="WorkTitle">Counter SKins</h1>
              </div>
              <p className="ShortDescription">
                A mobile React Native application I created for enthusiasts of
                the game counter strike, users can enter competitions with their
                skin designs and stand a chance to win the competition voted by
                the community.
              </p>
              <a
                className="button"
                href="https://github.com/RetroPixelz/SkinsGive"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="techUsed">
          <h2>TECHNOLOGIES</h2>

          <div className="techs">
            <FaReact className="icon" />
            <FaAngular className="icon" />
            <FaWordpress className="icon" />
            <FaGithub className="icon" />
            <FaNodeJs className="icon" />
            <FaSwift className="icon" />
          </div>
        </div>

        <h2 className="touch-heading">GET IN TOUCH</h2>
        <form
          method="POST"
          action="https://getform.io/f/PdyZVWeQ"
          className="ContactSection"
          id="contact"
        >
          <label className="label">Name</label>
          <input placeholder="Name" name="name" className="input" />

          <label className="label">Email</label>
          <input placeholder="Email" name="email" className="input" />

          <label className="label">Message</label>
          <textarea
            placeholder="Message..."
            name="message"
            className="Message"
            rows={10}
          />

          <div className="submitButton">
            <button className="submit">submit</button>
          </div>
        </form>

        <div className="Main-footer">
          <div className="Main-footer-upper">
            <div className="FooterNames">
              <h1>Justin koster</h1>
              <p>A frontend focused web and app developer.</p>
              <p>That brings something unique to the table.</p>
            </div>
            <div className="FooterSocial">
              {/* <h1>Social</h1>
              <p>A frontend developer</p> */}
            </div>
          </div>
          <div className="Main-footer-lower">
            <p className="copyright">© Copyright 2024. Made by Justin Koster</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
