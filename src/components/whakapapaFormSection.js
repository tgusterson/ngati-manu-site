import React from 'react'
import { Field } from 'formik'
export default function FormSection({ errors, touched }) {
    const whakapapaOptions = [
        "Wiremu Pōmare",
        "Hare Pōmare",
        "Ihipera Tiaho",
        "Iritana",
        "Ngahani",
        "Keita Waipa",
        "Pōmare I",
        "Tukikai",
        "Maihi Te Pūaha",
        "Wi Hoete",
        "Pō",
        "Te Hikuwai Harawene",
        "Te Whareumu",
    ]
    return (
        <div role="group" aria-labelledby="whakapapa-group-label" className="radio-group">
            <h4>WHAKAPAPA</h4>
            <p>Please use this section to show your whakapapa connection to any Ngāti Manu tupuna you have  indicated in Section 5 (previous section).  We ask that you complete the boxes in this section that are relevant to your Ngāti Manu whakapapa.</p>
            <p>Note: If your mother or father is not connected to Ngāti Manu you are not required to complete those boxes.</p>
            <label id="whangai-label">Please indicate if you are whāngai raised within the context of a Ngāti Manu whānau:<span className="required-field">*</span></label>
            <br />

            <Field name="whangai" type="radio" value="Yes" />
            <label>Yes</label>

            <Field name="whangai" type="radio" value="No" />
            <label>No</label>

            {errors.whangai && touched.whangai ? (
                <div className="signup-form-error">{errors.whangai}</div>
            ) : null}
            <br />
            <label id="motherWhakapapa-label">Mother's Whakapapa</label>
            <br />
            <Field name="motherWhakapapa" as="select" aria-labelledby="motherWhakapapa-label" className="signup-form-select-input">
                {whakapapaOptions.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))}
            </Field>
            {errors.motherWhakapapa && touched.motherWhakapapa ? (
                <div className="signup-form-error">{errors.motherWhakapapa}</div>
            ) : null}

            <br />
            <label id="motherName-label">Mother's Name</label>
            <Field name="motherName" aria-labelledby="motherName-label" className="signup-form-text-input" />
            {errors.motherName && touched.motherName ? (
                <div className="signup-form-error">{errors.motherName}</div>
            ) : null}

            <label id="maternalGrandmotherName-label">Maternal Grandmother's Name</label>
            <Field name="maternalGrandmotherName" aria-labelledby="maternalGrandmotherName-label" className="signup-form-text-input" />
            {errors.maternalGrandmotherName && touched.maternalGrandmotherName ? (
                <div className="signup-form-error">{errors.maternalGrandmotherName}</div>
            ) : null}

            <label id="maternalGrandfatherName-label">Maternal Grandfather's Name</label>
            <Field name="maternalGrandfatherName" aria-labelledby="maternalGrandfatherName-label" className="signup-form-text-input" />
            {errors.maternalGrandfatherName && touched.maternalGrandfatherName ? (
                <div className="signup-form-error">{errors.maternalGrandfatherName}</div>
            ) : null}

            <br />
            <label id="fatherWhakapapa-label">Father's Whakapapa</label>
            <br />
            <Field name="fatherWhakapapa" as="select" aria-labelledby="fatherWhakapapa-label" className="signup-form-select-input">
                {whakapapaOptions.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))}
            </Field>
            {errors.fatherWhakapapa && touched.fatherWhakapapa ? (
                <div className="signup-form-error">{errors.fatherWhakapapa}</div>
            ) : null}
            <br />
            <label id="fatherName-label">Father's Name</label>
            <Field name="fatherName" aria-labelledby="fatherName-label" className="signup-form-text-input" />
            {errors.fatherName && touched.fatherName ? (
                <div className="signup-form-error">{errors.fatherName}</div>
            ) : null}

            <label id="paternalGrandmotherName-label">Paternal Grandmother's Name</label>
            <Field name="paternalGrandmotherName" aria-labelledby="paternalGrandmotherName-label" className="signup-form-text-input" />
            {errors.paternalGrandmotherName && touched.paternalGrandmotherName ? (
                <div className="signup-form-error">{errors.paternalGrandmotherName}</div>
            ) : null}

            <label id="paternalGrandfatherName-label">Paternal Grandfather's Name</label>
            <Field name="paternalGrandfatherName" aria-labelledby="paternalGrandfatherName-label" className="signup-form-text-input" />
            {errors.paternalGrandfatherName && touched.paternalGrandfatherName ? (
                <div className="signup-form-error">{errors.paternalGrandfatherName}</div>
            ) : null}

            <hr />
        </div>
    )
}