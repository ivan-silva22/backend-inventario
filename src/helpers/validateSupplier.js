import { check } from "express-validator";
import resultValidation from "./resultValidation";

const validateSupplier = [
    check("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({min: 2, max: 200})
        .withMessage("El nombre debe tener entre 2 y 200 caracteres"),
    check("contact")
        .notEmpty()
        .withMessage("El contacto es obligatorio")
        .isLength({min: 2, max: 300})
        .withMessage("El contacto debe tener entre 2 y 300 caracteres"),
    check("address")
        .notEmpty()
        .withMessage("La dirección es obligatoria")
        .isLength({min: 2, max: 300})
        .withMessage("La dirección debe tener entre 2 y 300 caracteres"),
    check("created_at")
        .notEmpty()
        .withMessage("La fecha de creación es obligatoria")
        .isDate()
        .withMessage("La fecha de creación debe ser una fecha válida"),
    check("updated_at")
        .notEmpty()
        .withMessage("La fecha de actualización es obligatoria")
        .isDate()
        .withMessage("La fecha de actualización debe ser una fecha válida"),
    (req, res, next) =>{
        resultValidation(req, res, next);
    }
]

export default validateSupplier;