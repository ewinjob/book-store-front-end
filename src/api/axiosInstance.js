import axiosInstance from "./axiosInstance";

const axiosService = async (httpMethod, url, reqBody,reqHeader) => {
    try {
        const response = await axiosInstance({
            method: httpMethod,
            url: url,
            data: reqBody,
            header: reqHeader
        });

        return response;

    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default axiosService;