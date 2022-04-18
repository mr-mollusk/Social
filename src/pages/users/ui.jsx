import s from "./styles.module.scss";

const UsersPageUi = ({ usersPage, follow, unfollow, setUsers }) => {
    if (usersPage.users.lenght === 0)
        setUsers([
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
        ]);

    return (
        <div className={s.wrapper}>
            {usersPage.users.map((u) => (
                <div key={u.id} className={s.user}>
                    <span>
                        <div>
                            <img src={u.photoUrl} />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        unfollow(u.id);
                                    }}
                                >
                                    "Отписаться"
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        follow(u.id);
                                    }}
                                >
                                    "Подписаться"
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default UsersPageUi;
