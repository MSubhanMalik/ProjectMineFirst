const { z } = require('zod');

const zodRegisterSchema = z.object({
    name: z.string({required_error: "Name is required"})
        .min(5, { message: "Name should be at least 5 characters" })
        .max(255, { message: "Name should not exceed 255 characters" })
,

    email: z.string({required_error: "Email is required"})
        .email({ message: "Invalid email format" })
        .min(10, { message: "Email should be at least 10 characters" })
        .max(50, { message: "Email should not exceed 50 characters" }),

    phoneNumber: z.string({required_error: "Phone Number is required"})
        .min(10, { message: "Phone number should be at least 10 characters" })
        .max(20, { message: "Phone number should not exceed 20 characters" }),

    password: z.string({required_error: "Password is required"})
        .min(8, { message: "Password should be at least 8 characters" })
        .max(30, { message: "Password should not exceed 30 characters" })
});

const zodLoginSchema = z.object({
    email: z.string({required_error: "Email is required"})
        .email({ message: "Invalid email format" })
        .min(10, { message: "Email should be at least 10 characters" })
        .max(50, { message: "Email should not exceed 50 characters" }),

    password: z.string({required_error: "Password is required"})
        .min(8, { message: "Password should be at least 8 characters" })
        .max(30, { message: "Password should not exceed 30 characters" })
});

const zodContactSchema = z.object({
    name: z.string()
        .min(5, { message: "Name should be at least 5 characters" })
        .max(255, { message: "Name should not exceed 255 characters" })
        .nonempty({ message: "Name is required" }),

    email: z.string()
        .email({ message: "Invalid email format" })
        .min(10, { message: "Email should be at least 10 characters" })
        .max(50, { message: "Email should not exceed 50 characters" }),

    message: z.string()
        .min(30, { message: "Password should be at least 30 characters" })
        .max(500, { message: "Password should not exceed 500 characters" })
});

module.exports = {zodRegisterSchema, zodLoginSchema, zodContactSchema};
