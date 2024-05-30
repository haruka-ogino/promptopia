export async function GET(request: Request) {
  const users = [
    { id: 1, post: 'My cat is sick :(' },
    { id: 2, post: 'My cat is starting to look better :D' },
    { id: 3, post: 'My cat is happy <3' },
  ]

  return new Response(JSON.stringify(users))
}
