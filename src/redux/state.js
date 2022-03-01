let state = {
    profile: {
        postsData: [
            { id: 1, message: "Hi, I am React master!", likesCount: 12 },
            { id: 2, message: "No, I", likesCount: 100000 },
            { id: 3, message: "Hahaha", likesCount: 3 },
            { id: 4, message: "Blablabla", likesCount: 1 },
        ],
    },
    dialogs: {
        friends: [
            { name: "Artem", id: 1 },
            { name: "Dasha", id: 2 },
            { name: "Sasha", id: 3 },
        ],
        messages: {
            Artem: [
                { id: 1, message: "abc", me: true },
                { id: 2, message: "text", me: true },
                { id: 3, message: "lorem ipsum", me: true },
            ],
            Dasha: [{ message: "pararam", me: true }],
            Sasha: [{ message: "hi", me: false }],
        },
    },
};

export default state;
