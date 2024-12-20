const login = async (email,password) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
        "email": email,
        "password": password
    });
    
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await fetch("http://localhost:3001/user/login", requestOptions);
    // let jsonData = await response.json();
    // Retornar el objeto completo para manejar status y JSON
    const jsonData = await response.json();
    return { status: response.status, ...jsonData };
    return jsonData;
}

export default login;