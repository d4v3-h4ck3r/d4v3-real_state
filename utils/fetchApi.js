import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0cafd8e1cdmsh2e7cfe2af11b3a6p192f4ejsn26e3a2f08bac',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}