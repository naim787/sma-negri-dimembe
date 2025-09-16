import { DesDat} from "$lib/utils/c";
import { json } from "@sveltejs/kit";

export function GET() {
   let data = DesDat("f545d873d98301bd2f33952d3aff3a8e10bb4b9afacfc3620ef8cf534483119f", "123")
    return json({message : data});
}


// f545d873d98301bd2f33952d3aff3a8e10bb4b9afacfc3620ef8cf534483119f