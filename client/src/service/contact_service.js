import httpClient from './http_client'

class ContactMe {
  constructor(httpClient) {
    this.contactme = httpClient
  }

  contact = async (data) => {
    const params = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    const res = await this.contactme.post('contact', params)

    return res
  }

  test = async () => {
    return await this.contactme.get('/test')
  }
}
const contactMeService = new ContactMe(httpClient)
export default contactMeService
