const fecthProjectById = async (accessToken, projectId, setProject) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try {
        let response = await fetch(`http://localhost:3001/project/${projectId}`, requestOptions);
        // Manejar posibles errores de la respuesta
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let jsonData = await response.json();
        // Actualizar el estado con los proyectos
        return jsonData;
    } catch (error) {
        console.error("Error fetching projects:", error);
        setProject(null); // En caso de error, limpiar los proyectos
        return null;
    }
}

export default fecthProjectById;