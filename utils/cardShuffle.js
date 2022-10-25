const mainData = [
  { id: 1, actId: "egg-1", show: false, sort: Math.random() },
  { id: 2, actId: "egg-1", show: false, sort: Math.random() },
  { id: 3, actId: "egg-2", show: false, sort: Math.random() },
  { id: 4, actId: "egg-2", show: false, sort: Math.random() },
  { id: 5, actId: "egg-3", show: false, sort: Math.random() },
  { id: 6, actId: "egg-3", show: false, sort: Math.random() },
  { id: 7, actId: "egg-4", show: false, sort: Math.random() },
  { id: 8, actId: "egg-4", show: false, sort: Math.random() },
  { id: 9, actId: "egg-5", show: false, sort: Math.random() },
  { id: 10, actId: "egg-5", show: false, sort: Math.random() },
  { id: 11, actId: "egg-6", show: false, sort: Math.random() },
  { id: 12, actId: "egg-6", show: false, sort: Math.random() },
  { id: 13, actId: "egg-7", show: false, sort: Math.random() },
  { id: 14, actId: "egg-7", show: false, sort: Math.random() },
  { id: 15, actId: "egg-8", show: false, sort: Math.random() },
  { id: 16, actId: "egg-8", show: false, sort: Math.random() },
  { id: 17, actId: "egg-9", show: false, sort: Math.random() },
  { id: 18, actId: "egg-9", show: false, sort: Math.random() },
  { id: 19, actId: "egg-10", show: false, sort: Math.random() },
  { id: 20, actId: "egg-10", show: false, sort: Math.random() },
  { id: 21, actId: "egg-11", show: false, sort: Math.random() },
  { id: 22, actId: "egg-11", show: false, sort: Math.random() },
  { id: 23, actId: "egg-12", show: false, sort: Math.random() },
  { id: 24, actId: "egg-12", show: false, sort: Math.random() },
]

export default function shuffle() {
  return mainData.sort((a, b) => a.sort - b.sort)
}
