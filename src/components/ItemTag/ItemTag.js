import React, { Component } from "react";
import Chip from "react-md/lib/Chips";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import _ from "lodash";

import "./ItemTag.scss";

// list of allowed tags....
const icons = {
  "machine learning": "fa fa-gear item-chip-avatar",
  programming: "fa fa-bath item-chip-avatar",
  "deep learning": "fa fa-gears item-chip-avatar",
  embedded: "fa fa-microchip item-chip-avatar",
  "front-end": "fa fa-desktop item-chip-avatar",
  "back-end": "fa fa-server item-chip-avatar",
  iot: "fa fa-rocket item-chip-avatar",
  "scientific programming": "fa fa-flask item-chip-avatar",
  "virtual reality": "fa fa-gamepad item-chip-avatar",
  "bachelor thesis": "fa fa-graduation-cap item-chip-avatar"
};

class ItemTag extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="item-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Chip
                label={tag}
                avatar={
                  <Avatar icon={<FontIcon iconClassName={icons[tag]} />} />
                }
                className="item-chip"
                key={tag}
              />
            </Link>
          ))}
      </div>
    );
  }
}
export default ItemTag;
