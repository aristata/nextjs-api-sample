import {useQuery} from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {

  const { data } = useQuery(["/api/hello"], () => callApi())

  const callApi = async () => {
    return await (await fetch("/api/hello")).json()
  }


  return (
    <>
      <h1>Hello {data?.name}</h1>
      <Image alt={"poster"} src={`http://image.tmdb.org/t/p/w500/${data?.profile_path}`} />
    </>
  )
}
