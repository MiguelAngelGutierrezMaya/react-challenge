export const Validator = (obj) => {
    let new_object = obj;

    Object.entries(new_object).forEach(([key, value]) => {
        new_object[key].error = false;
        new_object[key].msj = "";
        for (let i = 0; i < value.type.length; i++) {
            switch (true) {
                case (value.type[i] === 'required'):
                    if (!value.data) {
                        new_object[key].error = true;
                        new_object[key].msj = 'Este campo es obligatorio'
                        i = value.type.length;
                    }
                    break;
                case (value.type[i] === 'email'):
                    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.data))) {
                        new_object[key].error = true;
                        new_object[key].msj = 'El campo no tiene un formato de email válido'
                        i = value.type.length;
                    }
                    break;
                case (value.type[i] === 'number'):
                    if (isNaN(value.data)) {
                        new_object[key].error = true;
                        new_object[key].msj = 'El campo no es un campo numérico'
                        i = value.type.length;
                    }
                    break;
                case (value.type[i].includes('min:')):
                    const min = parseInt((value.type[i].split(":"))[1]);
                    if (value.data.length < min) {
                        new_object[key].error = true;
                        new_object[key].msj = ('El campo no puede ser menor de {min} caracteres').replace("{min}", min);
                        i = value.type.length;
                    }
                    break;
                case (value.type[i].includes('max:')):
                    const max = parseInt((value.type[i].split(":"))[1]);
                    if (value.data.length > max) {
                        new_object[key].error = true;
                        new_object[key].msj = ('El campo no puede ser menor de {max} caracteres').replace("{max}", max);
                        i = value.type.length;
                    }
                    break;
                case (value.type[i].includes('confirmed:')):
                    const field = (value.type[i].split(":"))[1];
                    if (value.data !== new_object[field].data) {
                        new_object[key].error = true;
                        new_object[key].msj = ('El campo {key} no coincide con {field}').replace("{key}", key).replace("{field}", field);
                        i = value.type.length;
                    }
                    break;
                case (value.type[i].includes('length:')):
                    const number = (value.type[i].split(":"))[1];
                    if (value.data.length < parseInt(number)) {
                        new_object[key].error = true;
                        new_object[key].msj = ('Debes seleccionar al menos {number} {label}').replace("{number}", number).replace("{label}", new_object[key].label);
                        i = value.type.length;
                    }
                    break;
                // case (value.type[i] === 'strong_password'):
                //     var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
                //     if (!value.data.match(decimal)) {
                //         new_object[key].error = true;
                //         new_object[key].msj = language['GENERAL.FORM.ERROR.STRONG_PASSWORD'];
                //         i = value.type.length;
                //     };
                //     break;
                default:
                    break;
            }
        }
    });
    return new_object;
}