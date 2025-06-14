document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", () => {
    nav.classList.remove("left-[-1000px]");
    nav.classList.add("left-0");
    nav.classList.add("border-r-2");
    nav.classList.add("border-white");
    nav.classList.add("border-solid");
  });

  closeIcon.addEventListener("click", () => {
    nav.classList.remove("left-0");
    nav.classList.add("left-[-1000px]");
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.position = "fixed";
    header.style.left = "0";
    header.style.right = "0";
    header.style.top = "0";
    header.style.zIndex = "99999";
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgb(16, 39, 29, 0.23) 0px 6px 6px";
  } else {
    header.style.position = "";
    header.style.left = "";
    header.style.right = "";
    header.style.top = "";
    header.style.zIndex = "";
    header.style.boxShadow = "";
  }
});

document.querySelectorAll(".accrodind .tilte").forEach(function (title, index) {
  const answer = title.nextElementSibling;
  const icon = title.querySelector(".icon");
  const accordion = title.parentElement;

  if (index === 0) {
    answer.classList.remove("hidden");
    icon.innerHTML = `
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 10.9378C12.6628 10.9378 13.0195 10.9375 12.5 10.9376L13.2001 10.9375H19.2001C19.8628 10.9375 20.4001 11.4748 20.4001 12.1375C20.4001 12.8002 19.8628 13.3375 19.2001 13.3375L13.2001 13.3375H12.5508C11.9414 13.3375 11.6862 13.3375 11.0234 13.3375C10.3607 13.3375 12.5898 13.3375 13.2001 13.3375H10.8001L4.8001 13.3375C4.13736 13.3375 3.6001 12.8002 3.6001 12.1375C3.6001 11.4748 4.13736 10.9375 4.8001 10.9375L10.8001 10.9375H11.0234C12.0234 10.9375 11.3374 10.9378 12.0001 10.9378Z" fill="#00C8E1"/>
</svg>
        `;
    icon.classList.add("open");
    accordion.classList.add(
      "shadow-faq_active_shadow",
      "accrodind_border_gradient",
      "opacity-100"
    );
    accordion.classList.remove(
      "shadow-faq_shadow",
      "border-gary-vlight",
      "opacity-70"
    );
  }

  title.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const icon = this.querySelector(".icon");
    const accordion = this.parentElement;

    document
      .querySelectorAll(".accrodind .tilte")
      .forEach(function (otherTitle) {
        const otherAnswer = otherTitle.nextElementSibling;
        const otherIcon = otherTitle.querySelector(".icon");
        const otherAccordion = otherTitle.parentElement;

        if (otherAnswer !== answer) {
          otherAnswer.classList.add("hidden");
          otherIcon.classList.remove("open");
          otherIcon.innerHTML = `
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3.73779C12.6628 3.73779 13.2001 4.27505 13.2001 4.93779L13.2001 10.9378L19.2001 10.9378C19.8628 10.9378 20.4001 11.4751 20.4001 12.1378C20.4001 12.8005 19.8628 13.3378 19.2001 13.3378H13.2001V19.3378C13.2001 20.0005 12.6628 20.5378 12.0001 20.5378C11.3374 20.5378 10.8001 20.0005 10.8001 19.3378L10.8001 13.3378L4.8001 13.3378C4.13736 13.3378 3.6001 12.8005 3.6001 12.1378C3.6001 11.4751 4.13736 10.9378 4.8001 10.9378L10.8001 10.9378V4.93779C10.8001 4.27505 11.3374 3.73779 12.0001 3.73779Z" fill="#0A0A0A"/>
</svg>
          `;
          otherAccordion.classList.add(
            "shadow-faq_shadow",
            "border-gary-vlight",
            "opacity-70"
          );
          otherAccordion.classList.remove(
            "shadow-faq_active_shadow",
            "accrodind_border_gradient",
            "opacity-100"
          );
        }
      });

    answer.classList.toggle("hidden");

    if (icon.classList.contains("open")) {
      icon.innerHTML = `
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3.73779C12.6628 3.73779 13.2001 4.27505 13.2001 4.93779L13.2001 10.9378L19.2001 10.9378C19.8628 10.9378 20.4001 11.4751 20.4001 12.1378C20.4001 12.8005 19.8628 13.3378 19.2001 13.3378H13.2001V19.3378C13.2001 20.0005 12.6628 20.5378 12.0001 20.5378C11.3374 20.5378 10.8001 20.0005 10.8001 19.3378L10.8001 13.3378L4.8001 13.3378C4.13736 13.3378 3.6001 12.8005 3.6001 12.1378C3.6001 11.4751 4.13736 10.9378 4.8001 10.9378L10.8001 10.9378V4.93779C10.8001 4.27505 11.3374 3.73779 12.0001 3.73779Z" fill="#0A0A0A"/>
</svg>
          `;
      icon.classList.remove("open");
      accordion.classList.add(
        "shadow-faq_shadow",
        "border-gary-vlight",
        "opacity-70"
      );
      accordion.classList.remove(
        "shadow-faq_active_shadow",
        "accrodind_border_gradient",
        "opacity-100"
      );
    } else {
      icon.innerHTML = `
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 10.9378C12.6628 10.9378 13.0195 10.9375 12.5 10.9376L13.2001 10.9375H19.2001C19.8628 10.9375 20.4001 11.4748 20.4001 12.1375C20.4001 12.8002 19.8628 13.3375 19.2001 13.3375L13.2001 13.3375H12.5508C11.9414 13.3375 11.6862 13.3375 11.0234 13.3375C10.3607 13.3375 12.5898 13.3375 13.2001 13.3375H10.8001L4.8001 13.3375C4.13736 13.3375 3.6001 12.8002 3.6001 12.1375C3.6001 11.4748 4.13736 10.9375 4.8001 10.9375L10.8001 10.9375H11.0234C12.0234 10.9375 11.3374 10.9378 12.0001 10.9378Z" fill="#00C8E1"/>
</svg>
          `;
      icon.classList.add("open");
      accordion.classList.add(
        "shadow-faq_active_shadow",
        "accrodind_border_gradient",
        "opacity-100"
      );
      accordion.classList.remove(
        "shadow-faq_shadow",
        "border-gary-vlight",
        "opacity-70"
      );
    }
  });
});

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");

  if (window.scrollY > 100) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});
document.getElementById("back-to-top").addEventListener("click", function () {
  var scrollToTop = function () {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 20);
      setTimeout(scrollToTop, 5);
    }
  };

  scrollToTop();
  return false;
});
