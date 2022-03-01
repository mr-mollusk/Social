import InformationUi from "./ui";
import React from "react";

class Information extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return <InformationUi className={this.props.className} title_text={this.props.title_text}/>;
  }
}

export default Information;
