import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getBrandBySlug = async (slug) => {
  const response = await api.get(
    `/brands?filters[slug][$eq]=${slug}&populate[pageSections][populate]=*`
  );

  return response.data;
};

export const getProductsByBrand = async (brandSlug) => {
  const response = await api.get(
    `/products?filters[brand][slug][$eq]=${brandSlug}&filters[isActive][$eq]=true&populate=*`
  );

  return response.data;
};

export const getProductBySlug = async (slug) => {
  const response = await api.get(
    `/products?filters[slug][$eq]=${slug}&populate[image]=true&populate[Gallery]=true&populate[banner]=true&populate[brand]=true&populate[features]=true&populate[specifications]=true&populate[datasheets][populate][file]=true&populate[brochure]=true&populate[accessories][populate][image]=true&populate[similarProducts][populate][image]=true&populate[ogImage]=true`
  );

  return response.data;
};

export const getHeader = async () => {
  const response = await api.get("/header?populate=*");

  return response.data;
};

export const getBrands = async () => {
  const response = await api.get("/brands?populate=logo");

  return response.data;
};

export const getProductCategories = async () => {
  const response = await api.get("/product-categories?populate=*");
  return response.data;
};

export const getSolutions = async () => {
  const response = await api.get(
    "/solutions?filters[isActive][$eq]=true&populate=*"
  );
  return response.data;
};

export const getLatestProducts = async () => {
  const response = await api.get(
    "/products?filters[isLatest][$eq]=true&filters[isActive][$eq]=true&populate=*"
  );
  return response.data;
};

export const getAllProducts = async () => {
  const response = await api.get(
    "/products?filters[isActive][$eq]=true&populate=*"
  );
  return response.data;
};


export default api;