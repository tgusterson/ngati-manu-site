import React from 'react'
import { Field } from 'formik'
export default function FormSection({ values, errors, touched }) {
    return (
        <div role="group" aria-labelledby="whanauCheck-label">
            <h4>TŌ WHĀNAU</h4>
            <p>Please encourage your siblings to register their whānau</p>
            <label id="whanauCheck-label">Do you have any tuakana/teina/ siblings?<span className="required-field">*</span></label>
            <br />
            <div className="radio-group">
                <Field name="whanauCheck" type="radio" name="whanauCheck" value="Yes" />
                <label>Yes</label>

                <Field name="whanauCheck" type="radio" name="whanauCheck" value="No" />
                <label>No</label>

                {errors.whanauCheck && touched.whanauCheck ? (
                    <div className="signup-form-error">{errors.whanauCheck}</div>
                ) : null}
            </div>

            <div>
                <label id="whanauNumber-label">IF YES, how many tuakana/teina/siblings?</label>
                <Field name="whanauNumber" type="number" aria-labelledby="whanauNumber-label" />
                {errors.whanauNumber && touched.whanauNumber ? (
                    <div className="signup-form-error">{errors.whanauNumber}</div>
                ) : null}
            </div>

            <hr />
        </div>
    )
}

