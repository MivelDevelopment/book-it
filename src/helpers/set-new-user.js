import axios from "axios";

export const setNewUser = async (senderInfo) => {
    try {
        const res = await axios('http://localhost:3333/users', {
            method: "POST",
            headers: {
                Accept: 'application/json'
            },
            data: senderInfo
        })
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}