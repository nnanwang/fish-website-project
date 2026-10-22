// 图片修复：JSON 中部分 images.cover.src 是资料标识，不是浏览器可直接读取的文件路径。
// 因此，这个对象使用 fish.id 作为 key，把每条鱼对应到 public/images/fish 中真实存在的文件。
// cover 是卡片和详情页的主图；gallery 是详情页显示的其他图片。
// 图片资料与 fishData.json 分开保存，这样不需要修改原始鱼类数据。
// 注意：真实文件名中的冒号必须保留为 ":"；改成 "%3A" 后 Vite 会返回 HTML 页面而不是图片。
const fishImages = {
  "channa-argus": {
    "cover": {
      "src": "/images/fish/channa-argus/adult/:Channa-maculata:1:adult.png",
      "caption": "乌鳢封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/channa-argus/adult/:Channa-maculata:2:adult.png",
        "caption": "乌鳢图片 2"
      }
    ]
  },
  "esox-reicherti": {
    "cover": {
      "src": "/images/fish/Esox-reicherti/adult/:Esox-reicherti:1:adult.png",
      "caption": "黑斑狗鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Esox-reicherti/juvenile/:Esox-reicherti:1:juvenile.avif",
        "caption": "黑斑狗鱼图片 2"
      }
    ]
  },
  "macropodus-chinensis": {
    "cover": {
      "src": "/images/fish/macropodus-chinensis/adult/:macropodus-chinensis:1:adult.jpeg",
      "caption": "圆尾斗鱼封面图"
    },
    "gallery": []
  },
  "barbodes-semifasciolatus": {
    "cover": {
      "src": "/images/fish/Puntius-semifasciolatus/adult/:Puntius-semifasciolatus:1:adult.jpeg",
      "caption": "条纹小鲃封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Puntius-semifasciolatus/adult/:Puntius-semifasciolatus:2:adult.png",
        "caption": "条纹小鲃图片 2"
      }
    ]
  },
  "esox-lucius": {
    "cover": {
      "src": "/images/fish/esox-lucius/adult/:esox-lucius:1:adult.png",
      "caption": "白斑狗鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/esox-lucius/adult/:esox-lucius:2:adult.jpg",
        "caption": "白斑狗鱼图片 2"
      },
      {
        "src": "/images/fish/esox-lucius/juvenile/:esox-lucius:1:juvenile.jpeg",
        "caption": "白斑狗鱼图片 3"
      }
    ]
  },
  "siniperca-chuatsi": {
    "cover": {
      "src": "/images/fish/siniperca-chuatsi/adult/:siniperca-chuatsi:1:adult.png",
      "caption": "翘嘴鳜封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/siniperca-chuatsi/juvenile/:siniperca-chuatsi:1:juvenile.jpeg",
        "caption": "翘嘴鳜图片 2"
      }
    ]
  },
  "siniperca-kneri": {
    "cover": {
      "src": "/images/fish/siniperca-kneri/adult/:siniperca-kneri:1:adult.png",
      "caption": "大眼鳜封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/siniperca-kneri/adult/:siniperca-kneri:2:adult.png",
        "caption": "大眼鳜图片 2"
      }
    ]
  },
  "siniperca-obscura": {
    "cover": {
      "src": "/images/fish/siniperca-obscura/adult/:siniperca-obscura:1:adult.png",
      "caption": "暗鳜封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/siniperca-obscura/adult/:siniperca-obscura:2:adult.png",
        "caption": "暗鳜图片 2"
      },
      {
        "src": "/images/fish/siniperca-obscura/juvenile/:siniperca-obscura:1:juvenile.png",
        "caption": "暗鳜图片 3"
      }
    ]
  },
  "siniperca-roulei": {
    "cover": {
      "src": "/images/fish/siniperca-roulei/adult/:siniperca-roulei:1:adult.png",
      "caption": "长体鳜封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/siniperca-roulei/adult/:siniperca-roulei:2:adult.jpg",
        "caption": "长体鳜图片 2"
      }
    ]
  },
  "siniperca-scherzeri": {
    "cover": {
      "src": "/images/fish/siniperca-scherzeri/adult/:siniperca-scherzeri:1:adult.png",
      "caption": "斑鳜封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/siniperca-scherzeri/adult/:siniperca-scherzeri:2:adult.png",
        "caption": "斑鳜图片 2"
      },
      {
        "src": "/images/fish/siniperca-scherzeri/juvenile/:siniperca-schezeri:1:juvenile.png",
        "caption": "斑鳜图片 3"
      }
    ]
  },
  "hyporhamphus-intermedius": {
    "cover": {
      "src": "/images/fish/Hyporhamphus-intermedius/adult/:Hyporhamphus-intermedius:1:adult.png",
      "caption": "间下鱵封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Hyporhamphus-intermedius/adult/:Hyporhamphus-intermedius:2:adult.jpg",
        "caption": "间下鱵图片 2"
      }
    ]
  },
  "oryzias-latipes": {
    "cover": {
      "src": "/images/fish/oryzias-latipes/:oryzias-latipes:1:adult.jpg",
      "caption": "日本青鳉封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/oryzias-latipes/:oryzias-latipes:2:adult.webp",
        "caption": "日本青鳉图片 2"
      },
      {
        "src": "/images/fish/oryzias-latipes/:oryzias-latipes:3:adult.jpeg",
        "caption": "日本青鳉图片 3"
      }
    ]
  },
  "oryzias-sinensis": {
    "cover": {
      "src": "/images/fish/oryzias-sinensis/adult/:oryzias-sinensis:1:adult.png",
      "caption": "中华青鳉封面图"
    },
    "gallery": []
  },
  "oryzias-pectoralis": {
    "cover": {
      "src": "/images/fish/oryzias-pectoralis/:oryzias-pectoralis:1:adult.png",
      "caption": "鳍斑青鳉封面图"
    },
    "gallery": []
  },
  "oryzias-javanicus": {
    "cover": {
      "src": "/images/fish/oryzias-javanicus/adult/:oryzias-javanicus:1:adult.png",
      "caption": "红树林青鳉封面图"
    },
    "gallery": []
  },
  "micropercops-swinhonis": {
    "cover": {
      "src": "/images/fish/Micropercops-swinhonis/adult/:Micropercops-sinhonis:1:adult.png",
      "caption": "小黄䱂鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Micropercops-swinhonis/adult/:Micropercops-sinhonis:2:adult.png",
        "caption": "小黄䱂鱼图片 2"
      },
      {
        "src": "/images/fish/Micropercops-swinhonis/juvenile/:Micropercops-sinhonis:1:juvenile.png",
        "caption": "小黄䱂鱼图片 3"
      }
    ]
  },
  "sineleotris-saccharae": {
    "cover": {
      "src": "/images/fish/Sineleotris%20saccharae/adult/:sineleotrisi-saccharae:1:adult.png",
      "caption": "萨氏华䱂封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Sineleotris%20saccharae/adult/:sineleotrisi-saccharae:2:adult.png",
        "caption": "萨氏华䱂图片 2"
      }
    ]
  },
  "rhinogobius-cliffordpopei": {
    "cover": {
      "src": "/images/fish/Rhinogobius-cliffordpopei/adult/:Rhinogobius-cliffordpopei:1:adult.png",
      "caption": "波氏吻虾虎鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Rhinogobius-cliffordpopei/adult/:Rhinogobius-cliffordpopei:2:adult.png",
        "caption": "波氏吻虾虎鱼图片 2"
      }
    ]
  },
  "rhinogobius-brunneus": {
    "cover": {
      "src": "/images/fish/Rhinogobius-brunneus/adult/:Rhinogobius-brunneus:1:adult.png",
      "caption": "褐吻虾虎鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Rhinogobius-brunneus/adult/:Rhinogobius-brunneus:2:adult.png",
        "caption": "褐吻虾虎鱼图片 2"
      },
      {
        "src": "/images/fish/Rhinogobius-brunneus/adult/:Rhinogobius-brunneus:3:adult.png",
        "caption": "褐吻虾虎鱼图片 3"
      },
      {
        "src": "/images/fish/Rhinogobius-brunneus/juvenile/:Rhinogobius-brunneus:1:juvenile.png",
        "caption": "褐吻虾虎鱼图片 4"
      }
    ]
  },
  "rhinogobius-formosanus": {
    "cover": {
      "src": "/images/fish/Rhinogobius-formosanus/adult/:Rhinogobius-formosanus:1:adult.png",
      "caption": "台湾吻虾虎鱼封面图"
    },
    "gallery": []
  },
  "rhinogobius-zhoui": {
    "cover": {
      "src": "/images/fish/Rhinogobius-zhoui/adult/:Rhinogobius-zhoui:1:adult.png",
      "caption": "周氏吻虾虎鱼封面图"
    },
    "gallery": []
  },
  "rhinogobius-leavelli": {
    "cover": {
      "src": "/images/fish/Rhinogobius-leavelli/adult/:Rhinogobius-leavelli:1:adult.png",
      "caption": "李氏吻虾虎鱼封面图"
    },
    "gallery": []
  },
  "rhinogobius-similis": {
    "cover": {
      "src": "/images/fish/Rhinogobius-similis/:Rhinogobius-similis-1:adult.png",
      "caption": "真吻虾虎鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Rhinogobius-similis/:Rhinogobius-similis-2:adult.png",
        "caption": "真吻虾虎鱼图片 2"
      }
    ]
  },
  "rhinogobius-duospilus": {
    "cover": {
      "src": "/images/fish/Rhinogobius-duospilus/adult/:Rhinogobius-duospilus:1:adult.png",
      "caption": "溪吻虾虎鱼封面图"
    },
    "gallery": []
  },
  "mugilogobius-myxodermus": {
    "cover": {
      "src": "/images/fish/Mugilogobius%20myxodermus/adult/:Mugilogobius-myxodermus:1:adult.png",
      "caption": "粘皮鲻虾虎鱼封面图"
    },
    "gallery": []
  },
  "stiphodon-atropurpureus": {
    "cover": {
      "src": "/images/fish/Stiphodon-atropurpureus/adult/:Stiphodon-atropurpureus:1:adult.png",
      "caption": "紫身枝桠虾虎鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Stiphodon-atropurpureus/adult/:Stiphodon-atropurpureus:2:adult.png",
        "caption": "紫身枝桠虾虎鱼图片 2"
      }
    ]
  },
  "channa-maculata": {
    "cover": {
      "src": "/images/fish/Channa-maculata/adult/:Channa-maculata:1:adult.png",
      "caption": "斑鳢封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Channa-maculata/adult/:Channa-maculata:2:adult.png",
        "caption": "斑鳢图片 2"
      }
    ]
  },
  "channa-asiatica": {
    "cover": {
      "src": "/images/fish/Channa-asiatica/adult/:Channa-asiatica:1:adult.webp",
      "caption": "月鳢封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Channa-asiatica/juvenile/:Channa-asiatica:1:juvenile.png",
        "caption": "月鳢图片 2"
      }
    ]
  },
  "puntius-semifasciolatus": {
    "cover": {
      "src": "/images/fish/Puntius-semifasciolatus/adult/:Puntius-semifasciolatus:1:adult.jpeg",
      "caption": "条纹小鲃封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Puntius-semifasciolatus/adult/:Puntius-semifasciolatus:2:adult.png",
        "caption": "条纹小鲃图片 2"
      }
    ]
  },
  "gambusia-affinis": {
    "cover": {
      "src": "/images/fish/Gambusia-affinis/adult/:Gambusia-affinis:1:adult.png",
      "caption": "食蚊鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Gambusia-affinis/adult/:Gambusia-affinis:2:adult.png",
        "caption": "食蚊鱼图片 2"
      }
    ]
  },
  "micropterus-salmoides": {
    "cover": {
      "src": "/images/fish/Micropterus-salmoides/adult/:Micropterus-salmoides:1:adult.png",
      "caption": "大口黑鲈封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Micropterus-salmoides/adult/:Micropterus-salmoides:2:adult.png",
        "caption": "大口黑鲈图片 2"
      }
    ]
  },
  "lepomis-macrochirus": {
    "cover": {
      "src": "/images/fish/Lepomis-macrochirus/:Lepomis-macrochirus:1:adult.png",
      "caption": "蓝鳃太阳鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Lepomis-macrochirus/:Lepomis-macrochirus:2:adult.png",
        "caption": "蓝鳃太阳鱼图片 2"
      }
    ]
  },
  "oreochromis-niloticus": {
    "cover": {
      "src": "/images/fish/Oreochromis-niloticus/adult/:Oreochromis-niloticus:1:adult.png",
      "caption": "尼罗口孵鱼封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Oreochromis-niloticus/adult/:Oreochromis-niloticus:2:adult.png",
        "caption": "尼罗口孵鱼图片 2"
      }
    ]
  },
  "atractosteus-spatula": {
    "cover": {
      "src": "/images/fish/Atractosteus-spatula/adult/:Atractosteus-spatula:1:adult.png",
      "caption": "鳄雀鳝封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Atractosteus-spatula/adult/:Atractosteus-spatula:2:adult.png",
        "caption": "鳄雀鳝图片 2"
      }
    ]
  },
  "clarias-gariepinus": {
    "cover": {
      "src": "/images/fish/Clarias-gariepinus/:Clarias-gariepinus:1:adult.png",
      "caption": "埃及塘鲺封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Clarias-gariepinus/:Clarias-gariepinus:2:adult.png",
        "caption": "埃及塘鲺图片 2"
      },
      {
        "src": "/images/fish/Clarias-gariepinus/:Clarias-gariepinus:3:adult.png",
        "caption": "埃及塘鲺图片 3"
      }
    ]
  },
  "acheilognathus-macropterus": {
    "cover": {
      "src": "/images/fish/Acheilognathus-macropterus/adult/:Acheilognathus-macropterus:1:adult.png",
      "caption": "大鳍鱊封面图"
    },
    "gallery": []
  },
  "acheilognathus-typus": {
    "cover": {
      "src": "/images/fish/Acheilognathus-typus/:Acheilognathus-typus:1:adult.png",
      "caption": "细鳞鱊封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Acheilognathus-typus/:Acheilognathus-typus:2:adult.png",
        "caption": "细鳞鱊图片 2"
      },
      {
        "src": "/images/fish/Acheilognathus-typus/:Acheilognathus-typus:3:adult.png",
        "caption": "细鳞鱊图片 3"
      }
    ]
  },
  "rhodeus-sinensis": {
    "cover": {
      "src": "/images/fish/Rhodeus-sinensis/adult/:Rhodeus-sinensis:1:adult.png",
      "caption": "中华鳑鲏封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Rhodeus-sinensis/adult/:Rhodeus-sinensis:2:adult.png",
        "caption": "中华鳑鲏图片 2"
      }
    ]
  },
  "rhodeus-albomarginatus": {
    "cover": {
      "src": "/images/fish/Rhodeus-albomarginatus/adult/:Rhodeus-albomarginatus:1:adult.png",
      "caption": "白边鳑鲏封面图"
    },
    "gallery": [
      {
        "src": "/images/fish/Rhodeus-albomarginatus/adult/:Rhodeus-albomarginatus:2:adult.png",
        "caption": "白边鳑鲏图片 2"
      }
    ]
  },
  "rhodeus-fangi": {
    "cover": {
      "src": "/images/fish/Rhodeus-fangi/:Rhodeus-fangi:1:adult.png",
      "caption": "方氏鳑鲏封面图"
    },
    "gallery": []
  },
  "sinorhodeus-microlepis": {
    "cover": {
      "src": "/images/fish/Sinorhodeus-microlepis/:Sinorhodeus-microlepis:1:adult.png",
      "caption": "细鳞华鳑鲏封面图"
    },
    "gallery": []
  },
  "paratanakia-chii": {
    "cover": {
      "src": "/images/fish/Paratanakia-chii/adult/:Paratanakia-chii:1:adult.png",
      "caption": "齐氏副田中鱊封面图"
    },
    "gallery": []
  },
  "garra-orientalis": {
    "cover": {
      "src": "/images/fish/Garra-orientalis/adult/:Garra-orientalis:1:adult.webp",
      "caption": "东方墨头鱼封面图"
    },
    "gallery": []
  }
};

export default fishImages;
