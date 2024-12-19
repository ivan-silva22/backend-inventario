import { check } from "express-validator";
import resultValidation from "./resultValidation";

const validateInvantoryMovement = [
    check("product_id")
        .isMongoId()
        .withMessage("El id del producto no es válido"),
    check("type")
        .isIn(["entrada", "salida"])
        .withMessage("El tipo de movimiento debe ser entrada o salida"),
    check("quantity")
        .notEmpty()
        .withMessage("La cantidad es obligatoria")
        .isNumeric()
        .withMessage("La cantidad debe ser un número")
        .isInt({ min: 0 })
        .withMessage("La cantidad debe ser un número entero positivo"),
    check("user_id")
        .isMongoId()
        .withMessage("El id del usuario no es válido"),
    check("date")
        .notEmpty()
        .withMessage("La fecha es obligatoria")
        .isDate()
        .withMessage("La fecha no es válida"),
    check("notes")
        .isLength({min: 2, max: 100})
        .withMessage("Las notas deben tener entre 2 y 100 caracteres"),
    (req, res, next) =>{
        resultValidation(req, res, next);
    }       
]

export default validateInvantoryMovement;