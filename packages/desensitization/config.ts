function getType (type: string) {
  switch (type) {
    case 'idCard':
      return [4, 3]
    case 'phone':
      return [3, 2]
    case 'number':
      return [2, 2]
    case 'password':
      return [0, -99]
    default:
      return [0, -99]
  }
}

export { getType }
