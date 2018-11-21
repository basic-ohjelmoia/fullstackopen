import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'



const getAll = () => {
  const request = axios.get(baseUrl)
   return request.then(response => { return response.data })
//   const nonExisting = {
//     id: 10000,
//     name: 'Tätä muistiinpanoa ei ole palvelimelta',
//     number: '12345'
//   }
//   return request.then(response => response.data.concat(nonExisting))
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id, delObject) => {
    console.log(id,delObject)
    const request = axios.delete(`${baseUrl}/${id}`, delObject)
    return request.then(response => response.data)
  }

export default { getAll, create, update , remove }