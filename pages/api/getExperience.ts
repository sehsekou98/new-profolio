import { Experience } from '../../typings';
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";




const Query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type Data = {
    experiences: Experience[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experiences: Experience[] = await sanityClient.fetch(Query);

    res.status(200).json({ experiences });
}
   
    





