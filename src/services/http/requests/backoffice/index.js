import axios from './../../axios/index'
import { success, error as err } from './../format-response.js'
import { status_codes } from './../status-codes.js'
import { Routes } from './../../../../routes'

async function verifyError(error) {
    if (!error.response) return err(status_codes().HTTP_500_INTERNAL_SERVER_ERROR, { error_description: "A ocurrido un error inesperado" });
    return err(error.response.status, error.response.data);
}

export const backoffice = {
    async getPost() {
        return await axios.get(Routes.apiPosts, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(resp => {
            return success(resp)
        }).catch(error => {
            return verifyError(error);
        });
    },
    async getUsers() {
        return await axios.get(Routes.apiUsers, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(resp => {
            return success(resp)
        }).catch(error => {
            return verifyError(error);
        });
    },
    async getComments() {
        return await axios.get(Routes.apiComments, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(resp => {
            return success(resp)
        }).catch(error => {
            return verifyError(error);
        });
    }
}