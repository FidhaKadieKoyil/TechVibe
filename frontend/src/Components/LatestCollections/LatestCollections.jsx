import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LatestCollections.css';
import latest_collections from '../Images/latest_collections';

import Item from '../Item/Item';

const LatestCollections = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/latest-collections');
    };

    return (
        <div className="latest-collections">
            <h1>Latest Collections</h1>
            
            <hr />
            <div className="collections">
                {latest_collections.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollections;
