import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  return (
    <main className="main-sec">
      <h1 className="title">Personal Markdown✨</h1>
      <section className="workload">
        <article className="markdown">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </section>
    </main>
  );
}

export default App;
