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

import Registration from '../../content/assets/index/carousel/registration.png'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  middleName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
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
          <Container className="signup-form">
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
                  <Form>
                    <label id="firstName-label">Ingoa Tuatahi / First Name</label>
                    <Field name="firstName" aria-labelledby="firstName-label" />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="middleName" placeholder="Ingoa Tuarua/ Middle Name" />
                    {errors.middleName && touched.middleName ? (
                      <div>{errors.middleName}</div>
                    ) : null}
                    <Field name="lastName" placeholder="Ingoa Whānau / Last Name" />
                    {errors.lastName && touched.lastName ? (
                      <div>{errors.lastName}</div>
                    ) : null}
                    <div id="gender-radio-group">Tāne / Wahine Rānei / Gender</div>
                    <div role="group" aria-labelledby="gender-radio-group">
                      <label><Field type="radio" name="gender" value="Female" />Female</label>
                      <label><Field type="radio" name="gender" value="Male" />Male</label>
                      <label><Field type="radio" name="gender" value="Other" />Other</label>
                      {errors.gender && touched.gender ? (
                        <div>{errors.gender}</div>
                      ) : null}
                    </div>
                    <Field name="dob" type="date" />
                    {errors.dob && touched.dob ? <div>{errors.dob}</div> : null}
                    <Field name="email" type="email" placeholder="Email Address" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
