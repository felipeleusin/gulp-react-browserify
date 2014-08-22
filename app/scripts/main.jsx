'use strict';
/**
 * @jsx React.DOM
 */

var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <div>Mah Oi?</div>
    );
  }

});

React.renderComponent(<App />, document.getElementById('content'));
