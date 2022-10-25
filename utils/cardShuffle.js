const mainData = [
  { id: 1, actId: "egg-1", show: false },
  { id: 2, actId: "egg-1", show: false },
  { id: 3, actId: "egg-2", show: false },
  { id: 4, actId: "egg-2", show: false },
  { id: 5, actId: "egg-3", show: false },
  { id: 6, actId: "egg-3", show: false },
  { id: 7, actId: "egg-4", show: false },
  { id: 8, actId: "egg-4", show: false },
  { id: 9, actId: "egg-5", show: false },
  { id: 10, actId: "egg-5", show: false },
  { id: 11, actId: "egg-6", show: false },
  { id: 12, actId: "egg-6", show: false },
  { id: 13, actId: "egg-7", show: false },
  { id: 14, actId: "egg-7", show: false },
  { id: 15, actId: "egg-8", show: false },
  { id: 16, actId: "egg-8", show: false },
  { id: 17, actId: "egg-9", show: false },
  { id: 18, actId: "egg-9", show: false },
  { id: 19, actId: "egg-10", show: false },
  { id: 20, actId: "egg-10", show: false },
  { id: 21, actId: "egg-11", show: false },
  { id: 22, actId: "egg-11", show: false },
  { id: 23, actId: "egg-12", show: false },
  { id: 24, actId: "egg-12", show: false },
]

export default function shuffle() {
  return mainData
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
