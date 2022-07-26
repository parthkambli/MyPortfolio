import Social from "./Social";
import "./intro.css";

function Intro() {
  return (
    <div className="Intro text-center">
      <div className="container">
        <div className="row">
          <div className="IntorIMG col-sm-4">
            <img src="https://i.ibb.co/T2d0qCw/parth.jpg" alt="Profile" />
          </div>
          <div className="IntroContent col-sm-8">
            <h1>Hello!</h1>
            <p>
              I'm <span>Parth Kambli,</span> A ful stack webdeveloper passionate
              about creating interactive applications and experiences on the
              web.
            </p>
            <div className="row">
              <Social
                icon="fa-brands fa-linkedin-in fa-2xl"
                link="https://www.linkedin.com/in/parth-kambli-24880613a/"
              />
              <Social
                icon="fa-brands fa-facebook-f fa-2xl"
                link="https://www.facebook.com/parth.kambli.7"
              />
              <Social
                icon="fa-brands fa-github fa-2xl"
                link="https://github.com/parthkambli"
              />
              <Social
                icon="fa-brands fa-instagram fa-2xl"
                link="https://www.instagram.com/parth.kambli.7/"
              />
              {/* 
              
              
              <div className="col-1">
                <a
                  href="https://www.instagram.com/parth.kambli.7/"
                  target="blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
