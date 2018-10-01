import Api from '@/services/Api'

export default{
  fetchCats () {
    return Api().get('cats')
  },
  fetchSurveyResults () {
    return Api().get('survey')
  }
}
