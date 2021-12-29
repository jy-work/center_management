$(document).ready(function(){

    // 테이블 선택 시, on 클래스 추가하여 선택 표시
    const tableRow = $("table tr");

    tableRow.click(function(){
        $(this).addClass("on");
        tableRow.not($(this)).removeClass("on");
    })

    // 페이지네이션 선택 시, on 클래스 추가하여 선택 표시
    const pageLink = $(".pagenation .pages .link");

    pageLink.click(function(){
        $(this).addClass("on");
        pageLink.not($(this)).removeClass("on");
    })

    // 파일 추가 시, 파일 경로 출력
    var fileName = $("#file").val();
    $(".wrap_uio #file").on("change",function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split("/").pop().split("\\").pop();
        }
        $(this).siblings(".file_name").text(filename).css("color", "#333");
    });
 });