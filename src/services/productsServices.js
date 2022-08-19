import axios from "axios";

const EndPoint = "https://api.mercadolibre.com";
const Limit = 4;

export const getSearchProduct = async (term) => {
    const url = `${EndPoint}/sites/MLA/search?q=${encodeURI(term)}&limit=${Limit}`;
    var resp =  await axios.get(url);
    return resp.data;
};

export const getProductByID = async (id) => {
    const url = `${EndPoint}/items/${id}`;
    const resp = await axios.get(url);
    return resp.data;
};

export const getProductDescriptionByID = async (id) => {
    const url = `${EndPoint}/items/${id}/description`;
    const resp = await axios.get(url);
    return resp.data;
};

export const getCategoryByID = async (id) => {
    const url = `${EndPoint}/categories/${id}`;
    const resp = await axios.get(url);
    return resp.data;
};
