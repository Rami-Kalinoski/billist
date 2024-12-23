const createProject = async ( accessToken, name, description, distribution ) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    
    let raw = JSON.stringify({
        'name': name,
        'description': description,
        'distribution': 'equals'
    });
    
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await fetch('http://localhost:3001/project/create', requestOptions);
    let jsonData = await response.json();
    jsonData.status = response.status;
    jsonData.message = response.statusText;
    return jsonData;
};

export default createProject;