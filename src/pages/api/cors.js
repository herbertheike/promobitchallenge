import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .get((req, res) => {
    res.send(console.log(res));
    
  });

export default handler;