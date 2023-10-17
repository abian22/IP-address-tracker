import api from "./config"
async function getIp(ip) {
      const result = await api.get(`/${ip}`);
      console.log("Respuesta de la API:", result);
      return result
}
export default getIp