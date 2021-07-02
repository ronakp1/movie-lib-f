const submitComment = async (comment) => {
    console.log("commentservicebefore", comment);
    const res = await fetch('/api/comment/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    const data = await res.json();

    console.log("commentservice", data);
    return data;
}

const getComments = async (comment) => {
    console.log("commentservicebefore", comment);

    if (comment.movieId !== undefined) {
        const res = await fetch('/api/comment/getComments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        const data = await res.json();

        console.log("commentservice", data);
        return data;
    }
}


export {
    submitComment, getComments
}
