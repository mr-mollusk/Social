import ProfilePageUi from "./ui";

const ProfilePage = ({ profile }) => {
    return <ProfilePageUi postsData={profile.postsData} />;
};

export default ProfilePage;
