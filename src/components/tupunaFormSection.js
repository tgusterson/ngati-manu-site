import React from 'react'
import { Field } from 'formik'
export default function FormSection({ errors, touched }) {
    return (
        <div role="group" aria-labelledby="tupuna-group-label" className="tupuna-group">
            <h4>NGĀTI MANU TŪPUNA</h4>
            <p>Ngāti Manu tūpuna: Please indicate who, of our Ngāti Manu tūpuna, you whakapapa to (you may select more than one if you need to):</p>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Wiremu Pōmare" />
                Wiremu Pōmare
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Hare Pōmare" />
                Hare Pōmare
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Ihipera Tiaho" />
                Ihipera Tiaho
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Iritana" />
                Iritana
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Ngahani" />
                Ngahani
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Keita Waipa" />
                Keita Waipa
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Pōmare I" />
                Pōmare I
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Tukikai" />
                Tukikai
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Maihi Te Pūaha" />
                Maihi Te Pūaha
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Wi Hoete" />
                Wi Hoete
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Pō" />
                Pō
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Te Hikuwai Harawene" />
                Te Hikuwai Harawene
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Te Whareumu" />
                Te Whareumu
             </label>
            <label id="tupuna-group-label">
                <Field type="checkbox" name="tupuna" value="Unsure" />
                Unsure - <i>tick this box if your unsure and enter your whanau name that whakapapa to Ngāti Manu in the text box below</i>
                <br />
                <br />
                <Field name="tupunaUnsureText" placeholder="Enter whanau name here" className="signup-form-text-input" />
            </label>
            {
                errors.tupuna && touched.tupuna ? (
                    <div className="signup-form-error">{errors.tupuna}</div>
                ) : null
            }

            <hr />
        </div>
    )
}