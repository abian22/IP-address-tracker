import api from "./config"
async function getIp(ipInfo) {

      // Construye la URL de la API de geolocalización correctamente
      const result = await api.get();
      console.log("Respuesta de la API:", result.data);
}
export default getIp