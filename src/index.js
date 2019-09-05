import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
    success: function(data) {
      $('.word-count').append(`The best word is ${Object.keys(data.word)[0]}! That's right, ${Object.keys(data.word)[0]} has a total word count of ${Object.values(data.word)[0]}!`)
    },
    error: function(error) {
      console.log(error)
    }
  })
})
