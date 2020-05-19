const SHOP_DATA = [
  {
    id: 1,
    title: "Ea",
    routeName: "ea",
    items: [
      {
        id: 1,
        name: "Star Wars Jedi: Fallen Order™",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2019/04/star-wars-jedi-home-hero-large-xl.jpg.adapt.crop1x1.767p.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Anthem™",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2017/07/anthem-key-art.jpg.adapt.crop1x1.767p.jpg",
        price: 18,
      },
      {
        id: 3,
        name: "Battlefield™ V ",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg",
        price: 35,
      },
      {
        id: 4,
        name: "A Way Out",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2017/07/a-way-out-key-art.jpg.adapt.crop1x1.767p.jpg",
        price: 25,
      },
      {
        id: 5,
        name: "Need for Speed™ Payback",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/need-for-speed-payback-key-art.jpg.adapt.crop1x1.767p.jpg",
        price: 18,
      },
      {
        id: 6,
        name: "Titanfall® 2",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/titanfall-2-key-art.jpg.adapt.crop1x1.767p.jpg",
        price: 14,
      },
      {
        id: 7,
        name: "Dragon Age™: Inquisition",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/dai-keyart.jpg.adapt.crop1x1.767p.jpg",
        price: 18,
      },
      {
        id: 8,
        name: "Crysis® 3",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/crysis-3-keyart.jpg.adapt.crop1x1.767p.jpg",
        price: 14,
      },
      {
        id: 9,
        name: "EA SPORTS™ FIFA 20",
        imageUrl:
          "https://media.contentapi.ea.com/content/dam/gin/images/2019/06/fifa20-gin-keyart.jpg.adapt.crop1x1.767w.jpg",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Blizzard",
    routeName: "blizzard",
    items: [
      {
        id: 1,
        name: "Overwatch",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/XMG50RXK21EC1506441173958.jpg",
        price: 220,
      },
      {
        id: 2,
        name: "World of Warcraft",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/M7G2U62LWFRW1506441174974.jpg",
        price: 280,
      },
      {
        id: 3,
        name: "Hearthstone",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/F2B8X5LJKA3G1506441173755.jpg",
        price: 110,
      },
      {
        id: 4,
        name: "Heroes of the Storm",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/A7ZYBYYMLVK81506441173875.jpg",
        price: 160,
      },
      {
        id: 5,
        name: "Diablo® IV",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/NXVVHD1WPPE51572637388738.jpg",
        price: 160,
      },
      {
        id: 6,
        name: "StarCraft II",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/X3MOVXG6FYN31506441174058.jpg",
        price: 160,
      },
      {
        id: 7,
        name: "Diablo III",
        imageUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/page_media/M074M9EDWCVI1506441173641.jpg",
        price: 190,
      },
    ],
  },
  {
    id: 3,
    title: "Ubisoft",
    routeName: "ubisoft",
    items: [
      {
        id: 1,
        name: "Assassin's Creed Valhalla",
        imageUrl:
          "https://www.pcinvasion.com/wp-content/uploads/2020/04/Assassins-Creed-Valhalla-11-400x300.jpg",
        price: 125,
      },
      {
        id: 2,
        name: "Watch Dogs: Legion",
        imageUrl:
          "https://www.tnt-clan.it/wp-content/uploads/2020/01/watch-dogs-legion-header1-400x300.jpg",
        price: 90,
      },
      {
        id: 3,
        name: "Gods & Monsters",
        imageUrl:
          "https://pbs.twimg.com/profile_images/1138192565730070529/uV04h9se_400x400.png",
        price: 90,
      },
      {
        id: 4,
        name: "Tom Clancy's The Division 2",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0218/8417/4408/products/9565p_0c_2x_f8e98f09-394c-4b7b-af7e-ac85c1ba3663_800x.jpg?v=1588861414",
        price: 165,
      },
      {
        id: 5,
        name: "Tom Clancy's Rainbow Six Quarantine",
        imageUrl:
          "https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/r6-quarantine-gameinfo-boxshot_art-ubinew-02-348x434_359090.jpg",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Console",
    routeName: "console",
    items: [
      {
        id: 1,
        name: "Ghost of Tsushima",
        imageUrl:
          "https://i.pinimg.com/originals/90/6b/fb/906bfb925c6082bd79a94b22ed72c3b9.png",
        price: 25,
      },
      {
        id: 2,
        name: "The Last of Us Part II",
        imageUrl:
          "https://www.merlininkazani.com/images/games/10412/93438_640.jpg",
        price: 20,
      },
      {
        id: 3,
        name: "God of War",
        imageUrl:
          "https://donanimgunlugu.com/wp-content/upload/2018/04/yeni-god-of-war.jpg",
        price: 80,
      },
      {
        id: 4,
        name: "Marvel's Spider-Man",
        imageUrl: "https://avatarfiles.alphacoders.com/169/169253.png",
        price: 80,
      },
      {
        id: 5,
        name: "Horizon Zero Dawn",
        imageUrl:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA10211_00-HRZCE00000000000/1589850392000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
        price: 45,
      },
      {
        id: 6,
        name: "Uncharted 4: A Thief's End",
        imageUrl:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA04529_00-UNCHARTED4000000/1589811917000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
        price: 135,
      },
    ],
  },
  {
    id: 5,
    title: "Pc",
    routeName: "pc",
    items: [
      {
        id: 1,
        name: "Need for Speed Heat",
        imageUrl:
          "https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2019/11/need-for-speed-heat.jpg",
        price: 325,
      },
      {
        id: 2,
        name: "Football Manager 2020",
        imageUrl:
          "https://iasbh.tmgrup.com.tr/64dac0/1138/600/72/0/1123/554?u=https://isbh.tmgrup.com.tr/sbh/2020/03/19/football-manager-2020-ucretsiz-oldu-fm-2020-nereden-ve-nasil-indirilir-1584620136350.jpg",
        price: 20,
      },
      {
        id: 3,
        name: "Escape from Tarkov",
        imageUrl:
          "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov.jpg",
        price: 25,
      },
      {
        id: 4,
        name: "Forza Horizon 4",
        imageUrl:
          "https://oyuncustore.net/wp-content/uploads/2019/01/14306343_0_b.jpg",
        price: 25,
      },
      {
        id: 5,
        name: "Sea of Thieves",
        imageUrl:
          "https://media.durmaplay.com/d/promo/Sea-of-Thieves-Anniversary-Edition-Xbox-One-promo.jpg?format=webp&width=300",
        price: 40,
      },
      {
        id: 6,
        name: "Grand Theft Auto V",
        imageUrl:
          "https://media.durmaplay.com/d/promo/grand-theft-auto-v-gta-5-premium-online-edition-satin-al-satis-durma-play.jpg?format=webp&width=300",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
