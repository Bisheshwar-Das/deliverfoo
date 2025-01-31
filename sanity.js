import {createClient} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = createClient({
    projectId:'wk3m91bj',
    dataset:'production',
    useCdn:true,
    apiVersion:'2022-03-07',
});
const builder= imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);

export default client



// sanity cors add https://localhost:3000  *Run this to add exception for local host 3000 CROS policy
//or goto sanity project section, to APi, and in CORS origins, add your local host