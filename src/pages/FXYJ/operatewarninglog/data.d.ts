export interface TableListItem {
  key: number;
  disabled?: boolean;
  desc: string;
  name: string;
  // user: string;
  grade: string;
  target: string;
  count: number;
  method: string;
  warningDate: Date;
  operateDate: Date;
  operation: string;
  result: string;
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
