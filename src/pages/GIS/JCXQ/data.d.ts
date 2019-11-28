// export interface TableListItem {
//   key: number;
//   disabled?: boolean;
//   href: string;
//   avatar: string;
//   name: string;
//   title: string;
//   owner: string;
//   desc: string;
//   callNo: number;
//   status: number;
//   updatedAt: Date;
//   createdAt: Date;
//   progress: number;
// }
export interface TableListItem {
  key: number;
  disabled?: boolean;
  place: string;
  name: string;
  pumpName: string;
  description: string;
  desc: string;
  value: string;
  date: Date;
  type: string;
  comments: string;
  code: string;
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
