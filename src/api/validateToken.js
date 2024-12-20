export default async function validateToken(accessToken) {
    try {
        const response = await fetch('http://localhost:3001/api/validate-token', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`, // Verifica el formato aquí
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            return { status: 200 };
        } else if (response.status === 401) {
            console.warn("Acceso denegado: Token no proporcionado.");
            return { status: 401 };
        } else if (response.status === 403) {
            console.warn("Acceso denegado: Token inválido o expirado.");
            return { status: 403 };
        } else {
            console.warn("Error desconocido:", response.status);
            return { status: response.status };
        }
    } catch (error) {
        console.error("Error en validateToken:", error);
        return { status: 500 };
    }
}