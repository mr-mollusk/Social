import { connect } from "react-redux";
import ProfilePageUi from "./ui";

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const ProfilePage = connect(mapStateToProps)(ProfilePageUi);

export default ProfilePage;
