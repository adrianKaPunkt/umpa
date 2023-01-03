import axios from "axios";

const getDays = async () => {
    const url = "http://localhost:3000/days";
    const response = await axios.get(url);
    return response.data;
};

export default getDays;
