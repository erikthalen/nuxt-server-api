export default defineEventHandler(event => {
  const query = getQuery(event)

  return $fetch('http://' + query.url)
})
