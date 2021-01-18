import React from "react"
import { Link } from "gatsby"
const _ = require("lodash")

export const TagMetadata = {
    'Technical': {
        'color': '#118ab2',
    },
    'Music': {
        'color': '#52b788',
    },
    'Movies': {
        'color': '#52b788',
    }
};

const Tag = ({ tagName }) => {
    return TagMetadata[tagName] && (
        <Link style={{boxShadow: "none"}} to={`/tags/${_.kebabCase(tagName)}`}>
            <small style={{
                background: TagMetadata[tagName].color,
                color: 'white',
                paddingLeft: 6,
                paddingRight: 6,
                paddingTop: 3,
                paddingBottom: 3,
                borderRadius: 5,
                marginLeft: 3,
                marginRight: 3,
            }}>{tagName}</small>
        </Link>
    );
};

export default Tag;