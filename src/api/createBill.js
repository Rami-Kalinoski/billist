const createBill = async ( accessToken, projectId, description, date, totalAmount, contributors, file ) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let raw = JSON.stringify({
        'description': description,
        'total_amount': totalAmount,
        'id_project': projectId,
        'image': null,
        'date': date,
        'contributors': contributors
    });
    
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await fetch('http://localhost:3001/bill/create', requestOptions);
    let jsonData = await response.json();
    jsonData.status = response.status;
    jsonData.message = response.statusText;
    return jsonData;
};

export default createBill;