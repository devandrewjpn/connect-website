import axios from "axios";

export const statesApi = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
})