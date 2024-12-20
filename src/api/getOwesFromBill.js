const getOwesFromBill = async (accessToken, projectId ) => {
    // ENCONTRAMOS TODOS LOS GASTOS DE UN PROYECTO
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        let responseBills = await fetch(`http://localhost:3001/bill/project/${projectId}`, requestOptions);
        // Manejar posibles errores de la respuesta
        if (!responseBills.ok) {
            throw new Error(`HTTP error! Status: ${responseBills.status}`);
        }
        let jsonData = await responseBills.json();

        //  ENCONTRAMOS CUÁNTO DEBE EL USUARIO EN SESIÓN EN ESTE PROYECTO
        return 1000
    } catch (error) {
        console.error("Error fetching projects:", error);
        return null;
    }
}

export default getOwesFromBill;