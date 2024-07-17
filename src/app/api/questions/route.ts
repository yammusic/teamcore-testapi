import { NextResponse } from "next/server";
import { getQuestions } from "@/infra/services/questions";

export async function GET(req: Request) {
  const res = NextResponse

  try {
    const {date, data} = await getQuestions()
    const info = data.map((q: any) => ({
      pregunta_id: q.question_id,
      pregunta: q.question,
    }))

    return res.json({
      titulo: "Questions API",
      dia: date,
      info,
      api_version: 1,
    })
  } catch (error) {
    console.log(error)
    return res.json({ error }, { status: 500 })
  }

}