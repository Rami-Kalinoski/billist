const fetchProjects = async (accessToken, setProjects) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try {
        let response = await fetch("http://localhost:3001/project/", requestOptions);
        // Manejar posibles errores de la respuesta
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let jsonData = await response.json();
        // Actualizar el estado con los proyectos
        setProjects(jsonData.projects);
        return jsonData;
    } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // En caso de error, limpiar los proyectos
        return null;
    }
}

export default fetchProjects;