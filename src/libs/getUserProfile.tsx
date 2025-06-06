export default async function getUserProfile(token:string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if(!response.ok){
        throw new Error("Cannot get user profile")
    }
    return await response.json()
}