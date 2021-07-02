
const login = async (user) => {
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    //  const data = await res.json();
    // console.log("login", res);
    if(res.status !== 401) {
        return res.json();
    } else {
        return {isAuthenticated :false, user: {username: ''}};
    }
}

const register = async (user) => {
    const { username, password } = user;
    const data1 = {
        username,
        password
    }
    const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
    })

    const data = await res.json();
    // console.log("dataar", data);
    if (data.errors) {
        console.log("dataar", data.errors)
    }
    if (data.user) {
        // console.log("user is signed in");
        // setToHomepage(true);
    }
    return data;
}


const isAuth = async () => {
    const res = await fetch('/api/authenticated');
    if (res.status !== 401) {
        return await res.json();
        
    } else {
        return { isAuthenticated: false, user: { username: '' } };
    }
}

const logout = async () => {
    const res = await fetch('/api/logout');
    return res.json();
}

export {
    login, register, isAuth, logout
}




