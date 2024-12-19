import { check } from "express-validator";
import resultValidation from "./resultValidation";

const validateCategory = [
    check("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({min: 2, max: 100})
        .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
    check("description")
        .notEmpty()
        .withMessage("La descripción es obligatoria")
        .isLength({min: 2, max: 400})
        .withMessage("La descripción debe tener entre 2 y 400 caracteres"),
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

export default validateCategory;