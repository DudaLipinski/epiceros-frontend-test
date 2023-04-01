import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as teamServices from '../services/team'
import { Team, Employee } from '../types/team'

const TEAM_KEY = 'team'
export const useTeam = () => {
  const teamQuery = useQuery({
    queryKey: [TEAM_KEY],
    queryFn: teamServices.getTeam,
    staleTime: Infinity,
  })

  return teamQuery
}

export const useEmployeeCreation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (employee: Employee) => {
      return teamServices.createEmployee(employee)
    },
    onMutate: (data) => {
      queryClient.setQueryData([TEAM_KEY], (old: Team | undefined) =>
        old ? [...old, data] : [data]
      )
    },
    // onSettled: (data) => {
    //   queryClient.invalidateQueries({ queryKey: [TEAM_KEY] })
    // },
  })
}
