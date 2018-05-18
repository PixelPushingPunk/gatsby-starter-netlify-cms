import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, company, address, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{company}</p>
              <p>{address}</p>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={frontmatter.title}
      company={frontmatter.company}
      address={frontmatter.address}
      content={data.markdownRemark.html}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        company
        address
      }
    }
  }
`
