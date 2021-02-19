import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Recaptcha from "react-recaptcha"
import moment from "moment"
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { createUser } from '../utils/apiRequests'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import NameSection from "../components/nameFormSection"
import AddressSection from "../components/addressFormSection"
import TamarikiSection from "../components/tamarikiFormSection"
import WhanauSection from "../components/whanauFormSection"
import TupunaSection from "../components/tupunaFormSection"
import WhakapapaSection from "../components/whakapapaFormSection"
import DeclarationSection from "../components/declarationFormSection"
import Registration from '../../content/assets/index/carousel/registration.png'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignupSchema = Yup.object().shape({
  recaptcha: Yup.string().required(),
  firstName: Yup.string()
    .min(1, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  middleName: Yup.string()
    .max(100, 'Too Long!'),
  lastName: Yup.string()
    .min(1, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  dob: Yup.string()
    .nullable()
    .required('Required')
    .test('Date of Birth', 'You must be 18 or over to register', function (value) {
      return moment().diff(moment(value), 'years') >= 18;
    }),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  stAddress: Yup.string()
    .required('Required')
    .min(1, 'Too Short!'),
  town: Yup.string()
    .required('Required')
    .min(1, 'Too Short!'),
  suburb: Yup.string()
    .required('Required')
    .min(1, 'Too Short!'),
  country: Yup.string()
    .required('Required')
    .min(1, 'Too Short!'),
  phoneNumber: Yup.string()
    .required('Required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  mobileNumber: Yup.string()
    .matches(phoneRegExp, 'Mobile number is not valid'),
  tamarikiCheck: Yup.string()
    .required('Required')
    .min(1),
  tamarikiNumber: Yup.number().when('tamarikiCheck', {
    is: tamarikiCheck => tamarikiCheck === "Yes",
    then: Yup.number().integer().min(1, 'Must be greater than or equal to 1').max(50, 'Must be less than or equal to 50').required('Required'),
    otherwise: Yup.number().max(0, 'If no, must be blank or 0').min(0, 'If no, must be blank or 0')
  }),
  whanauCheck: Yup.string()
    .required('Required')
    .min(1),
  whanauNumber: Yup.number().when('whanauCheck', {
    is: whanauCheck => whanauCheck === "Yes",
    then: Yup.number().integer().min(1, 'Must be greater than or equal to 1').max(50, 'Must be less than or equal to 50').required('Required'),
    otherwise: Yup.number().max(0, 'If no, must be blank or 0').min(0, 'If no, must be blank or 0')
  }),
  whangai: Yup.string()
    .required('Required'),
  motherName: Yup.string()
    .max(100, 'Too Long!'),
  fatherName: Yup.string()
    .max(100, 'Too Long!'),
  maternalGrandmotherName: Yup.string()
    .max(100, 'Too Long!'),
  paternalGrandmotherName: Yup.string()
    .max(100, 'Too Long!'),
  maternalGrandfatherName: Yup.string()
    .max(100, 'Too Long!'),
  paternalGrandfatherName: Yup.string()
    .max(100, 'Too Long!'),
  declaration: Yup.array(Yup.string())
    .length(3, "Must agree to all of the above statements before submitting"),
  tupunaUnsureText: Yup.string()
    .min(1, 'Too Short!')
    .max(100, 'Too Long!'),
});

const RegistrationForm = ({ data, location }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [])
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Registration Form" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={"Ngāti Manu Registration Form"} image={Registration} imageAlt={"Ngāti Manu Registration Form"} />
            <div className="cta-home">
              <div style={{ fontFamily: 'caveat', fontSize: '2rem' }} />
            </div>
          </Container>
          <Container>
            <div>
              <Formik
                initialValues={{
                  firstName: '',
                  middleName: '',
                  lastName: '',
                  email: '',
                  gender: '',
                  dob: '',
                  stAddress: '',
                  suburb: '',
                  town: '',
                  country: 'Aotearoa / New Zealand',
                  phoneNumber: '',
                  mobileNumber: '',
                  tamarikiCheck: '',
                  tamarikiNumber: '',
                  whanauCheck: '',
                  whanauNumber: '',
                  tupuna: [],
                  tupunaUnsureText: '',
                  whangai: '',
                  motherWhakapapa: '',
                  fatherWhakapapa: '',
                  motherName: '',
                  fatherName: '',
                  maternalGrandmotherName: '',
                  paternalGrandmotherName: '',
                  maternalGrandfatherName: '',
                  paternalGrandfatherName: '',
                  declaration: [],
                  submissionDate: new Date(),
                  recaptcha: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    // alert(
                    //   JSON.stringify(
                    //     {
                    //       recaptcha: values.recaptcha,
                    //     },
                    //     null,
                    //     2
                    //   )
                    // )
                    const response = await createUser(values)
                    if (response === 200) {
                      alert(`Thank you for submitting the registration form. You will receive an Offical Registration Notification of successful application once it has been reviewed and accepted.`)
                      resetForm({ values: '' })
                    } else {
                      alert('Something went wrong, please try submitting the form again.')
                    }
                  } catch (error) {
                    alert('Something went wrong, please check your data and try again.')
                  }
                }}
              >
                {({ errors, touched, isSubmitting, setFieldValue }) => (
                  <Form className="signup-form">
                    {!isSubmitting &&
                      <div>
                        <h1>Register Now</h1>
                        <p>Enter your details below and submit. A notification will be sent from Tāhuhu Nui o Ngāti Manu to confirm your successful registration.</p>
                        <p><span className="required-field">*</span><i> indicates a required field.</i></p>
                      </div>
                    }
                    {!isSubmitting && <NameSection errors={errors} touched={touched} />}
                    {!isSubmitting && <AddressSection errors={errors} touched={touched} />}
                    {!isSubmitting && <TamarikiSection errors={errors} touched={touched} />}
                    {!isSubmitting && <WhanauSection errors={errors} touched={touched} />}
                    {!isSubmitting && <TupunaSection errors={errors} touched={touched} />}
                    {!isSubmitting && <WhakapapaSection errors={errors} touched={touched} />}
                    {!isSubmitting && <DeclarationSection errors={errors} touched={touched} />}
                    <br />
                    {!isSubmitting &&
                      <Recaptcha
                        sitekey="6Ld3lV8aAAAAAHh4oyT03K6eYoNllxwI41Pzhawm"
                        render="explicit"
                        theme="light"
                        verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                        onloadCallback={() => { console.log("done loading!"); }}
                      />
                    }
                    {errors.recaptcha
                      && touched.recaptcha && (
                        <p className="signup-form-error">{errors.recaptcha}</p>
                      )}
                    {!isSubmitting && <div style={{ textAlign: 'center', margin: '2rem' }}><Button type="submit">Submit</Button></div>}
                    {isSubmitting &&
                      <div className="spinner-section">
                        <Spinner variant="primary" animation="grow" role="status">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </div>}
                  </Form>
                )}
              </Formik>
            </div>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export default RegistrationForm

export const pageQuery = graphql`
  query {
          site {
          siteMetadata {
          title
        }
    }
  }
`
