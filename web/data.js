var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Nguyen",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Tran",
                date: Date.now(),
                content: "Hey to you too!!!!"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "ABC",
                date: Date.now(),
                content: "Hey there buddy"
            },
            {
                author: "XYZ",
                date: Date.now(),
                content: "Hey bro"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}