function create1stPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("created the first post");
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("updated last activity");
        }, 2000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("deleted the post");
        }, 1500);
    });
}

// Create the first post and update activity
Promise.all([create1stPost(), updateLastUserActivityTime()])
    .then((values) => {
        const [postMessage, activityMessage] = values;
        console.log(postMessage);
        console.log(activityMessage);

        // Initiate the delete process after printing
        return deletePost();
    })
    .then((deleteMessage) => {
        console.log(deleteMessage);

        // After successfully deleting, log the new set of posts
        console.log("Fetching new set of posts...");

        // Simulate fetching new posts
        const newPosts = ["New post 1", "New post 2", "New post 3"];
        newPosts.forEach((post) => {
            console.log(post);
        });
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });