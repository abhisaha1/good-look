const Calendar = {
    init: function(date = new Date(), onSelect = () => {}) {
        var clickdate = "" + date;
        this.date = date;
        this.selected = date;
        this.onSelect = onSelect;
        this.month = document.querySelectorAll(
            '[data-calendar-area="month"]'
        )[0];
        this.next = document.querySelectorAll(
            '[data-calendar-toggle="next"]'
        )[0];
        this.previous = document.querySelectorAll(
            '[data-calendar-toggle="previous"]'
        )[0];
        this.label = document.querySelectorAll(
            '[data-calendar-label="month"]'
        )[0];
        this.activeDates = null;
        this.date = date;
        this.todaysDate = new Date();
        this.date.setDate(1);
        this.createMonth();
        this.createListeners();

        document
            .querySelector("[data-calendar-date='" + clickdate + "']")
            .click();
    },
    createListeners: function() {
        var t = this;
        this.next.addEventListener("click", function() {
            t.clearCalendar();
            var e = t.date.getMonth() + 1;
            t.date.setMonth(e);
            t.createMonth();
            let selected = document.querySelector(
                "[data-calendar-date='" + t.selected + "']"
            );
            selected && selected.click();
        });
        this.previous.addEventListener("click", function() {
            t.clearCalendar();
            var e = t.date.getMonth() - 1;
            t.date.setMonth(e);
            t.createMonth();
            let selected = document.querySelector(
                "[data-calendar-date='" + t.selected + "']"
            );
            selected && selected.click();
        });
    },
    createDay: function(t, e, a) {
        var i = document.createElement("div");
        var n = document.createElement("span");
        n.innerHTML = t;
        i.className = "cal__date";
        i.setAttribute("data-calendar-date", this.date);
        if (t === 1) {
            var s = (e - 1) * 14.28;
            if (s > 0) {
                i.style.marginLeft = s + "%";
            }
        }
        if (this.date.getTime() <= this.todaysDate.getTime() - 1) {
            i.classList.add("cal__date--disabled");
        } else {
            i.classList.add("cal__date--active");
            i.setAttribute("data-calendar-status", "active");
        }
        if (this.date.toString() === this.todaysDate.toString()) {
            i.classList.add("cal__date--today");
        }
        i.appendChild(n);
        this.month.appendChild(i);
    },
    dateClicked: function() {
        var t = this;
        this.activeDates = document.querySelectorAll(
            '[data-calendar-status="active"]'
        );
        for (var e = 0; e < this.activeDates.length; e++) {
            this.activeDates[e].addEventListener("click", function(evt) {
                var date = evt.currentTarget.dataset.calendarDate;
                t.onSelect(date);
                t.removeActiveClass();
                this.classList.add("cal__date--selected");
            });
        }
    },
    createMonth: function() {
        var t = this.date.getMonth();
        while (this.date.getMonth() === t) {
            this.createDay(
                this.date.getDate(),
                this.date.getDay(),
                this.date.getFullYear()
            );
            this.date.setDate(this.date.getDate() + 1);
        }
        this.date.setDate(1);
        this.date.setMonth(this.date.getMonth() - 1);
        this.label.innerHTML =
            this.monthsAsString(this.date.getMonth()) +
            " " +
            this.date.getFullYear();
        this.dateClicked();
    },
    monthsAsString: function(t) {
        return [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ][t];
    },
    clearCalendar: function() {
        Calendar.month.innerHTML = "";
    },
    removeActiveClass: function() {
        for (var t = 0; t < this.activeDates.length; t++) {
            this.activeDates[t].classList.remove("cal__date--selected");
        }
    }
};

export default Calendar;
