import axios from "axios";

export const statesApi = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
})

export const emailAPI = axios.create({
    baseURL: 'https://agenciabrasildigital.com.br/projetos/apis/connect/public/Api/sendEmail',
    headers: {
        'Content-Type': 'application/json'
    }
})