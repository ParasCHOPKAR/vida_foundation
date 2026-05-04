export default function ProgramDetailsPage({ params }: { params: { slug: string } }) {
  return (
    <main className="pt-32 min-h-screen text-center">
      <h1>Program Slug: {params.slug}</h1>
      <p>This page is under construction.</p>
    </main>
  );
}