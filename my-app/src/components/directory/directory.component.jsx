import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "ea",
          imageUrl:
            "https://pngimage.net/wp-content/uploads/2018/05/ea-logo-png-8.png",
          id: 1,
          linkUrl: "ea",
        },
        {
          title: "ubisoft",
          imageUrl:
            "https://cdn.clipart.email/d4c60290d31793c5c1796db69f66155d_ubisoft-logo-transparent-png-clipart-free-download-ywd_500-500.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "blizzard",
          imageUrl:
            "https://i.ya-webdesign.com/images/battle-net-icon-png-2.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "console",
          imageUrl:
            "https://img.pngio.com/video-game-consoles-png-free-video-game-consolespng-transparent-game-console-png-762_371.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "pc",
          imageUrl: "https://i.ya-webdesign.com/images/pc-games-png-2.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
