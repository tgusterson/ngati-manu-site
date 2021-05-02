import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import moment from "moment"
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { sendMail } from '../utils/apiRequests'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from "../components/bannerImage"
import MaraeFormSection from "../components/maraeBookingForm"
import Registration from '../../content/assets/banner-images/marae_booking.png'

const userHTML = `        
<p>Tēnā koe,</p>
<p>Thank you for submitting your booking enquiry. Our marae booking administrator will be in contact within 48hours to verify your booking details. Please be advised that a deposit is required to ensure booking is confirmed. 
If you require urgent assistance please contact our booking administrator directly at maraebookings@ngatimanu.com</p>
<p></p>Ngā Mihi,<br>
Kāretu Maori Committee</p>`

const userText = `
Tēnā koe,

Thank you for submitting your booking enquiry. Our marae booking administrator will be in contact within 48hours to verify your booking details. Please be advised that a deposit is required to ensure booking is confirmed. 
If you require urgent assistance please contact our booking administrator directly at maraebookings@ngatimanu.com

Ngā Mihi,
Kāretu Maori Committee`

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignupSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(1, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  orgName: Yup.string()
    .min(1, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
  kaupapa: Yup.string()
    .min(1, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  hireStartDate: Yup.string()
    .nullable()
    .required('Required')
    .test('Hire Start Date', 'You must select a future date', function (value) {
      return moment().diff(moment(value), 'days') <= 0;
    }),
  hireEndDate: Yup.string()
    .nullable()
    .required('Required')
    .test('Hire Start Date', 'You must select a future date', function (value) {
      return moment().diff(moment(value), 'days') <= 0;
    }),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phoneNumber: Yup.string()
    .required('Required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  numberOfPeople: Yup.number()
    .min(1, 'Must be greater than or equal to one')
    .required('Required'),
  arrivalTime: Yup.string().required('Required'),
  departureTime: Yup.string().required('Required'),
});

const BookingForm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ngāti Manu Marae Hireage" />
      <Container fluid>
        <Row>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <BannerImage heading={data.allContentfulBasicPage.edges[0].node.title} image={Registration} imageAlt={"Ngāti Manu Marae Hireage"} />
            <div className="cta-home">
              <div style={{ fontFamily: 'caveat', fontSize: '2rem' }} />
            </div>
          </Container>
          <Container>
            <div>
              <Formik
                initialValues={{
                  contactName: '',
                  orgName: '',
                  email: '',
                  phoneNumber: '',
                  kaupapa: '',
                  numberOfPeople: '',
                  submissionDate: new Date(),
                  hireStartDate: '',
                  hireEndDate: '',
                  arrivalTime: '',
                  departureTime: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    const adminEmail = await sendMail({
                      to: 'maraebookings@ngatimanu.com',
                      subject: `Marae Booking Request From ${values.orgName}`,
                      html: `<p>Marae booking request received from ${values.contactName} at ${values.submissionDate}.</p>
                        <p>Booking details:</p>
                        <ul>
                          <li>Organisation Name: ${values.orgName}</li>
                          <li>Contact Name: ${values.contactName}</li>
                          <li>Email Address: ${values.email}</li>
                          <li>Phone: ${values.phoneNumber}</li>
                          <li>Kaupapa (Reason for hireage): ${values.kaupapa}</li>
                          <li>Number of People: ${values.numberOfPeople}</li>
                          <li>Hire Start Date: ${values.hireStartDate}</li>
                          <li>Hire End Date: ${values.hireEndDate}</li>
                          <li>Arrival Time: ${values.arrivalTime}</li>
                          <li>Departure Time: ${values.departureTime}</li>
                        </ul>
                      `,
                      text: `<p>Marae booking request received from ${values.contactName} at ${values.submissionDate}</p>
                      <p>Booking details:</p>
                      <ul>
                        <li>Contact Name: ${values.contactName}</li>
                        <li>Organisation Name: ${values.orgName}</li>
                        <li>Email Address: ${values.email}</li>
                        <li>Phone: ${values.phoneNumber}</li>
                        <li>Kaupapa (Reason for hireage): ${values.kaupapa}</li>
                        <li>Number of People: ${values.numberOfPeople}</li>
                        <li>Hire Start Date (yyyy-mm-dd): ${values.hireStartDate}</li>
                        <li>Hire End Date (yyyy-mm-dd): ${values.hireEndDate}</li>
                        <li>Arrival Time (24 hour format): ${values.arrivalTime}</li>
                        <li>Departure Time (24 hour format): ${values.departureTime}</li>
                      </ul>
                      `,

                    })
                    if (adminEmail === 200) {
                      const userEmail = await sendMail({
                        to: values.email,
                        html: userHTML,
                        text: userText,
                        subject: 'Your Ngāti Manu Marae Booking Request'
                      })
                      alert(`Thank you for submitting your booking enquiry. Our marae booking administrator will be in contact within 48hours to verify your booking details. Please be advised that a deposit is required to ensure booking is confirmed. If you require urgent assistance please contact our booking administrator directly at maraebookings@ngatimanu.com.`)
                      resetForm({ values: '' })
                    } else {
                      alert('Something went wrong, please try submitting the form again.')
                    }
                  } catch (error) {
                    alert('Something went wrong, please check your data and try again.')
                  }
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className="signup-form">
                    {!isSubmitting &&
                      <Container className="markdown-content-container">
                        <ReactMarkdown source={data.allContentfulBasicPage.edges[0].node.body.body} />
                        <p style={{ marginBottom: '-10px' }}><span className="required-field">*</span><i> indicates a required field.</i></p>
                      </Container>
                    }
                    <Container>
                      {!isSubmitting && <MaraeFormSection errors={errors} touched={touched} />}
                      {!isSubmitting &&
                        <div style={{ textAlign: 'center', margin: '2rem' }}>
                          <Button type="submit">Submit</Button>
                        </div>}
                      {isSubmitting &&
                        <div className="spinner-section">
                          <Spinner variant="primary" animation="grow" role="status">
                            <span className="sr-only">Loading...</span>
                          </Spinner>
                        </div>}
                    </Container>
                  </Form>
                )}
              </Formik>
            </div>
          </Container>
        </Row>
      </Container>
    </Layout >
  )
}

export default BookingForm

export const pageQuery = graphql`
  query {
          site {
          siteMetadata {
          title
        }
    }
    allContentfulBasicPage(filter: {contentful_id: {eq: "6Ckix8HDbSGmRjLG3BFnEx"}})  {
      edges {
        node {
          body {
            body
          }
          title
        }
      }
    }
  }
`
