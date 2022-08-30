import { Component } from "react";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1 className="whiteText"><b>Name:</b> Itamar Melamed</h1>
        <h1 className="whiteText"><b>Age:</b> 20</h1>
        <h1 className="whiteText"><b>Lives In:</b> Israel</h1>
        <h1 className="whiteText"><b>Occupation:</b> Attending programming course</h1>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png" alt="walter white"></img>
      </div>
    );
  }
}
export default AboutPage;
