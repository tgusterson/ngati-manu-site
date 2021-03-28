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
            <label id="orgName-label">Name of Organisation<span className="required-field">*</span></label>
            <Field name="orgName" aria-labelledby="orgName-label" className="signup-form-text-input" />
            {errors.orgName && touched.orgName ? (
                <div className="signup-form-error">{errors.orgName}</div>
            ) : null}

            <label id="contactName-label">Contact Name<span className="required-field">*</span></label>
            <Field name="contactName" aria-labelledby="contactName-label" className="signup-form-text-input" />
            {errors.contactName && touched.contactName ? (
                <div className="signup-form-error">{errors.contactName}</div>
            ) : null}

            <label id="email-label">Email Address<span className="required-field">*</span></label>
            <Field name="email" type="email" aria-labelledby="email-label" className="signup-form-text-input" />
            {errors.email && touched.email ? (
                <div className="signup-form-error">{errors.email}</div>
            ) : null}

            <label id="phoneNumber">Phone Number<span className="required-field">*</span></label>
            <Field name="phoneNumber" type="tel" aria-labelledby="phoneNumber-label" className="signup-form-text-input" />
            {errors.phoneNumber && touched.phoneNumber ? (
                <div className="signup-form-error">{errors.phoneNumber}</div>
            ) : null}

            <label id="kaupapa-label">Kaupapa - Reason for Marae Hire<span className="required-field">*</span></label>
            <Field name="kaupapa" aria-labelledby="kaupapa-label" className="signup-form-text-input" />
            {errors.kaupapa && touched.kaupapa ? (
                <div className="signup-form-error">{errors.kaupapa}</div>
            ) : null}

            <label id="numberOfPeople-label">Total Number Of People<span className="required-field">*</span></label>
            <Field name="numberOfPeople" type="number" aria-labelledby="numberOfPeople-label" className="signup-form-text-input" />
            {errors.numberOfPeople && touched.numberOfPeople ? (
                <div className="signup-form-error">{errors.numberOfPeople}</div>
            ) : null}

            <label id="hireStartDate-label">Hire Date: Start Date<span className="required-field">*</span></label>
            <Field name="hireStartDate" type="date" aria-labelledby="hireStartDate-label" min={today} />
            {errors.hireStartDate && touched.hireStartDate ? <div className="signup-form-error">{errors.hireStartDate}</div> : null}

            <label id="hireEndDate-label">Hire Date: End Date<span className="required-field">*</span></label>
            <Field name="hireEndDate" type="date" aria-labelledby="hireEndDate-label" min={today} />
            {errors.hireEndDate && touched.hireEndDate ? <div className="signup-form-error">{errors.hireEndDate}</div> : null}

            <label id="arrivalTime-label">Estimated Arrival Time AM/PM<span className="required-field">*</span></label>
            <Field name="arrivalTime" type="time" aria-labelledby="arrivalTime-label" min={today} />
            {errors.arrivalTime && touched.arrivalTime ? <div className="signup-form-error">{errors.arrivalTime}</div> : null}

            <label id="departureTime-label">Estimated Departure Time AM/PM<span className="required-field">*</span></label>
            <Field name="departureTime" type="time" aria-labelledby="departureTime-label" min={today} />
            {errors.departureTime && touched.departureTime ? <div className="signup-form-error">{errors.departureTime}</div> : null}

            <hr />
        </div>
    )
}

