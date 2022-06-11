import { NewDiaryEntry, Weather, Visibility } from './types'

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseComment = (comment: any): string => {
  if (!isString(comment)) throw new Error('Invalid comment')

  return comment
}

const parseDate = (date: any): string => {
  if (!isDate(date)) throw new Error('Invalid date')

  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isWeather(weather)) throw new Error('Invalid weather')

  return weather
}

const parseVisibility = (visibility: any): Visibility => {
  if (!isVisibility(visibility)) throw new Error('Invalid visibility')

  return visibility
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
