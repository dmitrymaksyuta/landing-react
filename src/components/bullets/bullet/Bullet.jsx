import React from "react";
import {BulletWrapper} from "./style";

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

export default Bullet;
