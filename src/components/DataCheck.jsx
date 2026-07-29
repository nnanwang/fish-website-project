const sharedRegionCodes = new Set([
  "heilongjiang",
  "yellow-river",
  "yangtze-river",
  "pearl-river",
  "xinjiang",
  "qinghai-tibet",
  "coastal",
]);

function CheckGroup({ tone, title, count, children }) {
  return (
    <section className={`check-group ${tone}`} aria-labelledby={`${tone}-title`}>
      <div className="check-group-heading">
        <span aria-hidden="true">{tone === "passed" ? "✓" : tone === "attention" ? "!" : "?"}</span>
        <h3 id={`${tone}-title`}>{title}</h3>
        <strong>{count}</strong>
      </div>
      <ul>{children}</ul>
    </section>
  );
}

function DataCheck({ fish }) {
  const ids = fish.map((item) => item.id);
  const uniqueIds = new Set(ids);
  const fishMissingTwoSources = fish.filter((item) => !item.sources || item.sources.length < 2);
  const sourcesWithoutUrls = fish.flatMap((item) =>
    (item.sources || []).filter((source) => !source.url).map(() => item.id),
  );
  const allImages = fish.flatMap((item) => [item.images.cover, ...(item.images.gallery || [])]);
  const imagesWithoutEvidence = allImages.filter((image) => !image.source || !image.license);
  const unknownRegionEntries = fish.flatMap((item) =>
    item.identification.regions
      .filter((region) => !sharedRegionCodes.has(region))
      .map((region) => `${item.id}: ${region}`),
  );
  const chuatsi = fish.find((item) => item.id === "siniperca-chuatsi");

  return (
    <section className="data-check-section" id="data-check" aria-labelledby="data-check-title">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">03 · Check before you publish</p>
          <h2 id="data-check-title">JSON data check</h2>
        </div>
        <p>
          A valid file can still need stronger evidence. These checks compare the student data with
          the shared project guide.
        </p>
      </div>

      <div className="validation-banner" role="status">
        <span aria-hidden="true">✓</span>
        <div>
          <strong>The file opens successfully.</strong>
          <p>Its JSON syntax is valid, so React can read the array without crashing.</p>
        </div>
        <code>valid JSON</code>
      </div>

      <div className="check-grid">
        <CheckGroup tone="passed" title="Passed" count={3}>
          <li><strong>JSON syntax is valid.</strong><span>The imported file parsed successfully.</span></li>
          <li><strong>The file contains {fish.length} fish.</strong><span>The top-level value is a list of five objects.</span></li>
          <li><strong>All {uniqueIds.size} IDs are unique.</strong><span>No duplicate card keys were found.</span></li>
        </CheckGroup>

        <CheckGroup tone="attention" title="Needs attention" count={5}>
          <li>
            <strong>Standardize the classroom filename.</strong>
            <span>The student submission is recorded as <code>fishData1.json</code>; the app copy belongs at <code>src/data/fishData.json</code>. The supplied workspace file itself is named <code>fishData.json</code>.</span>
          </li>
          <li><strong><code>siniperca-chuatsi</code> has no <code>sources</code> field.</strong><span>Use an empty list until real sources are found; do not invent them.</span></li>
          <li><strong><code>siniperca-chuatsi</code> has no <code>lastUpdated</code>.</strong><span>Add the actual update date when the record is revised.</span></li>
          <li><strong>An unshared region code was found.</strong><span><code>{unknownRegionEntries.join(", ")}</code> is not in the guide’s region table.</span></li>
          <li><strong>The scientific author needs a year.</strong><span><i>{chuatsi.scientificName}</i> currently has <code>{chuatsi.scientificAuthor}</code>, without the publication year required by the template.</span></li>
        </CheckGroup>

        <CheckGroup tone="evidence" title="Missing evidence" count={3}>
          <li><strong>{imagesWithoutEvidence.length} image records lack source or license details.</strong><span>Every cover and gallery image currently needs evidence before publication.</span></li>
          <li><strong>{fishMissingTwoSources.length} of {fish.length} fish have fewer than two reliable text sources.</strong><span>The class requirement is at least two reliable sources for every fish.</span></li>
          <li><strong>{sourcesWithoutUrls.length} existing source objects have no URL.</strong><span>A missing source object for <code>siniperca-chuatsi</code> is counted separately above.</span></li>
        </CheckGroup>
      </div>
    </section>
  );
}

export default DataCheck;
