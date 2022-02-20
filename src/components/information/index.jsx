import InformationUi from "./ui";
import React from "react";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.Information = "";
    console.log("Constructor");
    this.state = { timerId: null, timer: 0 };
    this.onClick = this.OnClick.bind(this);
  }
  componentDidMount() {
    console.log("Mount");
    this.setState({
      timerId: setInterval(
        () => this.setState({ timer: this.state.timer + 1000 }),
        1000
      ),
    });
  }
  componentDidUpdate() {
    console.log(this.state.timer);
  }
  OnClick() {
      console.log("Click");
  }

  render() {
    console.log("Render");
    return <InformationUi className={this.props.className} title_text={this.props.title_text}/>;
  }
}

export default Information;
