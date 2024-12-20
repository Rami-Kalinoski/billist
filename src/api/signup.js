const signup = async (username, email, password) => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    let raw = JSON.stringify({
        'username': username,
        'email': email,
        'password': password
    });
    
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await fetch('http://localhost:3001/user/signup', requestOptions);
    let jsonData = await response.json();
    jsonData.status = response.status;
    jsonData.message = response.statusText;
    return jsonData;
};

export default signup;