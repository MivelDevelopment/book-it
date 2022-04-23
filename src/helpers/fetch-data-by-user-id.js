import fetchUser from '../axios/custom';

export const fetchDataByUserId = async(userId) => {
    try {
        const {data} = await fetchUser(userId.toString());
        console.log(data)    ;
    } catch (error) {
        console.log(error.response);
    }
    
}