import React from 'react'
import { Field } from 'formik'
export default function FormSection({ values, errors, touched }) {
    return (
        <div role="group" aria-labelledby="tamarikiCheck-label">
            <h4>Ō TAMARIKI</h4>
            <p>Please request those tamariki 18 years and over to complete their own registration form</p>
            <label id="tamarikiCheck-label">Do you have any tamariki?<span className="required-field">*</span></label>
            <br />
            <div className="radio-group">
                <Field name="tamarikiCheck" type="radio" name="tamarikiCheck" value="Yes" />
                <label>Yes </label>

                <Field name="tamarikiCheck" type="radio" name="tamarikiCheck" value="No" />
                <label>No</label>

                {errors.tamarikiCheck && touched.tamarikiCheck ? (
                    <div className="signup-form-error">{errors.tamarikiCheck}</div>
                ) : null}
            </div>
            <div>
                <label id="tamarikiNumber-label">If YES, Tokohia ngā tamariki/ how many children?</label>
                <Field name="tamarikiNumber" type="number" aria-labelledby="tamarikiNumber-label" />
                {errors.tamarikiNumber && touched.tamarikiNumber ? (
                    <div className="signup-form-error">{errors.tamarikiNumber}</div>
                ) : null}
            </div>

            <hr />
        </div>
    )
}

