import fishImages from "./fishImages.js";

// One shared image map keeps each guide card and its topic-page Hero in sync.
const guideCoverImages = {
  prepare: fishImages["macropodus-chinensis"]?.cover?.src,
  ecosystem:
    "https://thehomeaquarist.com/images/how-to-set-up-your-first-freshwater-aquarium-step-by-step/hero.png",
  maintenance:
    "https://cdn.shopify.com/s/files/1/0311/3149/files/catching_aquarium_fish.jpg?v=1584115310",
  health: "https://www.star-oddi.com/media/1/atlatic-salmon22.jpg",
};

export default guideCoverImages;
