import { NewDiaryEntry } from './types'

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const parseComment = (comment: any): string => {
  if (!isString(comment)) throw new Error('Invalid comment')

  return comment
}

const parseDate = (date: any): string => {
  if (!isDate(date)) throw new Error('Invalid date')

  return date
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date)
  }

  return newEntry
}

export default toNewDiaryEntry
