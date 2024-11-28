import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const AuthContext = createContext();

// Proveedor de contexto para envolver la app
export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        // Inicializa el estado a partir de localStorage
        const storedValue = localStorage.getItem('isLogged');
        return storedValue ? JSON.parse(storedValue) : false;
    });

    // Sincroniza localStorage con el estado de isLogged
    useEffect(() => {
        localStorage.setItem('isLogged', JSON.stringify(isLogged));
    }, [isLogged]);

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    );
};