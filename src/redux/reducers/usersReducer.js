const actionType = {
    FOLLOW: "FOLLOW",
    UNFOLLOW: "UNFOLLOW",
    SET_USERS: "SET-USERS",
};

const initialState = {
    users: [
        {
            id: 1,
            fullname: "Артём",
            status: "Я король этой конторы",
            location: { city: "Санкт-Петербург", country: "Россия" },
            followed: true,
            photoUrl:
                "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=",
        },
        {
            id: 2,
            fullname: "Александр",
            status: "Бегу от Макса с кирпичём",
            location: { city: "Саратов", country: "Россия" },
            followed: false,
            photoUrl:
                "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=",
        },
        {
            id: 3,
            fullname: "Никита",
            status: "Я бэкэндер",
            location: { city: "Санкт-Петербург", country: "Россия" },
            followed: true,
            photoUrl:
                "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=",
        },
        {
            id: 4,
            fullname: "Андрей",
            status: "Когда-нибудь придушу Саню",
            location: { city: "Северодвинск", country: "Чехословакия" },
            followed: false,
            photoUrl:
                "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=",
        },
        {
            id: 5,
            fullname: "Сергей",
            status: "Работает на складе",
            location: { city: "Санкт-Петербург", country: "Россия" },
            followed: false,
            photoUrl:
                "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=",
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_USERS:
            return {
                ...state,
                users: [...state.users, actionType.users],
            };
        case actionType.FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case actionType.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        default: {
            return state;
        }
    }
};

export default usersReducer;

export const followAC = (userId) => ({ type: actionType.FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: actionType.UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: actionType.SET_USERS, users });
