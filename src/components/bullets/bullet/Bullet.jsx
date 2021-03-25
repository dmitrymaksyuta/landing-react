import React from "react";
import {BulletWrapper} from "./style";
import PropTypes from 'prop-types';

const Bullet = ({content}) => {

    function createMarkup() {
        return {__html: content.description};
    }

    return (
        <BulletWrapper>
           <BulletWrapper.Image image={content.image}></BulletWrapper.Image>
           <BulletWrapper.Title>{content.title}</BulletWrapper.Title>
           <BulletWrapper.Description dangerouslySetInnerHTML={createMarkup()} />
        </BulletWrapper>
    );
};

Bullet.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Bullet;
