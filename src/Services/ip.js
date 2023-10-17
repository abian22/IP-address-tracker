import api from "./config"
async function getIp(ip) {
      const result = await api.get(`/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
      console.log("Respuesta de la API:", result);
      return result
}
export default getIp