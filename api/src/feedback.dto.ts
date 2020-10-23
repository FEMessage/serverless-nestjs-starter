export interface FeedbackDto {
  id: number,
  type: string,
  status: string,
  content: string,
  note: string,
  user_email: string,
  repo_name: string,
  created_by: string,
}