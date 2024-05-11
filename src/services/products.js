import axios from "./api";

const ProductsService = {
  getProductsStatistic: async () => {
    const data = await axios.get("/product/admin/statistics?lang=eng");
    return { data };
  },
  getProductsDiagram: async () => {
    const data = await axios.get("/product/diagramForAdmin?lang=eng");
    return { data };
  },
  getProducts: async () => {
    const data = await axios.get("/project/list?lang=eng");
    return { data };
  },
};

export default ProductsService;
