import api from "./config"

async function getMyIp() {
      const result = await api.get(`/json`);
      console.log("Respuesta de la API:", result);
      return result
}

async function getOneIp(ip) {
      const result = await api.get(`/${ip}/json`);
      console.log("Respuesta de la API:", result);
      return result
}
export {
      getMyIp, 
      getOneIp
} 