$(document).ready(function () {
  // 1. Trigger Fade-In Section & Tombol Back to Top saat Scroll
    function checkScroll() {
        let bottomOfWindow = $(window).scrollTop() + $(window).height();

        $("section").each(function () {
        let topOfObject = $(this).offset().top;
        if (bottomOfWindow > topOfObject + 80) {
            $(this).addClass("is-visible");
        }
        });

        // Tampilkan / Sembunyikan Tombol Back to Top dengan tampilan Flexbox
        if ($(window).scrollTop() > 300) {
        $("#backToTop").css("display", "flex").fadeIn();
        } else {
        $("#backToTop").fadeOut();
        }
    }

    // Jalankan saat pertama kali dimuat & saat discroll
    checkScroll();
    $(window).on("scroll", checkScroll);

    // 2. Smooth Scroll ke Atas
    $("#backToTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

    // 3. Hover Animation untuk Cards
    $(".card").hover(
        function () {
        $(this).addClass("card-hover-active");
        },
        function () {
        $(this).removeClass("card-hover-active");
        }
    );

    // 4. Live Search
    $('form[role="search"]').on("submit", function (e) {
        e.preventDefault();
        let value = $(this).find('input[type="search"]').val().toLowerCase();

        $(".card").each(function () {
        let cardText = $(this).text().toLowerCase();
        if (cardText.indexOf(value) > -1) {
            $(this).parent().fadeIn(300);
        } else {
            $(this).parent().fadeOut(300);
        }
        });
    });

    $('input[type="search"]').on("keyup", function () {
        if ($(this).val() === "") {
        $(".card").parent().fadeIn(300);
        }
    });
});