import React from "react"
import { Link } from "gatsby"
const _ = require("lodash")

const TagMetadata = {
    'Technical': {
        'color': '#118ab2',
    },
    'Music': {
        'color': '#52b788',
    }
};

const Tag = ({ tagName }) => {
    return TagMetadata[tagName] && (
        <Link style={{boxShadow: "none"}} to={`/tags/${_.kebabCase(tagName)}`}>
            <small style={{
                background: TagMetadata[tagName].color,
                color: 'white',
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 2,
                paddingBottom: 2,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
            }}>{tagName}</small>
        </Link>
    );
};

export default Tag;