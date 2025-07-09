import "jsr:@supabase/functions-js/edge-runtime.d.ts"

console.log("Hello from Functions!")

// @ts-ignore
Deno.serve(async (req) => {
  return new Response('pong', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
})

