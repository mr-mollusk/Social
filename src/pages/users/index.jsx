import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/reducers/usersReducer";
import UsersUi from "./ui";

const mapStateToProps = (state) => {
    return {
        usersPage: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
    }
}

const UsersPage = connect(mapStateToProps, mapDispatchToProps)(UsersUi);

export default UsersPage;