import React from 'react'
import { Field } from 'formik'
export default function FormSection({ errors, touched }) {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd

    return (
        <div role="group">
            <h4>TŌ INGOA</h4>
            <label id="firstName-label">Ingoa Tuatahi / First Name<span className="required-field">*</span></label>
            <Field name="firstName" aria-labelledby="firstName-label" className="signup-form-text-input" />
            {errors.firstName && touched.firstName ? (
                <div className="signup-form-error">{errors.firstName}</div>
            ) : null}
            <label id="middleName-label">Ingoa Tuarua/ Middle Name</label>
            <Field name="middleName" aria-labelledby="middleName-label" className="signup-form-text-input" />
            {errors.middleName && touched.middleName ? (
                <div className="signup-form-error">{errors.middleName}</div>
            ) : null}
            <label id="lastName-label">Ingoa Whānau / Last Name<span className="required-field">*</span></label>
            <Field name="lastName" aria-labelledby="lastName-label" className="signup-form-text-input" />
            {errors.lastName && touched.lastName ? (
                <div className="signup-form-error">{errors.lastName}</div>
            ) : null}
            <label id="gender-radio-group">Wahine / Tāne / Rānei<span className="required-field">*</span></label>
            <div role="group" aria-labelledby="gender-radio-group" className="signup-form-gender-selector">
                <label><Field type="radio" name="gender" value="Female" />Female</label>
                <label><Field type="radio" name="gender" value="Male" />Male</label>
                <label><Field type="radio" name="gender" value="Other" />Other</label>
                {errors.gender && touched.gender ? (
                    <div className="signup-form-error">{errors.gender}</div>
                ) : null}
            </div>
            <label id="dobName-label">Rā Whānau / Date of Birth<span className="required-field">*</span></label>
            <Field name="dob" type="date" aria-labelledby="dobName-label" min='1930-01-01' max={today} />
            {errors.dob && touched.dob ? <div className="signup-form-error">{errors.dob}</div> : null}
            <hr />
        </div>
    )
}

