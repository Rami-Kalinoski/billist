import { json } from "react-router-dom";

const fecthBillsByProjectId = async (accessToken, projectId) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try {
        let response = await fetch(`http://localhost:3001/bill/project/${projectId}`, requestOptions);
        // Manejar posibles errores de la respuesta
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return null;
    }
}

export default fecthBillsByProjectId;