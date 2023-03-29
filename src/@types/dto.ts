export interface TaskInputDTO {
  title: string
  description?: string
  done?: boolean
}

export interface TaskOutputDTO {
  id: string
  title: string
  description: string
  done: boolean
}
