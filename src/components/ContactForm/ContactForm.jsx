import { useState } from "react";
import clsx from 'clsx';

export default function ContactForm({ data }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleBlur = (e) => {
        const { name, value, validity } = e.target;

        setErrors(prev => ({
            ...prev,
            [name]: value.trim() === ""
                ? `${name.toUpperCase()}_REQUIRED`
                : name === "email" && validity.typeMismatch
                    ? `EMAIL_INVALID`
                    : ""
        }));
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        const emailInput = form.elements.namedItem("email");

        let hasError = false;

        const nextErrors = {
            name: "",
            email: "",
            message: ""
        };

        data.forEach((item) => {
            const value = formData[item.key];

            if (value.trim() === "") {
                nextErrors[item.key] = `${item.key.toUpperCase()}_REQUIRED`;
                hasError = true;
                return;
            }

            if (item.key === "email" && emailInput?.validity.typeMismatch) {
                nextErrors.email = "EMAIL_INVALID";
                hasError = true;
            }
        });

        setErrors(nextErrors);

        if (hasError) {
            e.preventDefault();
        }
    };

    return (
        <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            noValidate>
            <input type="hidden" name="access_key" value="2171b9ff-6615-4015-9703-25a4cd1f7cd1" />

            <div className="formField">
                {data.map((item) => {
                    return (
                        <div key={item.key}>
                            <label
                                className="formField__label glitch-text-01"
                                htmlFor={item.key}
                            >
                                {item.key}
                            </label>

                            {item.key === "message" ? (
                                <textarea
                                    id={item.key}
                                    className={clsx(
                                        'formField__textarea',
                                        { ['is-error']: errors[item.key] }
                                    )}
                                    name={item.key}
                                    value={formData[item.key]}
                                    placeholder={item.placeholder}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            ) : (
                                <input
                                    id={item.key}
                                    className={clsx(
                                        'formField__input',
                                        { ['is-error']: errors[item.key] }
                                    )}
                                    type={item.type}
                                    name={item.key}
                                    value={formData[item.key]}
                                    placeholder={item.placeholder}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            )}

                            {errors[item.key] && (
                                <p className="formField__status-error">
                                    [!] INPUT_ERROR // {errors[item.key]}{item.key === 'email' && '_ADDRESS'}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
            <button type="submit">send message</button>
        </form>
    )
}
