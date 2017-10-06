if(window.location.pathname.indexOf("/sites/default/files/")>-1)
{
	window.location	=	"http://uudaicanhan.vpbank.com.vn/uu-dai-the-tin-dung-stepup"+window.location.hash;
}
var cur_page	=	target = window.location.hash;
if (cur_page=="#dang-ky-thanh-cong")
{
	$('#dang-ky-thanh-cong').modal({
	  closeExisting: false
	});
}
/*
var pages = ["#trang-chu", "#chi-tiet-uu-dai", "#dac-quyen-the-stepup", "#dang-ky"];

if(window.location.pathname.indexOf("/sites/default/files/")>-1)
{
	window.location	=	"http://uudaicanhan.vpbank.com.vn/uu-dai-the-tin-dung-stepup"+window.location.hash;
}
function arrow_status()	
{
	if(pages.indexOf(cur_page)==0)
	{
		$("#pre_btn").hide();
	}
	else
	{
		$("#pre_btn").show();
	}
	if(pages.indexOf(cur_page)==3)
	{
		$("#next_btn").hide();
	}
	else{
		$("#next_btn").show();
	}
	
}

function active_page(target)
{
	if(target=="#san-pham")
		reset_sanpham();
	$('div.pageslide').each(function () {
		$(this).removeClass('active');
	});
	$('div'+target).addClass("active");
	
	
	$("a").removeClass('active');
	$("a[href^="+target+"]").addClass('active');
	
	cur_page	=	target;
	arrow_status();
}
function active_sanpham(target)
{
	reset_sanpham();
	
	$("#sp_list").prepend('<div id="sp_list_prepended_col" class="col span_2_of_12"></div>');
	$("#sp_list").append('<div id="sp_list_appended_col" class="col span_1_of_12"><span class="close_content wow rotateIn animate" data-wow-duration="0.4s"></span></div>');
	$("#sp_list .col_img").addClass("hidden");		
	$("#sp_list "+target+"_col").removeClass("span_4_of_12");
	$("#sp_list "+target+"_col").addClass("span_3_of_12");
	$("#sp_list "+target+"_col").removeClass("hidden");		
	$("#sp_list "+target+"_content").removeClass("hidden");		
	
	$('.close_content').click(function () {
			reset_sanpham();
	});
	
}
function reset_sanpham()
{
	$("#sp_list_prepended_col").remove();
	$("#sp_list_appended_col").remove();
	$("#sp_list .col_img").removeClass("hidden");
	$("#sp_list .col_img").removeClass("span_3_of_12");
	$("#sp_list .col_img").addClass("span_4_of_12");
	$("#sp_list .sp_content").addClass("hidden");
}
*/
jQuery(document).ready(function() {
	new WOW().init();
	
  
  //WOW js code
    new WOW().init();
	/*

	if(window.location.hash) {
		if(target.indexOf("sp_") > -1)
		{
			active_page("#san-pham");
			active_sanpham(target);
		}
		else
		{
			
				
			active_page(target)
		}
	}
	else{
		cur_page	=	"#uu-dai"
	}
	arrow_status();
  */
  //smoothscroll
  //smoothscroll
              $('a[href^="#"]').on('click', function (e) {
                  e.preventDefault();
                  $(document).off("scroll");
                  
                  $('a').each(function () {
                      $(this).removeClass('active');
                  })
                  $(this).addClass('active');
                
                  var target = this.hash,
                      menu = target;
                  $target = $(target);
                  $('html, body').stop().animate({
                      'scrollTop': $target.offset().top+2
                  }, 500, 'swing', function () {
                      window.location.hash = target;
                      $(document).on("scroll", onScroll);
                  });
              });
			  
			  function onScroll(event){
              var scrollPos = $(document).scrollTop();
              $('#mainmenu>li>a').each(function () {
                  var currLink = $(this);
                  var refElement = $(currLink.attr("href"));
                  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                      $('#mainmenu>li>a').removeClass("active");
                      currLink.addClass("active");
                  }
                  else{
                      currLink.removeClass("active");
                  }
              });
          }
	
	jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 10) {
          jQuery("#header").css({"padding": "5px 0",});
          //jQuery("div.logo img").css({"height": "50px",});
        }
        else{
          jQuery("#header").css({"padding": "15px 0",});
          //jQuery("div.logo img").css({"height": "62px",});
          
        }
     });


	
	$("#webform-client-form-244").submit(function(){
		var isFormValid = true;

		$("input.required,select.required").each(function(){
			if ($.trim($(this).val()).length == 0){
				$(this).addClass("error");
				isFormValid = false;
			}
			else{
				$(this).removeClass("error");
			}
		});

		if (!isFormValid) alert("Vui lòng điền đầy đủ các thông tin");

		return isFormValid;
	});
	
	jQuery("#edit-captcha-response").attr("required","required");
	if(jQuery( "#webform-client-form-382 input" ).hasClass( "error" ))
	{
		window.location.hash = "#dang-ky-mo-the";
	}
	if(jQuery( "#edit-submitted-ho-va-ten" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Vui lòng nhập họ tên</div>").insertAfter("#edit-submitted-ho-va-ten");}
	if(jQuery( "#edit-submitted-dien-thoai-lien-lac" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Số điện thoại sai hoặc đã được đăng ký tại VPBank</div>").insertAfter("#edit-submitted-dien-thoai-lien-lac");}
	if(jQuery( "#edit-submitted-email" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Email sai hoặc đã được đăng ký tại VPBank</div>").insertAfter("#edit-submitted-email");}
	if(jQuery( "#edit-submitted-tinh-thanh-pho" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Vui lòng chọn</div>").insertAfter("#edit-submitted-tinh-thanh-pho");}
	if(jQuery( "#edit-submitted-quan-huyen" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Vui lòng nhập</div>").insertAfter("#edit-submitted-quan-huyen");}
	if(jQuery( "#edit-submitted-thu-nhap" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Vui lòng chọn</div>").insertAfter("#edit-submitted-thu-nhap");}
	if(jQuery( "#edit-captcha-response" ).hasClass( "error" ))
	{jQuery("<div class='error_msg'>Bạn cần nhập đúng câu hỏi bảo vệ</div>").insertAfter("#edit-captcha-response");}

});