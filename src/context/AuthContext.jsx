import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import privateAxios from "../api/privateAxios";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("accessToken") || null);


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchUser = async () => {
            if (user) {
                setLoading(false);
                return;
            }

            if (!token) {
                setLoading(false);
                return;
            }

            if (!user && token) {
                try {
                    const res = await privateAxios.get("/api/auth/jwt", {
                        signal: controller.signal,
                    });

                    if (isMounted) {
                        login(res.data.data.token, res.data.data);
                    }
                } catch (error) {
                    if (isMounted) {
                        console.error("Token validation failed:", error.response?.data || error.message);
                        logout();
                    }
                } finally {
                    if (isMounted) setLoading(false);
                }
            }
        };

        fetchUser();


        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [token, user]);


    const login = (token, userData) => {
        localStorage.setItem("accessToken", token);
        setToken(token);
        setUser(userData);
    };
    const logout = () => {
        localStorage.removeItem("accessToken");
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        login,
        logout,
        loading,
        isAuthenticated: !!token,
    };

    console.log({ user, token, loading, isAuthenticated: !!token });

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}