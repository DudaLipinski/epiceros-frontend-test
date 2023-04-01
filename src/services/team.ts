import axios from 'axios'
import { Team, Employee } from '../types/team'
import { SERVER_URL } from '../constants'

export const getTeam = (): Promise<Team> =>
  axios
    .get(SERVER_URL)
    .then((response) => {
      const team = response.data.team.map((item: string) => {
        return {
          name: item,
        }
      })

      return team
    })
    .catch((err) => {
      if (err.response.status !== 200) {
        throw new Error('An error ocurred')
      }
    })

export const createEmployee = async (employee: Employee): Promise<Employee> =>
  employee

// axios.post('/employees', employee).then((response) => {
//   return response.data
// })
