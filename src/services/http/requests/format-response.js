import { status_codes } from "./status-codes.js";
import { FakeAuth } from './../../../utils/fakeAuth';

const response = (error, status, msj, data) => {
    return { error, status, msj, data };
}

const _verify_errors = async (obj, errors) => {
    let messages;
    if (typeof obj !== 'string') {
        if (Array.isArray(obj))
            for (let i = 0; i < obj.length; i++)
                errors.push(`${obj[i].message}`);
        else if (typeof obj === 'object')
            Object.entries(obj).forEach(([key, value]) => errors.push(`${key}: ${value}`));
    } else {
        errors.push(obj);
    }

    for (let i = 0; i < errors.length; i++) messages += `${errors[i]} `;

    return messages.replace('undefined', '').split('None:').join('');
}

export const success = async (obj) => {
    return response(false, status_codes().HTTP_200_OK, "", obj);
}

export const error = async (code, obj) => {
    let msj;
    switch (true) {
        case (code >= status_codes().HTTP_400_BAD_REQUEST && code < status_codes().HTTP_500_INTERNAL_SERVER_ERROR):
            if (code === status_codes().HTTP_401_UNAUTHORIZED || code === status_codes().HTTP_403_FORBIDDEN) {
                FakeAuth.logout();
                window.location.href = `/`;
            }
            msj = await _verify_errors(obj.errors ? obj.errors : obj, []);
            break;
        default:
            msj = await _verify_errors(obj.errors ? obj.errors : obj.msg ? obj.msg : "Error 500", []);
            break;
    }
    return response(true, code, msj, obj);
}