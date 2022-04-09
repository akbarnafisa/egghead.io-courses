interface IComment {
  date: Date
  message: string
}

interface IDataService {
  getData(): unknown;
}

let service: IDataService

const response =  service.getData()
response.a.b.c

if (typeof response === 'string') {
  console.log(response.toUpperCase());
} else if (isComment(response)) {
  response.date
} else {
  const numbers = response as number[]
  numbers.indexOf(1)
}

function isComment(type: any): type is IComment {
  return (type as IComment).message !== undefined
}