import React from 'react'
import { Formik, Form, Field } from 'formik'
export default function FormSection({ errors, touched }) {
    return (
        <div role="group">
            <label id="firstName-label">Ingoa Tuatahi / First Name</label>
            <Field name="firstName" aria-labelledby="firstName-label" className="signup-form-text-input" />
            {errors.firstName && touched.firstName ? (
                <div className="signup-form-error">{errors.firstName}</div>
            ) : null}
            <label id="middleName-label">Ingoa Tuarua/ Middle Name</label>
            <Field name="middleName" aria-labelledby="middleName-label" className="signup-form-text-input" />
            {errors.middleName && touched.middleName ? (
                <div className="signup-form-error">{errors.middleName}</div>
            ) : null}
            <label id="lastName-label">Ingoa Whānau / Last Name</label>
            <Field name="lastName" aria-labelledby="lastName-label" className="signup-form-text-input" />
            {errors.lastName && touched.lastName ? (
                <div className="signup-form-error">{errors.lastName}</div>
            ) : null}
            <label id="gender-radio-group">Tāne / Wahine Rānei / Gender</label>
            <div role="group" aria-labelledby="gender-radio-group" className="signup-form-gender-selector">
                <label><Field type="radio" name="gender" value="Female" />Female</label>
                <label><Field type="radio" name="gender" value="Male" />Male</label>
                <label><Field type="radio" name="gender" value="Other" />Other</label>
                {errors.gender && touched.gender ? (
                    <div className="signup-form-error">{errors.gender}</div>
                ) : null}
            </div>
            <label id="dobName-label">Ingoa Whānau / Last Name</label>
            <Field name="dob" type="date" aria-labelledby="dobName-label" />
            {errors.dob && touched.dob ? <div className="signup-form-error">{errors.dob}</div> : null}
        </div>
    )
}

