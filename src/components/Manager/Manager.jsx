import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

//function FormExample()

//const schema = yup.object({

   // file: yup.string().required(),
    //terms: yup.bool().required(),
//});
export default function Manager(props) {
    return (
        ({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.File
                            className="position-relative"
                            required
                            name="file"
                            label="File"
                            onChange={handleChange}
                            isInvalid={!!errors.file}
                            feedback={errors.file}
                            id="validationFormik107"
                            feedbackTooltip
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            id="validationFormik106"
                            feedbackTooltip
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            )

    );
}


