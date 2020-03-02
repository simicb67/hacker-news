export const timeAgo = (t) => {

  const d = new Date()
  const nowTs = Math.floor(d.getTime () / 1000)
  const s = nowTs - t

  if (s > 2 * 24 * 3600) {
   return 'a few days ago'
  }
  
  if (s > 24 * 3600) {
   return 'yesterday'
  }

  if (s > 3600) {
   return 'a few hours ago'
  }

  if (s > 1800) {
   return 'Half an hour ago'
  }

  if (s > 60) {
   const span = Math.floor(s / 60)

   return `${span} ${span === 1 ? 'minute' : 'minutes'}` 
  }
}