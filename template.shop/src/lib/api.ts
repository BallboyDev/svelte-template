import { goto } from "$app/navigation";
import axios from "axios";

// 1. Create a single, configured axios instance
const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true, // Crucial for sending HttpOnly cookies
});

// 2. New login function
// It doesn't handle tokens. It just expects a successful response.
// The backend is responsible for setting the cookie.
const login = async (param: any) => {
    try {
        // The response body can contain user data, but not the token
        await apiClient.post("/login", param);

        // On success, redirect to a protected route.
        // The +layout.server.ts will then take over.
        goto("/list");

    } catch (error) {
        console.error("Login failed:", error);
        // Optionally, show a user-friendly error message
        if (axios.isAxiosError(error) && error.response) {
            alert(`Login failed: ${error.response.data.message || "Invalid credentials"}`);
        } else {
            alert("An unexpected error occurred during login.");
        }
    }
};

// 3. New logout function
// It calls the backend to invalidate the session/cookie.
const logout = async () => {
    try {
        await apiClient.post("/api/auth/logout");
    } catch (error) {
        console.error("Logout failed:", error);
    } finally {
        // Always redirect to login, even if the backend call fails
        goto("/login");
    }
};

// 4. Simplified GET and POST methods
// No more manual token handling. The browser and axios do the work.
const get = async (path: string) => {
    return await apiClient.get(path);
};

const post = async (path: string, param: object) => {
    return await apiClient.post(path, param);
};

export const callApi = {
    login,
    logout,
    get,
    post,
};
