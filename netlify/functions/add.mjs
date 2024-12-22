export default async (req) => {
    const params = new URL(req.url).searchParams;
    const x = +params.get("x");
    const y = +params.get("y");
    const data = {
      z: x + y,
    };
    return new Response(JSON.stringify(data));
  };