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
  desc: string;
  name: string;
  description: string;
  value: string;
  date: Date;
  comments: string;

}

export interface TableData {
  key: number;
  name: string;
  description: string;
  value: string;


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

export interface TableListParamsDt {
  code: string[];
}
