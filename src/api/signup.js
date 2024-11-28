const signup = async (username, email, password) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    var raw = JSON.stringify({
        'name': username,
        'email': email,
        'password': password
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await fetch('http://localhost:3001/user/register', requestOptions);
    let jsonData = await response.json();
    jsonData.status = response.status;
    jsonData.message = response.statusText;
    return jsonData;
};

export default signup;