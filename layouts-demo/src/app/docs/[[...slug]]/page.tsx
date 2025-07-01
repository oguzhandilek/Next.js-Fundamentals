import { log } from "console";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug = [] } = await params;
  let result;
  if (slug.length === 2) {
    result = ` Viewing docs for feature ${slug[0]} and concept ${slug[1]}`;
  } else if (slug.length === 1) {
    result = `Vieving  docs for feature ${slug[0]}`;
  }
  return (
    <>
      {result ?? (
        <div>
          <h1>Docs Home Page</h1>
          <ul>
            <li>
              <strong>Feature 1</strong>
              <ul>
                <li>Concept 1</li>
                <li>Concept 2</li>
                <li>Concept 3</li>
              </ul>
            </li>
            <li>
              <strong>Fetaure 2</strong>
              <ul>
                <li>Concept 1</li>
                <li>Concept 2</li>
                <li>Concept 3</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
