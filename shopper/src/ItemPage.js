import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';

function ItemPage({ items }) {
    return (
        <ul className="ItemPage-items">
            {items.map(item =>          // iterating over a list of items and redering them out
                <li key={item.id} className="ItemPage-item">
                    {item.name}
                </li>
            )}
        </ul>
    );
}
ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage;
