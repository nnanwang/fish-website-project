import { useState } from "react";

// displayList 把 JSON 中的数组转换成适合网页阅读的一行文字。
// items 是要显示的数组；fallback 是没有资料时显示的默认文字。
function displayList(items, fallback = "资料待补充") {
  return Array.isArray(items) && items.length > 0 ? items.join(" · ") : fallback;
}

// title 是区块标题；children 代表写在开始标签和结束标签之间的内容。
function DetailSection({ title, children }) {
  return (
    <section className="detail-section">
      {/* 使用传入的 title 生成当前区块的二级标题。 */}
      <h2>{title}</h2>
      {/* children 会被替换成调用 DetailSection 时写入的具体内容。 */}
      {children}
    </section>
  );
}

// FishDetail 接收三个 props：当前鱼类资料、图片资料和返回列表的函数。
function FishDetail({ fish, images, onBack }) {
  // imageFailed 初始值是 false，表示封面图片还没有加载失败。
  // setImageFailed 是更新这个状态的函数。
  const [imageFailed, setImageFailed] = useState(false);

  const taxonomy = fish.taxonomy || {};
  const basicInfo = fish.basicInfo || {};
  const appearance = fish.appearance || {};
  const distribution = fish.distribution || {};
  const habitat = fish.habitat || {};
  const ecology = fish.ecology || {};
  const care = fish.care || {};
  const coverImage = images?.cover;
  const galleryImages = images?.gallery || [];
  const imageAlt = fish.images?.cover?.alt || `${fish.chineseName}的照片`;

  return (
    <article className="fish-detail" id="fish-detail">
      <div className="fish-detail__container">
        <button className="back-button" type="button" onClick={onBack}>
          ← 返回鱼类列表
        </button>

        {/* header 详情页顶部卡片：左边封面图，右边鱼类名称与简介。 */}
        <header className="fish-detail__hero">
          <div className="fish-detail__image-area">
            {coverImage?.src && !imageFailed ? (
              // src 是图片路径，alt 是文字说明，onError 负责处理加载失败。
              <img
                src={coverImage.src}
                alt={imageAlt}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="fish-detail__placeholder" role="img" aria-label="暂无本地图片">
                <span aria-hidden="true">≈</span>
                <p>暂无本地图片</p>
              </div>
            )}
          </div>

          {/* intro 显示状态、中文名、英文名、学名和简介。 */}
          <div className="fish-detail__intro">
            {/* eyebrow 是视觉上的小标签。 */}
            <p className="eyebrow">FISH PROFILE</p>
            {/* 没有原生状态资料时，显示“鱼类资料”。 */}
            <p className="fish-detail__status">
              {fish.status?.nativeStatus || "鱼类资料"}
            </p>
            {/* 使用当前 fish 对象中的中文名作为页面主标题。 */}
            <h1>{fish.chineseName}</h1>
            {/* && 是条件渲染：有英文名时才创建这个段落。 */}
            {fish.englishName && <p className="fish-detail__english">{fish.englishName}</p>}
            {/* 有学名时才显示学名与命名信息。 */}
            {fish.scientificName && (
              <p className="fish-detail__scientific">
                {/* i 标签让拉丁学名以斜体显示。 */}
                <i>{fish.scientificName}</i>
                {/* 有命名作者时，才在学名后面补充作者和年份。 */}
                {fish.scientificAuthor && <span> · {fish.scientificAuthor}</span>}
              </p>
            )}
            {/* summary 缺失时显示备用文案，页面不会留下空白。 */}
            <p className="fish-detail__summary">
              {appearance.summary || "这条鱼的外形资料正在整理中。"}
            </p>
          </div>
        </header>

        {/* facts 是顶部下方的六项快速资料。 */}
        <div className="fish-detail__facts" aria-label="鱼类基本信息">
          {/* 每个 div 都是一项“标签 + 资料”。 */}
          <div><span>目</span><strong>{taxonomy.order || "待补充"}</strong></div>
          <div><span>科</span><strong>{taxonomy.family || "待补充"}</strong></div>
          <div><span>属</span><strong>{taxonomy.genus || "待补充"}</strong></div>
          <div><span>体型</span><strong>{appearance.bodyShape || "待补充"}</strong></div>
          {/* 食性是数组，所以调用 displayList 把它转换成文字。 */}
          <div><span>食性</span><strong>{displayList(basicInfo.diet)}</strong></div>
          {/* 三元运算符判断是否有体长；有就添加 cm，没有就显示“待补充”。 */}
          <div><span>最大体长</span><strong>{basicInfo.maximumLengthCm ? `${basicInfo.maximumLengthCm} cm` : "待补充"}</strong></div>
        </div>

        {/* 只有 galleryImages 中至少有一张图时，才显示整个图库。 */}
        {galleryImages.length > 0 && (
          // aria-labelledby 把图库区域和 gallery-title 标题关联起来。
          <section className="fish-gallery" aria-labelledby="gallery-title">
            {/* 图库标题区域包含标题和简短说明。 */}
            <div className="fish-gallery__heading">
              <div>
                <p className="eyebrow">PHOTO GALLERY</p>
                {/* id 的值与上方 aria-labelledby 的值相同。 */}
                <h2 id="gallery-title">更多图片</h2>
              </div>
              <p>顶部使用一张封面图；这里展示这条鱼的其他现有图片。</p>
            </div>

            {/* grid 负责把多张图库图片排成响应式网格。 */}
            <div className="fish-gallery__grid">
              {/* map 会对数组中的每张图片执行一次，并返回一个 figure。 */}
              {galleryImages.map((image, index) => (
                <figure className="fish-gallery__item" key={image.src}>
                  {/* src 来自当前 image；没有 alt 时自动使用鱼名和图片序号。 */}
                  <img
                    src={image.src}
                    alt={image.alt || `${fish.chineseName}图片 ${index + 2}`}
                  />
                  <figcaption>{image.caption || `${fish.chineseName}图片`}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* 下面的 grid 放置四个更详细的资料区块。 */}
        <div className="fish-detail__grid">
          {/* section 1:第一次复用 DetailSection，传入“辨识特征”标题。 */}
          <DetailSection title="辨识特征">
            {/* dl 表示名称与描述组成的资料列表。 */}
            <dl className="detail-list">
              {/* dt 是资料名称，dd 是对应内容。 */}
              <div><dt>主要颜色</dt><dd>{displayList(appearance.primaryColors)}</dd></div>
              <div><dt>身体斑纹</dt><dd>{displayList(appearance.patterns)}</dd></div>
              <div><dt>关键特征</dt><dd>{displayList(appearance.keyFeatures)}</dd></div>
            </dl>
          </DetailSection>

          {/* section1: 中国分布地区。 */}
          <DetailSection title="分布区域">
            {/* 没有 description 时显示备用文字。 */}
            <p>{distribution.description || "分布资料待补充。"}</p>
            <div className="detail-tags">
              {/* chinaRegions 缺失时使用空数组；map 为每个地区生成一个标签。 */}
              {(distribution.chinaRegions || []).map((region) => <span key={region}>{region}</span>)}
            </div>
          </DetailSection>

          {/* section 3: 显示栖息地说明、环境、水流和底质。 */}
          <DetailSection title="栖息环境">
            <p>{habitat.description || "栖息地资料待补充。"}</p>
            <dl className="detail-list">
              {/* 这三个字段都是数组，因此继续复用 displayList。 */}
              <div><dt>环境</dt><dd>{displayList(habitat.environment)}</dd></div>
              <div><dt>水流</dt><dd>{displayList(habitat.waterFlow)}</dd></div>
              <div><dt>底质</dt><dd>{displayList(habitat.bottomType)}</dd></div>
            </dl>
          </DetailSection>

          {/* section 4: 把生态资料和饲养资料放在一起。 */}
          <DetailSection title="生态与饲养">
            <dl className="detail-list">
              {/* 行为是文字；食物是数组；饲养难度是文字。 */}
              <div><dt>行为</dt><dd>{ecology.behavior || "资料待补充"}</dd></div>
              <div><dt>食物</dt><dd>{displayList(ecology.food)}</dd></div>
              <div><dt>饲养难度</dt><dd>{care.difficulty || "待补充"}</dd></div>
            </dl>
                 {care.warning && <p className="care-warning"><strong>饲养提示：</strong>{care.warning}</p>}
          </DetailSection>
        </div>
      </div>
    </article>
  );
}

export default FishDetail;
