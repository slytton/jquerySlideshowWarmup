var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];


$(function(){
  $('.slider').html('<img src="'+pictureArr.shift()+'">').css({'background-color': 'black', 'display':'flex', 'align-items':'center'});
  $('img').css('width', 'inherit');
  console.log(pictureArr);

  $('.fa-arrow-circle-o-right').on('click', function(){
    pictureArr.push($('img').prop('src'));
    $('img').prop('src', pictureArr.shift());
  })

  $('.fa-arrow-circle-o-left').on('click', function(){
    pictureArr.unshift($('img').prop('src'));
    $('img').prop('src', pictureArr.pop());
  })
})
