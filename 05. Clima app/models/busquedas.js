const axios = require("axios");

class Busquedas {
    historial = ["Tegucigalpa", "Madrid", "San José"];

    constructor() {
        // TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            access_token: process.env.MAPBOX_KEY,
            limit: 5,
            language: "es"
        }
    }

    async ciudad(lugar = "") {
        try {
            // Petición HTTP
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            return resp.data.features.map(lugarData => ({
                id: lugarData.id,
                nombre: lugarData.place_name,
                lng: lugarData.center[0],
                lat: lugarData.center[1]
            }));
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;