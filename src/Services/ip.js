import api from "./config"
async function getIp(ipAddress, setIpData) {
    try {
      const result = await api.get("/", {
        params: {
          ipAddress,
        },
      });
      setIpData(result.data); 
    } catch (error) {
      console.error("Error al obtener la información de la dirección IP:", error);
    }
  }
export default getIp