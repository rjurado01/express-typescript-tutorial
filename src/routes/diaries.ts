import express from 'express'
import * as diaryServices from '../services/diariesService'
import toNewDiaryEntry from '../utils'

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
  const newDiaryEntry = toNewDiaryEntry(req.body)

  const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

  res.send(addedDiaryEntry)
})

export default router
