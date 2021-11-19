import $ from "jquery";
window.jQuery = $;
window.$ = $;

require("../css/main.scss");
require("foundation-sites/dist/js/foundation");

const openExternalLinksNewBrowserTab = () => {
  const isExternal = new RegExp("^(?:[a-z]+:)?//", "i");
  $("a.reference").each(function () {
    $(this).removeClass("internal external");

    if (isExternal.test($(this).attr("href"))) {
      $(this).addClass("external");
      $(this).attr("target", "_blank");
    } else {
      $(this).addClass("internal");
    }
  });
};

const createResponsiveTables = () => {
  const tables = $("table.docutils");
  tables.wrap("<div class='table-wrapper'></div>");

  tables.each(function () {
    if ($(this).find("thead tr").length > 1) {
      $(this).addClass("thead-border");
    }
  });
};

const createEnlargeImagesButtons = () => {
  $(".content img[width]").each(function () {
    // Update parent css
    const reveal_id = (Math.random() + 1).toString(36).substring(7);
    $(this).wrap(
      `<span class="enlarge-image"  data-open="` + reveal_id + `"></div>`
    );
    // Add image reveal
    const image_reveal =
      `
      <div class="reveal enlarge-image-reveal" id="` +
      reveal_id +
      `" data-reveal>
        <img src="` +
      $(this).attr("src") +
      `" data-close aria-label="Close modal">
      </div>
    `;
    $(this).after(image_reveal);
  });
  $(".content a.image-reference").click(function (event) {
    if ($(this).children(".enlarge-image").length > 0) {
      event.preventDefault();
    }
  });
};

const onScrollHighlightSecondarySidebar = () => {
  const sections = $(".content").find("h2").parent();
  const headerHeight = 80;
  const offset = 20;

  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    sections.each(function () {
      const sectionPosition = $(this).offset().top;
      if (sectionPosition - headerHeight - offset < currentScroll) {
        const id = $(this).attr("id");

        $(".secondary-side-nav a").removeClass("current");
        $('.secondary-side-nav a[href="#' + id + '"]').addClass("current");
      }
    });
  });
};

const hideBanner = () => {
  const promoBanner = $(".promo-banner");
  const promoBannerHeight = promoBanner.outerHeight();
  if (promoBanner.length && !localStorage.getItem("scylladocs-hide-banner")) {
    promoBanner.show();
    $("body").css("margin-top", promoBannerHeight);
    $(".side-nav").css("margin-top", promoBannerHeight);
    $(".secondary-side-nav").css("margin-top", promoBannerHeight);
    $(".layout").addClass("layout--has-banner");
  } else {
    promoBanner.hide();
  }
};

const onCloseBanner = () => {
  $(".promo-banner__close").on("click", function () {
    localStorage.setItem("scylladocs-hide-banner", "1");
    $("body").css("margin-top", 0);
    $(".side-nav").css("margin-top", 0);
    $(".secondary-side-nav").css("margin-top", 0);
    $(".promo-banner").hide();
    $(".layout").removeClass("layout--has-banner");
  });
};

const onResizeBanner = () => {
  $(window).resize(function () {
    const promoBanner = $(".promo-banner");
    const promoBannerHeight = promoBanner.outerHeight();
    if (promoBanner.is(":visible")) {
      $("body").css("margin-top", promoBannerHeight);
      $(".side-nav").css("margin-top", promoBannerHeight);
      $(".secondary-side-nav").css("margin-top", promoBannerHeight);
    }
  });
};

$(document).ready(function () {
  createEnlargeImagesButtons();
  $(document).foundation();
  createResponsiveTables();
  hideBanner();
  onCloseBanner();
  onResizeBanner();
  onScrollHighlightSecondarySidebar();
  openExternalLinksNewBrowserTab();
});