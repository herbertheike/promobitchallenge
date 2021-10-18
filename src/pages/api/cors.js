import nc from "next/connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())

export default handler;