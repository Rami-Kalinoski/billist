const signup = async (username, email, password) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    var raw = JSON.stringify({
        'username': username,
        'email': email,
        'password': password
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await fetch('http://localhost:8080/api/usuarios/signup', requestOptions);
    let jsonData = await response.json();
    return jsonData;
};

export default signup;