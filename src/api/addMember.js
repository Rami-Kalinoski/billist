const addMember = async ( accessToken, projectId, email ) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let rawUser = JSON.stringify({
        'email': email
    });
    let requestOptionsUser = {
        method: 'POST',
        headers: myHeaders,
        body: rawUser,
        redirect: 'follow'
    };
    try {
        const user = await fetch('http://localhost:3001/user/email', requestOptionsUser);
        let raw = JSON.stringify({
            'projectId': projectId,
            'userId': user.id
        });
        
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        let response = await fetch('http://localhost:3001/project/add-member', requestOptions);
        let jsonData = await response.json();
        jsonData.status = response.status;
        jsonData.message = response.statusText;
        return jsonData;
    } catch (error) {
        console.error (error.message);
    }
};

export default addMember;