import "./intro.css"

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
