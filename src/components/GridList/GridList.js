import React, { Component } from "react";
import Media, { MediaOverlay } from "react-md/lib/Media";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";

import styled from "styled-components";

// import images
import img1 from "../../../content/img/cellcircle_100.png";
import img2 from "../../../content/img/example_input.png";
import img3 from "../../../content/img/Elevator1.jpg";
import img4 from "../../../content/img/OfficeDashboard1.jpg";
import img5 from "../../../content/img/trafficlight.jpg";
import img6 from "../../../content/img/expscreenshot.jpg";

// make with map and load these with a file or with markdown
// also all the text like title, explain, etc should be in a markdown
// and passed on

const HoverableMediaOverlay = styled(MediaOverlay)`
  display: None;
`;

const HoverableMedia = styled(Media)`
  &:hover ${HoverableMediaOverlay} {
    display: block;
  }
`;

class GridList extends Component {
  render() {
    return (
      <div className="md-grid">
        <div className="md-cell--4">
          <HoverableMedia aspectRatio="1-1" className="md-grid">
            <img src={img1} alt="CellCircle" />
            <HoverableMediaOverlay>
              <CardTitle title="CellLion Counter">
                <Button raised secondary className="md-cell--right">
                  Info
                </Button>
              </CardTitle>
            </HoverableMediaOverlay>
          </HoverableMedia>
        </div>

        <div className="md-cell--4">
          <HoverableMedia aspectRatio="1-1" className="md-grid">
            <img src={img2} alt="SeaLion" />
            <HoverableMediaOverlay>
              <CardTitle title="SeaLion Counter">
                <Button raised secondary className="md-cell--right">
                  Info
                </Button>
              </CardTitle>
            </HoverableMediaOverlay>
          </HoverableMedia>
        </div>

        <div className="md-cell--4">
          <HoverableMedia aspectRatio="1-1" className="md-grid">
            <img src={img3} alt="CellCircle" />
            <HoverableMediaOverlay>
              <CardTitle title="CellLion Counter">
                <Button raised secondary className="md-cell--right">
                  Info
                </Button>
              </CardTitle>
            </HoverableMediaOverlay>
          </HoverableMedia>
        </div>

        <div className="md-cell--4">
          <HoverableMedia aspectRatio="1-1" className="md-grid">
            <img src={img4} alt="SeaLion" />
            <HoverableMediaOverlay>
              <CardTitle title="SeaLion Counter">
                <Button raised secondary className="md-cell--right">
                  Info
                </Button>
              </CardTitle>
            </HoverableMediaOverlay>
          </HoverableMedia>
        </div>

        <div className="md-cell--4">
          <HoverableMedia aspectRatio="1-1" className="md-grid">
            <img src={img5} alt="CellCircle" />
            <HoverableMediaOverlay>
              <CardTitle title="CellLion Counter">
                <Button raised secondary className="md-cell--right">
                  Info
                </Button>
              </CardTitle>
            </HoverableMediaOverlay>
          </HoverableMedia>
        </div>

        <div className="md-cell--4">
          <HoverableMedia aspectRatio="1-1" className="md-grid">
            <img src={img6} alt="SeaLion" />
            <HoverableMediaOverlay>
              <CardTitle title="SeaLion Counter">
                <Button raised secondary className="md-cell--right">
                  Info
                </Button>
              </CardTitle>
            </HoverableMediaOverlay>
          </HoverableMedia>
        </div>
      </div>
    );
  }
}

export default GridList;
