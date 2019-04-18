import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  posts () {
    return axios.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
  projects () {
    return axios.get(`${this.apiBase}/wp/v2/projects`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { projects: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
}
//Lägg in URL till där ni har wordpressinstallationen inlagd. exempelvis http://localhost:8888/api-wp eller en faktisk domän
const wp = new WpApi('http://localhost:8888/api-wp')

export default wp