document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  const multiSelectCheckbox = document.getElementById("multiselect");

  // Initialize accordion state
  accordions.forEach((accordion, index) => {
    const titleSection = accordion.querySelector(".title-section");
    const expandIcon = titleSection.querySelector(".expand-icon");
    const collapseIcon = titleSection.querySelector(".collapse-icon");
    const description = accordion.querySelector(".description");

    // Expand the first item by default
    if (index === 0) {
      accordion.classList.add("expanded");
      expandIcon.style.display = "none";
      collapseIcon.style.display = "block";
      description.style.display = "block";
    } else {
      expandIcon.style.display = "block";
      collapseIcon.style.display = "none";
      description.style.display = "none";
    }

    titleSection.addEventListener("click", function () {
      const isExpanded = accordion.classList.contains("expanded");

      if (!isExpanded || (isExpanded && multiSelectCheckbox.checked)) {
        if (!multiSelectCheckbox.checked) {
          // Collapse the item if "Multiple" is not checked
          if (isExpanded) {
            accordion.classList.remove("expanded");
            expandIcon.style.display = "block";
            collapseIcon.style.display = "none";
            description.style.display = "none";
            return;
          }

          // Collapse other items if "Multiple" is not checked
          accordions.forEach((item) => {
            if (item !== accordion) {
              item.classList.remove("expanded");
              item.querySelector(".expand-icon").style.display = "block";
              item.querySelector(".collapse-icon").style.display = "none";
              item.querySelector(".description").style.display = "none";
            }
          });
        }

        // Toggle the current item's state
        accordion.classList.toggle("expanded");

        // Toggle icons
        expandIcon.style.display = isExpanded ? "block" : "none";
        collapseIcon.style.display = isExpanded ? "none" : "block";

        // Collapse or expand the description
        description.style.display = isExpanded ? "none" : "block";
      }
    });
  });

  // Handle multi-select checkbox
  multiSelectCheckbox.addEventListener("change", function () {
    accordions.forEach((accordion) => {
      const expandIcon = accordion.querySelector(".expand-icon");
      const collapseIcon = accordion.querySelector(".collapse-icon");
      const description = accordion.querySelector(".description");

      accordion.classList.remove("expanded");
      expandIcon.style.display = "block";
      collapseIcon.style.display = "none";
      description.style.display = "none";
    });
  });
});