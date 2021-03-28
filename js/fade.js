
var SlideInterval;
var ChangeInterval = 2500;	// 이벤트 발생 주기
var FadeOutTime = 400;		// 페이드 아웃 되는 시간
var FadeInTime = 400;		// 페이드 인 되는 시간
var IMAGE_START_INDEX = 1;
var IMAGE_MAX_LENGTH = 6;
var Index = IMAGE_START_INDEX;

$(document).ready(function(){
	$("ul.thumb li a")
	.mouseover(function(){
		clearInterval(SlideInterval);

		var ID = $(this).attr('id');
		var ImageSrc = "images/" + ID + "_description.jpg";
		var Over = 'images/' + ID + '_thumb_on.png';
		var ImageIndex = ID.substring(9, 10);
		$("#" + ID + " img").attr('src', Over);

		FadeOut(ImageIndex);
	})
	.mouseout(function()
	{
		var ID = $(this).attr('id');
		var Out = 'images/' + ID + '_thumb.png';
		//$("#"+ID+" img").attr('src', Out);

		SlideInterval = setInterval(function(){FadeOut(-1);}, ChangeInterval);
	});
});

function FadeOut(ImageIndex)
{
	if (IMAGE_START_INDEX <= ImageIndex && ImageIndex <= IMAGE_MAX_LENGTH)
	{
		// 만약에 현재 보여주는 이미지와 똑같은 이미지를 보여줘야한다면,
		// 따로 갱신 하지 않는다.
		if (this.Index == ImageIndex) return;

		this.Index = ImageIndex;
	}
	else
	{
		this.Index++;
		if (IMAGE_MAX_LENGTH < this.Index) this.Index = IMAGE_START_INDEX;
	}
		
	var ImageSrc = 'images/character0' + this.Index + '_description.jpg';

	$("div.slider a img").fadeOut(FadeOutTime, function(){
		$("div.slider a img").attr('src', ImageSrc).fadeIn(FadeInTime);
	});
	
	setTimeout(function() 
	{
		for (var idx = IMAGE_START_INDEX; idx <= IMAGE_MAX_LENGTH; idx++)
		{
			var ID = "character0" + idx;

			if (this.Index == idx)	var Src = 'images/' + ID + '_thumb_on.png';
			else					var Src = 'images/' + ID + '_thumb.png';

			$("#" + ID + " img").attr('src', Src);
		}
	}, FadeOutTime);
}

SlideInterval = setInterval(function(){FadeOut(-1);}, ChangeInterval);