import {affectivesValues} from './cognitiveTest'
export function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export const findLabel = neddle => (values, i) => pst => 
  Object.keys(values[i])
    .filter(k => Array.isArray(values[i][k]))
    .filter(k => values[i][k][pst])
    .map(bftk => neddle
      .filter(cgnVl => cgnVl.key === bftk)
      .map(obj => obj.label)
    )

export const findAffective = neddle => (values, i) => pst => 
  Object.keys(values[i])
    .filter(k => k!=='_id')
    .map(bftk => affectivesValues
      .filter(cgnVl => cgnVl.key === bftk)
      .map(obj => obj.label)
    )