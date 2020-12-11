

        function showNextItem(slider, itemActive, itemCount) {
          let next;
          if (itemActive < itemCount) {
            next = itemActive + 1;
          } else {
            next = 1;
          }
          slider.children("div:nth-child(" + next + ")").addClass("active");
        };

        function showPrevItem(slider, itemActive, itemCount) {
          let prev;
          if (itemActive !== 1) {
            prev = itemActive - 1;
          } else {
            prev = itemCount;
          }
          slider.children("div:nth-child(" + prev + ")").addClass("active");
        };

        $(".slider-nav i").unbind("click").click(function() {
          let slider = $(this).parent(".slider-nav").prev(".slider");
          let itemActive = slider.children(".active").index() + 1;
          let itemCount = slider.children("div").length;

          if ($(this).hasClass("next")) {
            showNextItem(slider, itemActive, itemCount);
          } else if ($(this).hasClass("previous")) {
            showPrevItem(slider, itemActive, itemCount);
          }

          slider.children("div:nth-child(" + itemActive + ")").removeClass("active");
        });
