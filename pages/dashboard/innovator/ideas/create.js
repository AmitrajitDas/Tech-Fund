import IdeaForm from "components/CreateIdea/IdeaForm"
import IdeaHeader from "components/CreateIdea/IdeaHeader"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useMoralis } from "react-moralis"

const CreateIdea = () => {
    const router = useRouter()
    // const { isAuthenticated, user } = useMoralis()

    useEffect(() => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user")).isAuthenticated
        console.log(isAuthenticated);
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [])

    return (
        <div>
            <IdeaHeader />
            <IdeaForm />
        </div>
    )
}

export default CreateIdea