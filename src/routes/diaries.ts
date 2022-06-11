import express from 'express'
import * as diaryServices from '../services/diariesService'
import toNewDiaryEntry from '../utils'

const getErrorMessage = (error: unknown): String => {
  if (error instanceof Error) return error.message
  return String(error)
}

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.send(addedDiaryEntry)
  } catch (error) {
    res.status(400).send(getErrorMessage(error))
  }
})

export default router
