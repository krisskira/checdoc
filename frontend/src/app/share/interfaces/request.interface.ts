
export interface PaginationRequestBody {
  limit?: number;
  offset?: number;
}

export interface PaginationRequestResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export interface FormDataImage {
  uri: string;
  fileName: string;
}
