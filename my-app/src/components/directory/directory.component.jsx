import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "EA",
          imageUrl:
            "https://pngimage.net/wp-content/uploads/2018/05/ea-logo-png-8.png",
          id: 1,
        },
        {
          title: "UBISOFT",
          imageUrl:
            "https://cdn.clipart.email/d4c60290d31793c5c1796db69f66155d_ubisoft-logo-transparent-png-clipart-free-download-ywd_500-500.png",
          id: 2,
        },
        {
          title: "BLIZZARD",
          imageUrl:
            "https://i.ya-webdesign.com/images/battle-net-icon-png-2.png",
          id: 3,
        },
        {
          title: "CONSOLE",
          imageUrl: "https://i.dlpng.com/static/png/6364982_preview.png",
          size: "large",
          id: 4,
        },
        {
          title: "PC",
          imageUrl: "https://i.ya-webdesign.com/images/pc-games-png-2.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
