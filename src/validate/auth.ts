import Joi from "joi";
export const ProductJoiObj = Joi.object({
  email: Joi.string().required().empty().messages({
    "any.required": "Tên không để trống",
    "string.empty": "Tên không để trống",
  }),
  password: Joi.string().required().empty().messages({
    "any.required": "Ảnh không để trống",
    "string.empty": "Ảnh không để trống",
  }),
  confirmPassword: Joi.number().required().min(1000).messages({
    "any.required": "Tên không để trống",
    "number.min": "Giá không nhỏ hơn 1000",
  }),
});
