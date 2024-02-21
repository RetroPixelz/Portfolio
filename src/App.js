import "./App.css";

import back from "./Images/back3.jpg";
import {
  FaReact,
  FaAngular,
  FaWordpress,
  FaGithub,
  FaNodeJs,
  FaSwift,
  FaLinkedin,
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
              🚀 Hey there, I'm Justin! At 24, I'm cruising through the world of
              coding, fueled by a passion for crafting seamless user
              experiences. As a junior developer with a sweet spot for frontend
              and mobile development, I'm on a mission to turn pixels into
              captivating digital adventures.
              <br />
              <br />
              Beyond the lines of code, you'll catch me daydreaming about sleek
              car designs. Yes, I'm that guy who finds the poetry in every
              engine rev and admires the dance of algorithms and automobiles
              alike.
              <br />
              <br />
              But what really drives me? Connecting with people. I'm the
              friendly neighborhood developer who believes in the power of
              camaraderie. Need a coding buddy, a tech troubleshooter, or just
              someone to share car stories with? I'm your go-to guy.
              <br />
              <br />
              So, buckle up and join me on this coding journey, where tech meets
              creativity, and friendships are forged in lines of code!
              <br />
              <br />
              👨‍💻✨ Let's build something amazing together!
            </p>
            <br />
            <br />

            {/* <h1 className="smalltext">Download cv</h1> */}
            <a className="button" href="/cv.pdf" download>
              download cv
            </a>

            <div className="MyInfo"></div>
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

              <p>
                Passionate Frontend Developer with a knack for crafting
                immersive web and app experiences.
              </p>
              <p>Bringing innovation to every line of code.</p>

              <br />
              <p>Email: Jmkoster21@gmail.com</p>
            </div>
            <div className="FooterSocial">
              <h1>Get in touch</h1>

              <a
                href="https://www.linkedin.com/in/justin-koster-502401225/"
                target="_blank"
              >
                <FaLinkedin
                  style={{ color: "#0077b5" }}
                  className="FooterIcon"
                />
              </a>
              <a href="https://github.com/RetroPixelz" target="_blank">
                <FaGithub style={{ color: "#181717" }} className="FooterIcon" />
              </a>
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
