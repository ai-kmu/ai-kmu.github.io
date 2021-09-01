/* modal */
const modal = document.getElementById("modal")
const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {modal.style.display = "flex"})

/* 모달창의 클로즈(x) 버튼을 누르면 모달창이 꺼지게 하기 */

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {modal.style.display = "none"})

/* 모달창 바깥 영역을 클릭하면 모달창이 꺼지게 하기 */
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modal.style.display = "none"
    }
})

window.addEventListener("keyup", e => {
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
    }
})

/* 모달창이 현재 스크롤 위치에 뜨도록 하기*/
$('#btn-modal').click(function() {

    $('.ly_bg').show();

    // 마우스 위치에 팝업 나오기
    $('#modal').css({

        "top": (($(window).height() - $("#modal").outerHeight()) / 2 + $(window).scrollTop()) + "px"
        //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정

    }).show();

});

/* 모달 활성화시 스크롤 방지*/
$("#modal").on("show", function () {
    $("body").addClass("modal-open");
}).on("hidden", function () {
    $("body").removeClass("modal-open")
});