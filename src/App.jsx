import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedFish from "./components/FeaturedFish.jsx";
import DataCheck from "./components/DataCheck.jsx";
import fishData from "./data/fishData.json";

const flowSteps = [
  { file: "index.html", note: "The browser opens here." },
  { file: "main.jsx", note: "React starts the app." },
  { file: "App.jsx", note: "The page sections come together." },
  { file: "components", note: "Small, reusable UI pieces." },
  { file: "fishData.json", note: "Five fish live as structured data." },
  { file: "rendered UI", note: "Data becomes the page you see." },
];

const webLanguages = [
  { short: "HTML", title: "Page structure", text: "Headings, sections, buttons, and content." },
  { short: "CSS", title: "Visual style", text: "Color, spacing, layout, and responsive design." },
  { short: "JSX", title: "Behavior + components", text: "Reusable parts and interactive buttons." },
  { short: "JSON", title: "Structured data", text: "Fish facts stored separately from the design." },
];

function ProjectStructure() {
  return (
    <section className="learning-section" id="about" aria-labelledby="structure-title">
      <div className="section-heading">
        <p className="eyebrow">02 · Follow the files</p>
        <h2 id="structure-title">How a React page reaches your screen</h2>
        <p>
          Each file has one clear job. Follow the path from the browser entry point to the
          interface React renders.
        </p>
      </div>

      <ol className="file-flow" aria-label="React project rendering flow">
        {flowSteps.map((step, index) => (
          <li key={step.file}>
            <span className="flow-number">{String(index + 1).padStart(2, "0")}</span>
            <code>{step.file}</code>
            <p>{step.note}</p>
          </li>
        ))}
      </ol>

      <div className="language-grid">
        {webLanguages.map((item) => (
          <article key={item.short} className="language-card">
            <span aria-hidden="true">{item.short}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function JsonTips() {
  return (
    <aside className="json-tips" aria-labelledby="json-tips-title">
      <div>
        <p className="eyebrow">JSON pocket guide</p>
        <h2 id="json-tips-title">Small symbols, clear meaning.</h2>
        <p>When evidence is missing, leave an honest empty value—never guess.</p>
      </div>
      <dl>
        <div><dt><code>{"{}"}</code></dt><dd>one object</dd></div>
        <div><dt><code>[]</code></dt><dd>a list</dd></div>
        <div><dt><code>&quot;text&quot;</code></dt><dd>uses double quotes</dd></div>
        <div><dt><code>true / false</code></dt><dd>boolean values</dd></div>
        <div><dt><code>null</code></dt><dd>unknown number</dd></div>
        <div><dt><code>&quot;&quot;</code></dt><dd>unknown text</dd></div>
        <div><dt><code>[]</code></dt><dd>unknown list</dd></div>
      </dl>
    </aside>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero fishCount={fishData.length} />
        <FeaturedFish fish={fishData} />
        <ProjectStructure />
        <DataCheck fish={fishData} />
        <JsonTips />
      </main>
      <footer>
        <p>Freshwater Field Notes</p>
        <p>Class 1 · Built with React, Vite, JavaScript, and honest data.</p>
      </footer>
    </>
  );
}

export default App;
