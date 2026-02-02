export const metadata = {
  title: "About | Vexen",
  description:
    "About Vexen — writing about backend engineering, system design, and real-world software decisions.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-32 pb-24">
        {/* Header */}
        <header className="mb-14">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            About Vexen
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Vexen is a personal writing space focused on backend engineering,
            system design, and the thinking required to build production-ready
            software.
          </p>
        </header>

        {/* Body */}
        <section className="space-y-10 text-gray-700">
          <div>
            <h2 className="mb-2 text-xl font-medium text-gray-900">
              Why this exists
            </h2>
            <p>
              Most technical content explains <strong>how</strong> to do things.
              Very little explains <strong>why</strong> systems are designed a
              certain way, or what breaks when assumptions meet reality.
            </p>
            <p className="mt-3">
              Vexen exists to close that gap — focusing on real trade-offs,
              production constraints, and long-term thinking instead of tutorial
              shortcuts.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium text-gray-900">
              What you’ll find here
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Backend engineering explained with real use cases</li>
              <li>System design concepts without unnecessary theory</li>
              <li>Security, scalability, and failure-mode thinking</li>
              <li>Clear writing for developers who want to build seriously</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium text-gray-900">
              Who this is for
            </h2>
            <p>
              This site is for developers, founders, and engineers who care
              about building things that survive beyond demos — not just
              shipping features, but understanding the consequences of design
              decisions.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium text-gray-900">
              About the author
            </h2>
            <p>
              I’m John Doe. I write from the perspective of someone learning,
              building, breaking things, and thinking deeply about how software
              behaves in the real world — not just how it works in isolation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
