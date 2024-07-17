import axios from "axios"
import { API_URL, AUTH_TOKEN } from "@/domain/constants/app"

export const getQuestions = async () => {
  const url = `${API_URL}/questions`

  const { data } = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
  })

  return data
}