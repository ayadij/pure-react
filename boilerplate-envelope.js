/*
Create an Envelope component that takes toPerson and fromPerson as props and uses your AddressLabel from Exercise 1 to display the return address and the recipient address. Make sure to include a Stamp too!
*/


import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './boilerplate-envelope.css';

function Envelope({ from, to  }) {
  return(
      <div className="envelope">
        <Stamp />
        <AddressLabel className="from" mailingLabel={from} />
        <AddressLabel className="to" mailingLabel={to} />
      </div>
  );
}
Envelope.propTypes = {
  from: PropTypes.object,
  to: PropTypes.object
};


function Stamp() {
  return(
    <div className="stamp">Stamp</div>
  );
}


function AddressLabel({ mailingLabel, className }) {
  var {name, addressLine1, addressLine2} = mailingLabel;
  return (
    <div className={`mailingLabel ${className}`}>
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}
AddressLabel.propTypes = {
  mailingLabel: ProptTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};



var middleLabel =  {
  name: "Mr. Sender",
  addressLine1: "123 Fake St.",
  addressLine2: "Boston, MA 02118"
};

var topLeftLabel =  {
  name: "Mrs. Receiver",
  addressLine1: "123 Fake St.",
  addressLine2: "San Francisco, CA 94101"
};

ReactDOM.render(
  <Envelope toPerson={middleLabel} fromPerson={topLeftLabel}/>,
  document.getElementById('root')
);



ReactDOM.render(
  <Envelope from={topLeftLabel} to={middleLabel}/>, document.getElementById('root')
);