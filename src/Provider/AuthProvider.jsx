import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const createUser = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
            console.log('Observing current user inside useEffect of AuthProvider', currentUser);
            return () => {
                unSubscribe()
            }
        })
    }, [auth]);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
    };

    // home data
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        fetch("https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/data")
        .then(res => res.json())
        .then(data => setBrandData(data))
    }, [])

    const authInfo = { user, createUser, signInUser, googleSignIn, logOut, loading, brandData }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;