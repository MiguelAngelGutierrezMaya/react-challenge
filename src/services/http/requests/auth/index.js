import axios from './../../axios/index'
import { success, error as err } from './../format-response'
import { status_codes } from './../status-codes.js'
import { Routes } from './../../../../routes'

async function verifyError(error) {
    if (!error.response) return err(status_codes().HTTP_500_INTERNAL_SERVER_ERROR, { error_description: "A ocurrido un error inesperado" });
    return err(error.response.status, error.response.data);
}

export const auth = {
    async login(username, password) {
        return await axios.get(Routes.apiUsers, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(resp => {
            const user = resp.data.find(el => el.username === username)
            return success(user || resp.data[0])
        }).catch(error => {
            return verifyError(error);
        });
    }
}