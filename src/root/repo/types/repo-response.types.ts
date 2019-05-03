import { Repo } from '../../repo/types/repo.types';

export class RepoResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repo;
}
