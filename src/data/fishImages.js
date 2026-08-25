// 创建一个独立的图片资料表，让 FishCard 和 FishDetail 使用同一套图片路径。
// 每条鱼都使用相同的数据结构：cover 保存封面图，gallery 保存其余图片。
const fishImages = {
  // 对象的 key 对应鱼类资料中的 id，因此可以使用 fishImages[fish.id] 查找图片。
  "channa-argus": {
    // cover 只保存一张图，用于鱼类卡片和详情页顶部。
    cover: {
      // src 是 public 文件夹中的图片路径；网页路径从 /images 开始。
      src: "/images/fish/channa-argus/adult/identification.png",
      // caption 是图片说明，也可以作为无障碍文字的来源。
      caption: "乌鳢成鱼辨识图",
    },
    // 乌鳢目前没有额外图片，所以 gallery 使用空数组。
    gallery: [],
  },

  // 圆尾斗鱼的图片资料。
  "macropodus-chinensis": {
    // 详情页顶部要展示的圆尾斗鱼封面图。
    cover: {
      // 图片位于 public/images/fish/macropodus-chinensis/adult 文件夹中。
      src: "/images/fish/macropodus-chinensis/adult/mate.jpeg",
      // 给图片添加清楚的中文说明。
      caption: "圆尾斗鱼成鱼",
    },
    // 暂时没有额外图库图片。
    gallery: [],
  },

  // 条纹小鲃的图片资料。
  "barbodes-semifasciolatus": {
    // null 表示目前还没有确认可用的封面图片。
    cover: null,
    // 空数组表示详情页也没有额外图片需要循环展示。
    gallery: [],
  },

  // 白斑狗鱼的图片资料。
  "esox-lucius": {
    // cover 中只放详情页顶部使用的一张主图。
    cover: {
      // 白斑狗鱼成鱼侧面图的网页路径。
      src: "/images/fish/esox-lucius/adult/side.jpg",
      // 封面图片的说明文字。
      caption: "白斑狗鱼成鱼",
    },
    // gallery 是数组，所以以后可以继续加入更多图片对象。
    gallery: [
      // 数组中的每个对象代表一张额外图片。
      {
        // 白斑狗鱼幼鱼图片的网页路径。
        src: "/images/fish/esox-lucius/juvenile/juvenile pike.jpeg",
        // 图库会把这段文字显示在图片下方。
        caption: "白斑狗鱼幼鱼",
      },
    ],
  },

  // 翘嘴鳜的图片资料。
  "siniperca-chuatsi": {
    // 翘嘴鳜详情页顶部使用的封面图。
    cover: {
      // 注意：文件名必须与 public 文件夹中的真实文件名完全一致。
      src: "/images/fish/siniperca-chuatsi/adult/:siniperca-chuatsi:adult.png",
      // 封面图片说明。
      caption: "翘嘴鳜成鱼",
    },
    // 其余图片放进 gallery 数组，由详情页使用 map() 自动生成图库。
    gallery: [
      // 翘嘴鳜幼鱼图片对象。
      {
        // 幼鱼图片的网页路径。
        src: "/images/fish/siniperca-chuatsi/juvenile/:siniperca-chuatsi:juvenile.jpeg",
        // 幼鱼图片的说明文字。
        caption: "翘嘴鳜幼鱼",
      },
    ],
  },
};

// 导出图片资料表，让 App.jsx 可以 import 并传给 FishDetail。
export default fishImages;
