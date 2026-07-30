// src/pages/blogs/components/BlogBlocks.tsx
// -----------------------------------------------------------------------------
// Blog posts compose their content from these building blocks. The actual
// implementations now live in the shared content module so other sections
// (e.g. POLVO LAB project pages) can reuse them. This file just re-exports them
// so existing imports keep working:
//
//   import { Lead, H2, P, Figure, Gallery, VideoEmbed, Quote, Callout, Divider }
//     from '../components/BlogBlocks';
// -----------------------------------------------------------------------------
export * from '../../../components/content/Prose';
