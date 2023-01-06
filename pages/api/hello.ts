// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Person {
  birthday?: string,
  known_for_department?: string,
  deathday?: string,
  id?: number,
  name?: string,
  also_known_as?: string[],
  gender?: number,
  biography?: string,
  popularity?: number,
  place_of_birth?: string,
  profile_path?: string,
  adult?: boolean,
  imdb_id?: string,
  homepage?: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person>
) {

  const url = `https://api.themoviedb.org/3/person/550?api_key=${process.env.MOVIE_API_KEY}`
  console.log("url", url);
  const result:Person = await (await fetch(url)).json()

  res.status(200).json({...result, name: "Aristata"})
}
