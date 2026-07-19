/**
 * JSON-LD renderer.
 *
 * Renders structured data as an application/ld+json script tag.
 * Data always originates from our own typed content files - never from
 * user input - so serialization here is safe.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
