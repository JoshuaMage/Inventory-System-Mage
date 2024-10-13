export async function handleHttpError({ error, request }) {
    if (request.path === '/favicon.ico') {
      return new Response(null, { status: 204 }); // No Content
    }
    throw error; // rethrow for other errors
  }
  