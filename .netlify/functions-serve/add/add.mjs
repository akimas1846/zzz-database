
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/add.mjs
var add_default = async (req) => {
  const params = new URL(req.url).searchParams;
  const x = +params.get("x");
  const y = +params.get("y");
  const data = {
    z: x + y
  };
  return new Response(JSON.stringify(data));
};
export {
  add_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvYWRkLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSkgPT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTChyZXEudXJsKS5zZWFyY2hQYXJhbXM7XHJcbiAgICBjb25zdCB4ID0gK3BhcmFtcy5nZXQoXCJ4XCIpO1xyXG4gICAgY29uc3QgeSA9ICtwYXJhbXMuZ2V0KFwieVwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHo6IHggKyB5LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBLElBQU8sY0FBUSxPQUFPLFFBQVE7QUFDMUIsUUFBTSxTQUFTLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNoQyxRQUFNLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRztBQUN6QixRQUFNLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRztBQUN6QixRQUFNLE9BQU87QUFBQSxJQUNYLEdBQUcsSUFBSTtBQUFBLEVBQ1Q7QUFDQSxTQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsSUFBSSxDQUFDO0FBQzFDOyIsCiAgIm5hbWVzIjogW10KfQo=
