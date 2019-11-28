export interface TableListItem {
  key: number;
  disabled?: boolean;
  grade: string;
  name: string;
  target: string;
  count: number;
  date: Date;
  desc: string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  sorter: string;
  status: string;
  name: string;
  pageSize: number;
  currentPage: number;
}
