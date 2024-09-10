import { useQueries, useQuery } from "@tanstack/react-query"
import { getTodo, getTodosIds } from "./api"

export function useTodosIds() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds,
    })
}
// Returning multiple queries
export function useTodos(ids: (number | undefined)[] | undefined) {
    return useQueries({
        queries: (ids ?? []).map((id) => {
            return {
                queryKey: ["todos", id],
                queryFn: () => getTodo(id!),
            }
        })
    })
}