import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate
    title={entry.getIn(['data', 'title'])}
    company={entry.getIn(['data', 'company'])}
    address={entry.getIn(['data', 'company'])}
    content={widgetFor('body')}
  />
)

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
