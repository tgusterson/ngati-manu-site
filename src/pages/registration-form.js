import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import NameSection from "../components/nameFormSection"

import Registration from '../../content/assets/index/carousel/registration.png'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  middleName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  dob: Yup.string()
    .nullable()
    .required('Required')
    .test('Date of Birth', 'You must be 18 or over to register', function (value) {
      return moment().diff(moment(value), 'years') >= 18;
    }),
  email: Yup.string().email('Invalid email')
    .required('Required'),
});

const RegistrationForm = ({ data, location }) => {
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
              <h1>Signup</h1>
              <Formik
                initialValues={{
                  firstName: '',
                  middleName: '',
                  lastName: '',
                  email: '',
                  gender: '',
                  dob: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="signup-form">
                    <NameSection errors={errors} touched={touched} />
                    <label id="email-label">Email Address</label>
                    <Field name="email" type="email" aria-labelledby="email-label" />
                    {errors.email && touched.email ? <div className="signup-form-error">{errors.email}</div> : null}
                    <button type="submit">Submit</button>
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
