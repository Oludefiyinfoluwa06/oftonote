import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react"
// import { auth } from "../firebase";
import { router } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = getAuth();

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
        setIsLoggedIn(true);
        router.replace('/home');
    }

    const signup = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsLoggedIn(true);
        router.replace('/home');
    }

    const logout = async () => {
        await signOut(auth);
        setIsLoggedIn(false);
        router.replace('/');
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) return;

            setCurrentUser(user);
            router.replace('/home');
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        login,
        signup,
        logout,
        isLoggedIn,
        setIsLoggedIn,
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);