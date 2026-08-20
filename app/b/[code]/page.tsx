import { supabase } from "@/lib/supabase";

export default async function BallPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const { data: ball, error } = await supabase
    .from("balls")
    .select("*")
    .eq("code", code)
    .single();

  if (error || !ball) {
    return <main>Ball not found.</main>;
  }

  return (
    <main>
      <h1>{ball.name}</h1>
      <p>Code: {ball.code}</p>
      <p>Status: {ball.status}</p>
      <p>Expires: {ball.expires_at}</p>
    </main>
  );
}
