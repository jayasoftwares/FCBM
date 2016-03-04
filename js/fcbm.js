// JScript File
$(function () {


	var lastpageid = $('.BookPages > div.Page:last').attr('id');

    //Setting Accordian for menu
    $('#accordion').accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    
    //Disabling icon for Declaration format
    $('ul#accordion > li > a[href = "#' + lastpageid + '"] > span').attr('class', '')

    //Hiding all the pages
    $('.Page').hide();

    $('.Page#0').show();
    
    ShowPDFWordfileOptions(0);
    
    //Hiding Link to Prev Page
    $('a#PrevPage').hide();

    //Click event for next Button
    $('a#NextPage').click(

    function () {

        //Fetching the displayed Page
        var CurrentPage = parseInt($('.Page:visible').attr("id"));

        //Hiding current page
        $('.Page#' + CurrentPage).hide();

        //Showing Next Page
        $('.Page#' + (CurrentPage + 1)).show();
        
		//Setting scroll position to top
		$('.Page#' + (CurrentPage + 1) + ' .Page-content').scrollTop(0);
		
        //If the page displayed is last page then hiding next button
		
        if (parseInt($('.Page:visible').attr("id")) == lastpageid ) {
			$('a#NextPage').hide();
        }

        //Showing Previous Page Link
        $('a#PrevPage').show();
        
        
       ShowPDFWordfileOptions(CurrentPage + 1);


    });

    //Click event for Prev Button
    $('a#PrevPage').click(

    function () {

        //Fetching the displayed Page
        var CurrentPage = parseInt($('.Page:visible').attr("id"));

        //Hiding current page
        $('.Page#' + CurrentPage).hide();

        //Showing Previous Page
        $('.Page#' + (CurrentPage - 1)).show();
		
		//Setting content scroll position to top
		$('.Page#' + (CurrentPage - 1) + ' .Page-content').scrollTop(0);

        //If the page displayed is first page then hiding prev button
        if (parseInt($('.Page:visible').attr("id")) === parseInt($('.Page:first').attr("id"))) {
            $('a#PrevPage').hide();
        }

        //Showing Previous Page Link
        $('a#NextPage').show();
        
         ShowPDFWordfileOptions(CurrentPage - 1);


    });


});

 function SetClickeventforPageLink(event) {

              //Fetching Page to be linked
              var NewPage = parseInt($(this).attr('href').slice(1));
              var CurrentPage = parseInt($('.Page:visible').attr("id"));
              
              $('.BookPages').show();
              $('.disclaimer-pages').hide();
              
              
              $('#search_result_display').hide();

              //If pages are same then doing nothing
              if (NewPage === CurrentPage) {
                  return;
              }

              //Now hiding all Pages
              $('.Page').hide();

              //Showing the new Page
              $('.Page#' + NewPage).show();
              
			  //Setting content scroll position to top
              $('.Page#' + NewPage + ' .Page-content').scrollTop(0);

             
              $('body').scrollTop(0);

              
              ShowPDFWordfileOptions(NewPage);
              
              //If the page displayed is first page then hiding prev button
              if (parseInt($('.Page:visible').attr("id")) === parseInt($('.Page:first').attr("id"))) {
                  $('a#PrevPage').hide();
                  $('a#NextPage').show();
              }

              //If the page displayed is last page then hiding next button
              else if (parseInt($('.Page:visible').attr("id")) === 30) {
                  $('a#PrevPage').show();
                  $('a#NextPage').hide();
              }
              //Else displaying both Previous and next button
              else {
                  $('a#PrevPage').show();
                  $('a#NextPage').show();
              }

              event.preventDefault();

          }
          
          function ShowPDFWordfileOptions(NewPage) {
			  
			 
			 
          
          //Showing link to download pdf file
              if($('.Page#' + NewPage + ' a.pdf-link' ).attr('href') !== "javascript:void(0)") {
              $('.Page#' + NewPage + ' a.pdf-link' ).show();
              }
              else {
              
              $('.Page#' + NewPage + ' a.pdf-link' ).hide();
              }
              
              //Showing link to download doc file
              if($('.Page#' + NewPage + ' a.doc-link' ).attr('href') !== "javascript:void(0)") {
              $('.Page#' + NewPage + ' a.doc-link' ).show();
              }
              else {
              
              $('.Page#' + NewPage + ' a.doc-link' ).hide();
              }
              
              if($('.Page#' + NewPage + ' a.doc-link' ).css('display') == 'none' && $('.Page#' + NewPage + ' a.pdf-link' ).css('display') == 'none')
              {
                $('span.DownloadText').hide();
              }
              else {
              
              $('span.DownloadText').show();
              }
			  
			  // Hiding next link when clicked on last page
			   if (parseInt($('.Page#' + NewPage).attr("id")) == 33) {
			$('a#NextPage').hide();
        }
              
              return;
          
          }