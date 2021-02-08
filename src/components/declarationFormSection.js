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
        <div role="group" aria-labelledby="declaration-group-label">
            <h4>DECLARATION</h4>
            <p>I acknowledge that the information supplied will be treated as confidential and is held pursuant to the Privacy Act 1993; and by signing this form I agree that Te Tāhuhunui o Ngāti Manu (PSGE) and its related companies, trusts, business partners and agents may use this information for the purposes set out in the Privacy Statement (including, but not limited to, maintaining whakapapa records, the Iwi Register, Voters’ rolls, contact databases), contacting members regarding Iwi events and news, and for inclusion in internal and external publications.</p>
            <p>I hereby declare that to the best of my knowledge;</p>

            <label id="declaration-group-label">
                <Field type="checkbox" name="declaration" value="The information I have given is true and complete to the best of my knowledge" key={0} />
                The information I have given is true and complete to the best of my knowledge<span className="required-field">*</span>
            </label>
            <br />
            <label id="declaration-group-label">
                <Field type="checkbox" name="declaration" value="I have read and understood the declaration indicated above" key={1} />
                I have read and understood the declaration indicated above<span className="required-field">*</span>
            </label>
            <br />
            <label id="declaration-group-label">
                <Field type="checkbox" name="declaration" value="I also undertake to update my relevant information as and when my circumstances change" key={2} />
                I also undertake to update my relevant information as and when my circumstances change<span className="required-field">*</span>
            </label>
            {
                errors.declaration && touched.declaration ? (
                    <div className="signup-form-error">{errors.declaration}</div>
                ) : null
            }
        </div>
    )
}