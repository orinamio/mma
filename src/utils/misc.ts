export function sortArrayByKey<List, SortKey>(
  list: List[],
  sortKey: SortKey
): List[] {
  return list.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
}
