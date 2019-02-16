import React from 'react'
import 'intersection-observer'

const options = {
  threshold: 1.0
}

class ScrollSpy extends React.Component {
  static defaultProps = {
    activeClassName: 'active'
  }

  handleObserver = (entries, observer) => {
    entries.forEach(entry => {
      const entryID = entry.target.getAttribute('id')
      const link = this.links.find(
        link => link.getAttribute('href') === `#${entryID}`
      )

      if (link && entry.isIntersecting && entry.intersectionRatio >= 1) {
        this.previousLink &&
          this.previousLink.classList.remove(this.props.activeClassName)
        link.classList.add(this.props.activeClassName)
        this.previousLink = link
      }
    })
  }

  componentDidMount = () => {
    this.observer = new IntersectionObserver(this.handleObserver, options)
    this.links = [...this.container.querySelectorAll('a')]

    const root = document.querySelector('[data-scrollspy]')

    if (root) {
      this.headings = [...root.querySelectorAll('h1, h2, h3, h4, h5, h6')]

      this.headings.forEach(heading => {
        this.observer.observe(heading)
      })
    }
  }

  componentWillUnmount = () => {
    this.observer.disconnect()
  }

  render() {
    return <div ref={el => (this.container = el)} {...this.props} />
  }
}

export default ScrollSpy

