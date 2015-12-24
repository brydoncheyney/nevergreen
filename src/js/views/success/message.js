const React = require('react')
const RemoveLink = require('./removeLink')

module.exports = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    removeMessage: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <li className='success-item'>
        <span className='success-message'>{this.props.message}</span>
        <RemoveLink removeMessage={this.props.removeMessage}/>
      </li>
    )
  }
})
