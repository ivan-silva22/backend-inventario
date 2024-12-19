import { check } from "express-validator";
import resultValidation from "./resultValidation";

const validateUser = [
    check("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({max: 100, min: 2})
        .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
    check("password")
        .notEmpty()
        .withMessage("La contraseña es obligatorio")
        .isLength({min: 8})
        .withMessage("La contraseña debe tener al menos 8 caracteres")
        .matches(
            /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
        )
        .withMessage("La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial"),
    check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("El email no es válido"),
    check("role")
        .notEmpty()
        .withMessage("El rol es obligatorio")
        .isIn(["admin", "employee"])
        .withMessage("El rol debe ser admin o empleado"),
    check("created_at")
        .notEmpty()
        .withMessage("La fecha de creación es obligatoria")
        .isDate()
        .withMessage("La fecha de creación no es válida"),
    check("updated_at")
        .notEmpty()
        .withMessage("La fecha de actualización es obligatoria")
        .isDate()
        .withMessage("La fecha de actualización no es válida"),
    (req, res, next) =>{
        resultValidation(req, res, next);
    }
];

export default validateUser;