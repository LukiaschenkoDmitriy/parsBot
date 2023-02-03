import cheerio, { Cheerio, CheerioAPI } from "cheerio";
import axios from "axios";

export async function getSiteContent(url: string, options: [string]) : Promise<{[option: string]: Cheerio<any>}>
{
    let content: {[option: string]: Cheerio<any>} = {};
    await axios.get(url).then(res => {
        let $: CheerioAPI = cheerio.load(res.data);
        options.forEach((option: string) => {
            content[option] = $(option);
        })
    });
    return await content;
};