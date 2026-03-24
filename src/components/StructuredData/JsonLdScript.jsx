export default function JsonLdScript({ data }) {
  const payload = Array.isArray(data) ? data : [data];

  return payload.map((item, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ));
}
