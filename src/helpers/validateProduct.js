import { check } from "express-validator";
import resultValidation from "./resultValidation";

const validateProduct = [
  check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ max: 100, min: 2 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
  check("description")
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isLength({max: 500, min: 2})
    .withMessage("La descripción debe tener entre 2 y 500 caracteres"),
  check("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número"),
  check("stock")
    .notEmpty()
    .withMessage("El stock es obligatorio")
    .isNumeric()
    .withMessage("El stock deve ser un número"),
  check("category_id")
    .notEmpty()
    .withMessage("La categoria es obligatoria")
    .isMongoId()
    .withMessage("La categoria es invalida"),
  check("create_at")
    .notEmpty()
    .withMessage("La fecha de creación es obligatoria")
    .isDate()
    .withMessage("La fecha de creación es invalida"),
  check("updated_at")
    .notEmpty()
    .withMessage("La fecha de actualización es obligatoria")
    .isDate()
    .withMessage("La fecha de actualización es invalida"),
    (req, res, next) =>{
        resultValidation(req, res, next);
    }
];

export default validateProduct;