// src/pages/polvolab/components/PolvoBlocks.tsx
// -----------------------------------------------------------------------------
// Building blocks for POLVO LAB project detail pages. Re-exports the shared
// prose blocks + the 3D viewer, and adds two domain-specific blocks:
// <SpecTable/> and <ResourceList/>.
//
//   import { Lead, H2, P, Figure, Gallery, Model3DViewer, SpecTable, ResourceList }
//     from '../components/PolvoBlocks';
// -----------------------------------------------------------------------------
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

// Shared content blocks + 3D viewer, re-exported so bodies have one import.
export * from '../../../components/content/Prose';
export { default as Model3DViewer } from '../../../components/Model3DViewer';

/** Key/value spec sheet. */
export function SpecTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <div className="my-8 max-w-2xl border border-gray-800 divide-y divide-gray-800">
      {rows.map((row) => (
        <div key={row.k} className="grid grid-cols-3 gap-2 px-4 py-3">
          <dt className="col-span-1 text-[11px] font-mono tracking-widest uppercase text-gray-500 self-center">
            {row.k}
          </dt>
          <dd className="col-span-2 text-sm text-gray-200">{row.v}</dd>
        </div>
      ))}
    </div>
  );
}

export interface Resource {
  label: string;
  href: string;
  /** Small note shown under the label, e.g. 'PDF · roadbook holder'. */
  note?: string;
}

/** A list of outbound links to references, downloads, tools, etc. */
export function ResourceList({ items }: { items: Resource[] }) {
  return (
    <div className="my-8 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((r) => (
        <a
          key={r.href + r.label}
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between gap-3 border border-gray-800 p-4 hover:border-nasared hover:bg-nasared/5 transition-colors"
        >
          <span>
            <span className="block text-sm font-semibold text-white group-hover:text-nasared transition-colors">
              {r.label}
            </span>
            {r.note && (
              <span className="block text-[11px] font-mono text-gray-500 mt-1">
                {r.note}
              </span>
            )}
          </span>
          <ArrowUpRightIcon className="w-4 h-4 shrink-0 text-gray-600 group-hover:text-nasared transition-colors" />
        </a>
      ))}
    </div>
  );
}
